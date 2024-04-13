const fs = require('fs');
const path = require('path');

const nodeModulesPath = path.resolve('./node_modules');
const cachePath = path.join(nodeModulesPath, '.cache');

fs.rmSync(cachePath, { recursive: true, force: true });
