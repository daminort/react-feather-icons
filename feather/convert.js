/**
 * This tool is intended for converting SVG files to React components.
 */

const fs = require('fs');
const cwd = process.cwd();

const originIconsPath  = `${cwd}/feather/icons`;
const targetIconsPath  = `${cwd}/src/icons`;
const templateIconPath = `${cwd}/feather/template.icon.js`;

try {
  // Removing files
  clearTarget(targetIconsPath);

  // Getting template
  const templateIcon = fs.readFileSync(templateIconPath, 'utf8');

  // Creating icons
  const icons = [];
  const svgFiles = fs.readdirSync(originIconsPath);
  svgFiles.forEach(fileName => {
    const fullFileName   = `${originIconsPath}/${fileName}`;
    const originName     = getOriginName(fileName);
    const iconName       = createIconName(originName);
    const resultFileName = `${targetIconsPath}/${iconName}.js`;

    const fileContent    = fs.readFileSync(fullFileName, 'utf8');
    const svgContent     = getContentSVG(fileContent);
    const resultContent  = createContent(templateIcon, svgContent, originName, iconName);

    fs.writeFileSync(resultFileName, resultContent, 'utf8');
    icons.push(iconName);
  });

  console.log('Icons have been successfully converted');

  // Creating index file
  createIndex(icons);

} catch (error) {
  console.log(error);
};

// Service --------------------------------------------------------------------
function getOriginName(fileName) {

  return fileName
    .replace('.svg', '')
    .replace(/^delete$/g, 'remove')
    .replace(/^package$/g, 'packageIcon');
}

function createIconName(originName) {
  const parts = originName.split('-');
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

function createContent(template, content, fileName, iconName) {
  const fnRegex = /fileName/g;
  const inRegex = /iconName/g;
  const cnRegex = /<svg-content \/>/g;

  const result = template
    .replace(inRegex, iconName)
    .replace(fnRegex, fileName)
    .replace(cnRegex, content);

  return result;
}

function createIndex(icons) {
  const targetFileName = `${targetIconsPath}/index.js`;
  let result = '';

  // imports
  icons.forEach(iconName => {
    result +=
`import ${iconName} from './${iconName}';
`;
  });

  // init
  result +=
`
const icons = {`;

  // icons
  icons.forEach(iconName => {
    result +=
`  ${iconName},
`;
  });

  // exports
  result +=
`};

export default icons;
`;

  fs.writeFileSync(targetFileName, result, 'utf8');
  console.log('Index file has been successfully created');
}
