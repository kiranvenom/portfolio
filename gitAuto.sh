#!/bin/bash

# Prompt for additional commit message input
read -p "Enter commit message: " COMMIT_MESSAGE

# Check if COMMIT_MESSAGE is empty
if [ -z "$COMMIT_MESSAGE" ]; then
  echo "Commit message cannot be empty."
  exit 1
fi

# Perform Git commands
git add .
git commit -m "fe: ${COMMIT_MESSAGE}"
git push origin main

# Confirmation message
echo "Commit 'fe: ${COMMIT_MESSAGE}' pushed to origin main."
