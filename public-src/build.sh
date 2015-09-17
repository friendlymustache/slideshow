ember build --environment=production
cd .. && rm -rf public/assets && rm public/index.html
cp -R public-src/dist/* public/                           
