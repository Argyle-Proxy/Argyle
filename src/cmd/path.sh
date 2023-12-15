#!/usr/bin/bash

if [ ! -f ".run-once-marker" ]; then
  echo "Running the command for the first time..."

  export PATH="$PATH:/opt/build/repo/src/src/node_modules/.bin"

  npm install -g astro

  npm install -g @astrojs/check

  touch .run-once-marker
else
  echo "Command already executed. Skipping..."
fi