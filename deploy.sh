#!/bin/bash
rm -rf styleguide || exit 0;
npm install
npm run styleguide
( cd styleguide
 git init
 git config user.name "Travis-CI"
 git config user.email "travis@coveo.com"
 git add .
 git commit -m "Autodeploy to Github Pages"
 git push --force --quiet "https://${GH_TOKEN}@github.com/Coveo/styleguide.git" master:gh-pages > /dev/null 2>&1
)
