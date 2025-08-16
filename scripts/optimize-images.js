const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Check if ImageMagick is installed
function checkImageMagick() {
  try {
    execSync('convert --version', { stdio: 'ignore' });
    return true;
  } catch (error) {
    console.log('❌ ImageMagick not found. Please install it first:');
    console.log('   macOS: brew install imagemagick');
    console.log('   Ubuntu: sudo apt-get install imagemagick');
    console.log('   Windows: Download from https://imagemagick.org/');
    return false;
  }
}

// Get file size in MB
function getFileSizeMB(filePath) {
  const stats = fs.statSync(filePath);
  return (stats.size / (1024 * 1024)).toFixed(2);
}

// Optimize a single image
function optimizeImage(filePath) {
  const originalSize = getFileSizeMB(filePath);
  const ext = path.extname(filePath).toLowerCase();
  
  if (ext === '.jpg' || ext === '.jpeg') {
    // Optimize JPEG
    execSync(`convert "${filePath}" -strip -quality 85 -interlace Plane "${filePath}"`);
  } else if (ext === '.png') {
    // Optimize PNG
    execSync(`convert "${filePath}" -strip -quality 85 "${filePath}"`);
  }
  
  const newSize = getFileSizeMB(filePath);
  const savings = ((originalSize - newSize) / originalSize * 100).toFixed(1);
  
  console.log(`✅ ${path.basename(filePath)}: ${originalSize}MB → ${newSize}MB (${savings}% reduction)`);
}

// Find and optimize large images
function optimizeLargeImages() {
  const publicDir = path.join(__dirname, '..', 'public');
  const largeImages = [];
  
  function scanDirectory(dir) {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        scanDirectory(filePath);
      } else if (stat.isFile()) {
        const ext = path.extname(file).toLowerCase();
        if (['.jpg', '.jpeg', '.png'].includes(ext)) {
          const sizeMB = stat.size / (1024 * 1024);
          if (sizeMB > 1) { // Images larger than 1MB
            largeImages.push({ path: filePath, size: sizeMB });
          }
        }
      }
    }
  }
  
  scanDirectory(publicDir);
  
  // Sort by size (largest first)
  largeImages.sort((a, b) => b.size - a.size);
  
  console.log(`\n🔍 Found ${largeImages.length} images larger than 1MB:`);
  largeImages.forEach(img => {
    console.log(`   ${path.relative(publicDir, img.path)}: ${img.size.toFixed(2)}MB`);
  });
  
  if (largeImages.length === 0) {
    console.log('✅ No large images found to optimize!');
    return;
  }
  
  console.log('\n🚀 Starting image optimization...\n');
  
  let totalOriginalSize = 0;
  let totalNewSize = 0;
  
  largeImages.forEach(img => {
    try {
      const originalSize = getFileSizeMB(img.path);
      totalOriginalSize += parseFloat(originalSize);
      
      optimizeImage(img.path);
      
      const newSize = getFileSizeMB(img.path);
      totalNewSize += parseFloat(newSize);
    } catch (error) {
      console.log(`❌ Failed to optimize ${path.basename(img.path)}: ${error.message}`);
    }
  });
  
  const totalSavings = ((totalOriginalSize - totalNewSize) / totalOriginalSize * 100).toFixed(1);
  console.log(`\n📊 Total optimization results:`);
  console.log(`   Original size: ${totalOriginalSize.toFixed(2)}MB`);
  console.log(`   New size: ${totalNewSize.toFixed(2)}MB`);
  console.log(`   Total savings: ${(totalOriginalSize - totalNewSize).toFixed(2)}MB (${totalSavings}%)`);
}

// Main execution
if (require.main === module) {
  console.log('🖼️  Image Optimization Script');
  console.log('=============================\n');
  
  if (!checkImageMagick()) {
    process.exit(1);
  }
  
  optimizeLargeImages();
} 