#! /bin/bash

set -e

SLIDEV_FOLDER="../../slides-nds-web-engineering"
WEBSITE_FOLDER="../teaching-abbts.github.io"
MODULE="nds-web-engineering"
DAY="day-2"

cd $SLIDEV_FOLDER

echo "*** Building Slides..."
pnpm run "build-$DAY"

echo "*** Copying Slides..."
cp --recursive --update "./dist/." "$WEBSITE_FOLDER/$MODULE/$DAY/slidev"

# echo "*** Building Slides Export (PDF)..."
# pnpm run "export-$DAY"

# echo "*** Copying Slides Export..."
# cp --force "./slides-export-$DAY.pdf" "$WEBSITE_FOLDER/$MODULE/$DAY/slides-export.pdf"
