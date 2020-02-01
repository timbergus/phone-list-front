const fs = require('fs');
const { PNG } = require('pngjs');
const pixelmatch = require('pixelmatch');

const img1 = PNG.sync.read(fs.readFileSync('__tests__/screenshots/iPhone Xr.png'));
const img2 = PNG.sync.read(fs.readFileSync('__tests__/screenshots/iPhone11 Pro.png'));

const { width, height } = img1;

const diff = new PNG({ width, height });

pixelmatch(img1.data, img2.data, diff.data, width, height, { threshold: 0.1 });

fs.writeFileSync('__tests__/screenshots-diff/diff.png', PNG.sync.write(diff));
