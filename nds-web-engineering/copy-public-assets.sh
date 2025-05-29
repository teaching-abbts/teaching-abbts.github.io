#! /bin/bash

set -e

SLIDEV_FOLDER="../../slides-nds-web-engineering"
SLIDES_IMAGES_FOLDER_NAME="slides-images"

cp --recursive --update "$SLIDEV_FOLDER/public/$SLIDES_IMAGES_FOLDER_NAME/." "../$SLIDES_IMAGES_FOLDER_NAME"
