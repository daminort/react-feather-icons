/**
 * This tool is intended for converting SVG files to React components.
 * It must be started from folder above of this project folder
 * that comprises 'icons' folder with original *.svg files of Feather Icons.
 */

const fs = require('fs');
const cwd = process.cwd();

const originIconsPath = `${cwd}/icons`;
const targetIconsPath = `${cwd}/react-feather-icons/src/icons`;

try {
  // Removing files
  clearTarget(targetIconsPath);

  // Creating icons
  const svgFiles = fs.readdirSync(originIconsPath);
  svgFiles.forEach(fileName => {
    const fullFileName   = `${originIconsPath}/${fileName}`;
    const iconName       = createIconName(fileName);
    const resultFileName = fullFileName.replace(fileName, `${iconName}.js`);

    const fileContent = fs.readFileSync(fullFileName, 'utf8');
    const svgContent = getContentSVG(fileContent);

    console.log(svgContent);
  });

} catch (error) {
  console.log(error);
};

// Service --------------------------------------------------------------------
function createIconName(fileName) {
  const name = fileName.replace('.svg', '');
  const parts = name.split('-');
  let result = '';
  parts.forEach((part, index) => {
    if (index === 0) {
      result += part;
      return;
    }
    const symbols = part.split('');
    symbols[0] = symbols[0].toUpperCase();

    result += symbols.join('');
  });

  return result;
}

function clearTarget(path) {
  try {
    const files = fs.readdirSync(path);
    files.forEach(fileName => {
      fs.unlinkSync(`${path}/${fileName}`);
    });
  } catch (error) {
    throw error;
  }
}

function getContentSVG(fileContent) {
  const regex = /^<svg.*?>(.*?)<\/svg>/gm;
  const matches = regex.exec(fileContent);
  if (!Array.isArray(matches) || matches.length < 2) {
    return null;
  }

  return matches[1];
};
