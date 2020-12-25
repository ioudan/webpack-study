yarn build &&
git switch gh-pages &&
rm -rf *.html *.js *.css *.png &&
mv dist/* ./ &&
rm -rf dist;
git add . &&
git commit -m 'Update' &&
git push &&
git checkout -
