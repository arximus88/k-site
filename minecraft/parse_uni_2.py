import re
import gzip
import os
import json
from collections import Counter

# The directory containing your log files
log_dir_path = '/home/mc/logs'

# Whitelisted player names (lowercase for normalization)
whitelist = {
    'tsykor', 'ivanec_original', 'stasbond', 'arximus', 'calo2112', 'zlatamc', 'serhiibanana'
}

# Normalize names where case and variations exist (e.g., 'stasbond' and 'StasBond')
normalized_names = {
    'stasbond': 'stasbond',
    'StasBond': 'stasbond'
}

# Improved mapping for killers
killer_mapping = {
    'iron': 'Iron Golem',
    'zombified': 'Zombified Villager',
    'lava': 'Lava'  # Handling lava as a killer
}

# Regex patterns
death_pattern = re.compile(
    r'\[Server thread/INFO\]: (\w+) (was slain by|was shot by|fell from a high place|was blown up by|tried to swim in lava|was poked to death by|while trying to escape) (.*?)(?=\s|$)'
)
fall_pattern = re.compile(
    r'\[Server thread/INFO\]: (\w+) fell from a high place')
lava_pattern = re.compile(
    r'\[Server thread/INFO\]: (\w+) tried to swim in lava')

# Counters
player_deaths = Counter()
killer_counts = Counter()

# Unified function to process log files


def process_log_file(file_path):
    open_func = gzip.open if file_path.endswith('.gz') else open
    mode = 'rt' if file_path.endswith('.gz') else 'r'

    with open_func(file_path, mode, encoding='utf-8') as file:
        for line in file:
            death_match = death_pattern.search(line)
            fall_match = fall_pattern.search(line)
            lava_match = lava_pattern.search(line)

            if death_match:
                player, _, killer_info = death_match.groups()
                player = normalized_names.get(player.lower(), player.lower())
                if player in whitelist:
                    player_deaths[player] += 1
                    if "by" in death_match.group(2):
                        killer = killer_mapping.get(
                            killer_info.split()[-1].lower(), killer_info.split()[-1])
                        # Skip counting if killer is "a"
                        if killer != "a":
                            killer_counts[killer] += 1
            elif fall_match:
                player = fall_match.group(1).lower()
                if player in whitelist:
                    player_deaths[player] += 1
                    # Rename "Falling" to "Gravity Force"
                    killer_counts['Gravity Force'] += 1
            elif lava_match:
                player = lava_match.group(1).lower()
                if player in whitelist:
                    player_deaths[player] += 1
                    killer_counts['Lava'] += 1


# Process all log files in the directory
for file_name in os.listdir(log_dir_path):
    if file_name.endswith(('.log', '.gz')):
        process_log_file(os.path.join(log_dir_path, file_name))

# Print results to console
print("Player Deaths:")
for player, count in player_deaths.most_common():
    print(f"{player} died {count} times")

print("\nCreature Kills:")
for killer, count in killer_counts.most_common():
    print(f"{killer} - {count} kills")
# Save results to JSON files
with open('/var/www/kharchenko.work/html/minecraft/death_counts.json', 'w') as json_file:
    json.dump(dict(player_deaths), json_file, indent=4)

with open('/var/www/kharchenko.work/html/minecraft/killer_counts.json', 'w') as json_file:
    json.dump(dict(killer_counts), json_file, indent=4)
