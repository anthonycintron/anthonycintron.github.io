const fs = require('fs');
const path = require('path');

console.log('Starting build process...');

// Ensure all required directories exist
const requiredDirs = [
  'css',
  'js',
  'images',
  'fonts',
  'components',
  'portfolio',
  'product_design',
  'creative_studio',
  'product_factory'
];

requiredDirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    console.warn(`Warning: Directory ${dir} does not exist`);
  }
});

// Check for required files
const requiredFiles = [
  'index.html',
  'css/main.css'
];

let missingFiles = [];
requiredFiles.forEach(file => {
  if (!fs.existsSync(file)) {
    missingFiles.push(file);
  }
});

if (missingFiles.length > 0) {
  console.warn('Missing files:', missingFiles);
}

// Create a simple index.html if it doesn't exist
if (!fs.existsSync('index.html')) {
  console.log('Creating fallback index.html...');
  const fallbackHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Anthony Cintron | Product Strategist, Technologist and Designer</title>
  <link rel="stylesheet" href="css/main.css">
</head>
<body>
  <div id="header" class="row">
    <div id="introduction" class="column">
      <h2 class="hello">I'm Anthony Cintron.</h2>
    </div>
    <div id="brand" class="column">
      <a href="#contact">
        <img class="avatar" src="images/avatar.png" alt="Anthony Cintron"/>
      </a>
    </div>
  </div>

  <div class="row" id="experienceContainer">
    <p>I design products customers want, without wasting time on things they don't.</p>
  </div>

  <div class="row" id="productDesignBtn">
    <a href="portfolio/product-design/case-studies/index.html">View Work</a>
  </div>

  <div id="contact" class="productContainer row">
    <h1 class="method_title">Contact</h1>
    <p>Available for freelance and full-time opportunities.</p>
    <div class="social_media row">
      <a class="column" href="https://www.linkedin.com/in/anthonycintron/" target="_blank">
        <img src="images/linkedin-icon.svg" alt="LinkedIn Profile"/>
      </a>
      <a class="column" href="https://twitter.com/supdun" target="_blank">
        <img src="images/twitter-icon.svg" alt="Twitter Profile"/>
      </a>
      <a class="column" href="mailto:anthony.cintron@gmail.com" target="_blank">
        <img src="images/google-icon.svg" alt="Google"/>
      </a>
      <a class="column" href="https://www.instagram.com/supdun212/" target="_blank">
        <img src="images/instagram-icon.svg" alt="Instagram"/>
      </a>
    </div>
    <p class="credits">Website designed, developed, and illustrated by Anthony Cintron 2022.</p>
  </div>
</body>
</html>`;
  
  fs.writeFileSync('index.html', fallbackHtml);
}

console.log('Build completed successfully!');
console.log('Static site ready for deployment');

// List all files for debugging
console.log('\nProject structure:');
function listFiles(dir, prefix = '') {
  try {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      if (stat.isDirectory() && !file.startsWith('.')) {
        console.log(`${prefix}📁 ${file}/`);
        if (prefix.length < 6) { // Limit depth
          listFiles(filePath, prefix + '  ');
        }
      } else if (!file.startsWith('.')) {
        console.log(`${prefix}📄 ${file}`);
      }
    });
  } catch (err) {
    console.warn(`Cannot read directory ${dir}:`, err.message);
  }
}

listFiles('.');