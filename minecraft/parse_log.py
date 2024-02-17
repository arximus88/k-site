import re
import gzip
import os
import json
from collections import Counter

# The directory containing your log files
log_dir_path = '/home/mc/logs'


# Regex pattern to match death messages
# Updated regex pattern to include the new death message
death_pattern = re.compile(
    r'\[Server thread/INFO\]: (\w+) (was slain by|was shot by|fell from a high place|was blown up by|tried to swim in lava|was poked)'
)
# Counter to hold death counts
death_counts = Counter()

# Function to process a single log file
def process_log_file(file_path):
    with open(file_path, 'r') as file:
        for line in file:
            match = death_pattern.search(line)
            if match:
                player = match.group(1)
                death_counts[player] += 1

# Function to process a single gzipped log file
def process_gzipped_log_file(file_path):
    with gzip.open(file_path, 'rt') as file:
        for line in file:
            match = death_pattern.search(line)
            if match:
                player = match.group(1)
                death_counts[player] += 1

# Iterate through all files in the log directory
for file_name in os.listdir(log_dir_path):
    if file_name.endswith('.log'):
        process_log_file(os.path.join(log_dir_path, file_name))
    elif file_name.endswith('.gz'):
        process_gzipped_log_file(os.path.join(log_dir_path, file_name))

# Convert the counter to a dictionary and then dump to a JSON file
death_counts_dict = dict(death_counts)
# save the death_counts to a file in /var/www/kharchenko.work/html/minecraft$
with open('/var/www/kharchenko.work/html/minecraft/death_counts.json', 'w') as json_file:
    json.dump(death_counts_dict, json_file, indent=4)

# Optionally print out death counts for each player
for player, count in death_counts.items():
    print(f"{player} died {count} times.")
