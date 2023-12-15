#!/usr/bin/bash

if [ ! -f ".run-once-marker" ]; then
  echo "Running the command for the first time..."

  sudo chown -R $USER /opt/build/repo/src/cmd/path.sh

  export PATH="$PATH:/opt/build/repo/src/src/node_modules/.bin"

  touch .run-once-marker
else
  echo "Command already executed. Skipping..."
fi