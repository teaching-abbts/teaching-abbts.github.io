#! /bin/bash

set -e

SLIDEV_Folder="../slides-nds-web-engineering"
WEBSITE_FOLDER="../teaching-abbts.github.io"
DAY="day-1"

cd $APP_FOLDER

echo "*** Building Slides..."
pnpm run build

echo "*** Copying Slides..."
cp --recursive --update "./dist/." "$WEBSITE_FOLDER/$DAY/slidev"

echo "*** Building Slides Export (PDF)..."
pnpm run export

echo "*** Copying Slides Export..."
cp --force "./slides-export.pdf" "$WEBSITE_FOLDER/$DAY"
