#!/bin/bash

TIME_LIMIT=$1
MEMORY_LIMIT_KB=$2
COMMAND=$3

ulimit -v "$MEMORY_LIMIT_KB"

STDOUT_FILE=$(mktemp)
TIME_FILE=$(mktemp)

# Capture start time in milliseconds
START_TIME=$(date +%s%3N)

# Use time to wrap the timeout command (reverse of before)
/usr/bin/time -f "%M" -o "$TIME_FILE" timeout --preserve-status --kill-after=1 "$TIME_LIMIT" bash -c "$COMMAND" > "$STDOUT_FILE"
STATUS=$?

# Capture end time in milliseconds
END_TIME=$(date +%s%3N)

# Calculate execution time
EXEC_TIME_MS=$((END_TIME - START_TIME))

# Output program stdout
cat "$STDOUT_FILE"

# Get memory usage from time command
MEM_KB=$(tail -1 "$TIME_FILE" 2>/dev/null || echo "0")

# Clean up
rm -f "$STDOUT_FILE" "$TIME_FILE"

# Print time/memory stats to stdout
echo ""               # Add newline after stdout
echo "$EXEC_TIME_MS"  # Time in MS (actual measurement)
echo "$MEM_KB"        # Memory in KB from time command

# Exit cleanly with reason
exit "$STATUS"
