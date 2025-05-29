#! /bin/bash

set -e

APP_FOLDER="../nds-web-egineering-app"
WEBSITE_FOLDER="../teaching-abbts.github.io"

cd $APP_FOLDER

pnpm run build

cp --recursive --update "./dist/." "$WEBSITE_FOLDER"
