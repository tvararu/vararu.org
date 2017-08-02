#!/bin/sh
STEPS=7

echo "\n[1/$STEPS] Writing CNAME and .nojeykll files to ./out" &&
echo "vararu.org" > out/CNAME &&
touch out/.nojekyll &&

echo "\n[2/$STEPS] Commiting ./out as temporary commit" &&
git add out &&
git commit --no-verify -m "Deploy" &&

echo "\n[3/$STEPS] Splitting ./out folder into local gh-pages subtree branch" &&
git subtree split --prefix out -b gh-pages &&

echo "\n[4/$STEPS] Force pushing branch gh-pages to origin" &&
git push -f origin gh-pages:gh-pages &&

echo "\n[5/$STEPS] Deleting local gh-pages branch" &&
git branch -D gh-pages &&

echo "\n[6/$STEPS] Discarding temporary deploy commit" &&
git reset --hard HEAD^ &&

echo "\n[7/$STEPS] Deployed! https://vararu.org/"
