#!/bin/bash
rm -rf out || exit 0;
mkdir out;
npm run styleguide
( cd styleguide
 git init
 git config user.name "Travis-CI"
 git config user.email "travis@coveo.com"
 git add .
 git commit -m "Autodeploy to Github Pages"
 git push --force --quiet "https://${GH_TOKEN}@${GH_REF}" master:gh-pages > /dev/null 2>&1
)
