#!/bin/bash

# Generate timestamp for cache busting
TIMESTAMP=$(date +%s)

# Update CSS cache version
sed -i.bak "s/styles\.css?v=[0-9]*/styles.css?v=$TIMESTAMP/g" index.html

# Update JS cache version  
sed -i.bak "s/app\.js?v=[0-9]*/app.js?v=$TIMESTAMP/g" index.html

# Remove backup file
rm index.html.bak

echo "Cache version updated to: $TIMESTAMP"
echo "Don't forget to commit and push your changes!"