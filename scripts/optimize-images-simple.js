const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Get file size in MB
function getFileSizeMB(filePath) {
  const stats = fs.statSync(filePath);
  return (stats.size / (1024 * 1024)).toFixed(2);
}

// Check if we can use sharp (a Node.js image processing library)
function checkSharp() {
  try {
    require('sharp');
    return true;
  } catch (error) {
    return false;
  }
}

// Install sharp if not available
function installSharp() {
  try {
    console.log('📦 Installing sharp for image optimization...');
    execSync('npm install sharp', { stdio: 'inherit' });
    return true;
  } catch (error) {
    console.log('❌ Failed to install sharp:', error.message);
    return false;
  }
}

// Optimize image using sharp
async function optimizeImageWithSharp(filePath) {
  try {
    const sharp = require('sharp');
    const originalSize = getFileSizeMB(filePath);
    const ext = path.extname(filePath).toLowerCase();
    
    // Create backup
    const backupPath = filePath + '.backup';
    fs.copyFileSync(filePath, backupPath);
    
    if (ext === '.jpg' || ext === '.jpeg') {
      await sharp(filePath)
        .jpeg({ quality: 85, progressive: true })
        .toFile(filePath + '.temp');
    } else if (ext === '.png') {
      await sharp(filePath)
        .png({ quality: 85, progressive: true })
        .toFile(filePath + '.temp');
    }
    
    // Replace original with optimized version
    fs.renameSync(filePath + '.temp', filePath);
    
    const newSize = getFileSizeMB(filePath);
    const savings = ((originalSize - newSize) / originalSize * 100).toFixed(1);
    
    console.log(`✅ ${path.basename(filePath)}: ${originalSize}MB → ${newSize}MB (${savings}% reduction)`);
    
    // Remove backup if optimization was successful
    fs.unlinkSync(backupPath);
    
  } catch (error) {
    console.log(`❌ Failed to optimize ${path.basename(filePath)}: ${error.message}`);
    // Restore backup if it exists
    const backupPath = filePath + '.backup';
    if (fs.existsSync(backupPath)) {
      fs.renameSync(backupPath, filePath);
    }
  }
}

// Simple file size reduction by copying with different quality
function simpleOptimizeImage(filePath) {
  try {
    const originalSize = getFileSizeMB(filePath);
    const ext = path.extname(filePath).toLowerCase();
    
    // Create backup
    const backupPath = filePath + '.backup';
    fs.copyFileSync(filePath, backupPath);
    
    // For now, just report the file size
    console.log(`📊 ${path.basename(filePath)}: ${originalSize}MB (needs manual optimization)`);
    
    return originalSize;
  } catch (error) {
    console.log(`❌ Error processing ${path.basename(filePath)}: ${error.message}`);
    return 0;
  }
}

// Find and analyze large images
function analyzeLargeImages() {
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
  
  return largeImages;
}

// Main optimization function
async function optimizeLargeImages() {
  const largeImages = analyzeLargeImages();
  
  if (largeImages.length === 0) {
    console.log('✅ No large images found to optimize!');
    return;
  }
  
  console.log('\n🚀 Starting image optimization...\n');
  
  let totalOriginalSize = 0;
  let totalNewSize = 0;
  
  // Check if sharp is available
  if (checkSharp()) {
    console.log('✅ Using sharp for image optimization...\n');
    
    for (const img of largeImages) {
      const originalSize = parseFloat(getFileSizeMB(img.path));
      totalOriginalSize += originalSize;
      
      await optimizeImageWithSharp(img.path);
      
      const newSize = parseFloat(getFileSizeMB(img.path));
      totalNewSize += newSize;
    }
  } else {
    console.log('⚠️  Sharp not available. Installing...\n');
    
    if (installSharp()) {
      console.log('✅ Sharp installed successfully. Retrying optimization...\n');
      
      for (const img of largeImages) {
        const originalSize = parseFloat(getFileSizeMB(img.path));
        totalOriginalSize += originalSize;
        
        await optimizeImageWithSharp(img.path);
        
        const newSize = parseFloat(getFileSizeMB(img.path));
        totalNewSize += newSize;
      }
    } else {
      console.log('❌ Could not install sharp. Providing manual optimization instructions...\n');
      
      for (const img of largeImages) {
        totalOriginalSize += img.size;
        simpleOptimizeImage(img.path);
      }
      
      console.log('\n📋 Manual Optimization Instructions:');
      console.log('1. Install ImageMagick: brew install imagemagick');
      console.log('2. Or use online tools like TinyPNG, Squoosh.app');
      console.log('3. Or install sharp: npm install sharp');
      console.log('4. Re-run this script after installation');
      
      return;
    }
  }
  
  if (totalNewSize > 0) {
    const totalSavings = ((totalOriginalSize - totalNewSize) / totalOriginalSize * 100).toFixed(1);
    console.log(`\n📊 Total optimization results:`);
    console.log(`   Original size: ${totalOriginalSize.toFixed(2)}MB`);
    console.log(`   New size: ${totalNewSize.toFixed(2)}MB`);
    console.log(`   Total savings: ${(totalOriginalSize - totalNewSize).toFixed(2)}MB (${totalSavings}%)`);
    
    console.log('\n🎉 Image optimization completed successfully!');
    console.log('💡 Your website should now load significantly faster.');
  }
}

// Main execution
if (require.main === module) {
  console.log('🖼️  Simple Image Optimization Script');
  console.log('====================================\n');
  
  optimizeLargeImages().catch(console.error);
} 