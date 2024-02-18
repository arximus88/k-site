import re
import gzip
import os
import json
from collections import Counter

# The directory containing your log files
log_dir_path = '/home/mc/logs'

# Regex patterns
death_pattern = re.compile(
    r'\[Server thread/INFO\]: (\w+) (was slain by|was shot by|fell from a high place|was blown up by|tried to swim in lava|was poked to death by|while trying to escape) (.*?)(?=\s|$)'
)

# Counters
player_deaths = Counter()
killer_counts = Counter()

# Unified function to process log files


def process_log_file(file_path):
    open_func = gzip.open if file_path.endswith('.gz') else open
    mode = 'rt' if file_path.endswith('.gz') else 'r'
    
    with open_func(file_path, mode) as file:
        for line in file:
            match = death_pattern.search(line)
            if match:
                player, _, killer_info = match.groups()
                player_deaths[player] += 1
                if "by" in match.group(2):  # Group 2 is the death type
                    # Attempt to clean up the killer name
                    killer = killer_info.split()[-1]
                    # Basic validation to filter out unlikely killer names
                    if killer not in ["a", "an", "the", "by", "in", "on", "at", "to"]:
                        killer_counts[killer] += 1


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
with open('/var/www/kharchenko.work/html/minecraft/player_deaths.json', 'w') as json_file:
    json.dump(dict(player_deaths), json_file, indent=4)

with open('/var/www/kharchenko.work/html/minecraft/killer_counts.json', 'w') as json_file:
    json.dump(dict(killer_counts), json_file, indent=4)
