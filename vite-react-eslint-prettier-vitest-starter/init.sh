#!/usr/bin/env sh

usage() {
  echo "Usage: $0 name-your-app"
  exit 1
}

if [ $# -lt 1 ]; then
  usage
fi

name=$1

npm create vite@latest "$name" -- --template react-ts
cd "$name" || exit
npm install -D prettier eslint-config-prettier
cp ../config/.prettierrc .prettierrc
npm install -D vitest @vitest/browser playwright vitest-browser-react
cp -f ../config/vite.config.ts vite.config.ts
npm install -D eslint-plugin-react
cp -f ../config/eslint.config.js