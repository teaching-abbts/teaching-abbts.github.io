#! /bin/bash

set -e

SLIDEV_FOLDER="../../slides-nds-web-engineering"
SLIDES_IMAGES_FOLDER_NAME="slides-images"
SLIDES_ASSETS_FOLDER_NAME="web-assets"

cp --recursive --update "$SLIDEV_FOLDER/public/$SLIDES_IMAGES_FOLDER_NAME/." "../$SLIDES_IMAGES_FOLDER_NAME"
cp --recursive --update "$SLIDEV_FOLDER/public/$SLIDES_ASSETS_FOLDER_NAME/." "../$SLIDES_ASSETS_FOLDER_NAME"
