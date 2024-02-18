import re
import gzip
import os
import json
from collections import Counter

# The directory containing your log files
log_dir_path = '/home/mc/logs'

# Updated regex pattern to match death messages and capture the killer
death_pattern = re.compile(
    r'\[Server thread/INFO\]: (\w+) (was slain by|was shot by|fell from a high place|was blown up by|tried to swim in lava|was poked to death by|while trying to escape) (.*?)(?=\s|$)'
)

# Counter to hold killer counts
killer_counts = Counter()

# Function to process a single log file
def process_log_file(file_path):
    with open(file_path, 'r') as file:
        for line in file:
            match = death_pattern.search(line)
            if match:
                player, death_type, killer_info = match.groups()
                # Check if killer_info is not empty and if death by entity is confirmed
                if killer_info and "by" in death_type:
                    # Extract just the killer entity, which is typically the last word in the killer_info
                    killer = killer_info.split()[-1]
                    killer_counts[killer] += 1

# Function to process a single gzipped log file
def process_gzipped_log_file(file_path):
    with gzip.open(file_path, 'rt') as file:
        for line in file:
            match = death_pattern.search(line)
            if match:
                player, death_type, killer_info = match.groups()
                # Check if killer_info is not empty and if death by entity is confirmed
                if killer_info and "by" in death_type:
                    # Extract just the killer entity, which is typically the last word in the killer_info
                    killer = killer_info.split()[-1]
                    killer_counts[killer] += 1


# Iterate through all files in the log directory
for file_name in os.listdir(log_dir_path):
    if file_name.endswith('.log'):
        process_log_file(os.path.join(log_dir_path, file_name))
    elif file_name.endswith('.gz'):
        process_gzipped_log_file(os.path.join(log_dir_path, file_name))

# Convert the counter to a dictionary and then dump to a JSON file
with open('/var/www/kharchenko.work/html/minecraft/killer_counts.json', 'w') as json_file:
    json.dump(dict(killer_counts), json_file, indent=4)

# Optionally print out killer counts
for killer, count in killer_counts.most_common():
    print(f"{killer} - {count} kills")