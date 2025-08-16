const fs = require('fs');
const path = require('path');

// Analyze bundle sizes
function analyzeBundleSizes() {
  console.log('📦 Bundle Size Analysis');
  console.log('=======================\n');
  
  const buildOutput = `
Route (app)                                                     Size  First Load
 JS    
┌ ○ /_not-found                                                999 B         102
 kB
├ ƒ /[locale]                                                11.6 kB         358
 kB
├ ƒ /[locale]/about-us                                       10.7 kB         199
 kB
├ ƒ /[locale]/air-freight-forms                              7.25 kB         284
 kB
├ ƒ /[locale]/all-services                                    2.5 kB         174
 kB
├ ƒ /[locale]/buy-rent-container-forms                        3.3 kB         277
 kB
├ ƒ /[locale]/buy-rent-vessels-forms                         3.52 kB         277
 kB
├ ƒ /[locale]/contact                                        3.32 kB         325
 kB
├ ƒ /[locale]/container-services-forms                        9.9 kB         291
 kB
├ ƒ /[locale]/customs-clearance-forms                        8.91 kB         190
 kB
├ ƒ /[locale]/faq                                            19.6 kB         183
 kB
├ ƒ /[locale]/handling-stevedoring-storage-forms             9.64 kB         282
 kB
├ ƒ /[locale]/inland-services-forms                          4.79 kB         284
 kB
├ ƒ /[locale]/international-trading-forms                    10.4 kB         277
 kB
├ ƒ /[locale]/investor-form                                  13.4 kB         252
 kB
├ ƒ /[locale]/ocean-freight-forms                              13 kB         289
 kB
├ ƒ /[locale]/ocean-freight-quotation                        6.74 kB         280
 kB
├ ƒ /[locale]/out-gauge-forms                                 2.6 kB         274
 kB
├ ƒ /[locale]/ship-agency-forms                              10.7 kB         287
 kB
├ ƒ /[locale]/ship-maintenance-forms                         8.51 kB         247
 kB
├ ƒ /[locale]/ship-management-forms                          10.8 kB         252
 kB
├ ƒ /[locale]/special-services-forms                         3.89 kB         246
 kB
├ ƒ /[locale]/suez-canal-form                                4.11 kB         279
 kB
+ First Load JS shared by all                                 101 kB
  ├ chunks/4bd1b696-cc729d47eba2cee4.js                      54.1 kB
  ├ chunks/5964-6d6a41800488ba64.js                          43.9 kB
  └ other shared chunks (total)                              2.61 kB
ƒ Middleware                                                  203 kB`;

  const lines = buildOutput.split('\n');
  const routes = [];
  
  for (const line of lines) {
    if (line.includes('ƒ') && line.includes('kB')) {
      const parts = line.trim().split(/\s+/);
      if (parts.length >= 4) {
        const route = parts[1];
        const size = parts[3];
        if (size && size.includes('kB')) {
          const sizeNum = parseInt(size.replace('kB', ''));
          routes.push({ route, size: sizeNum });
        }
      }
    }
  }
  
  // Sort by size (largest first)
  routes.sort((a, b) => b.size - a.size);
  
  console.log('🚨 Largest Route Bundles:');
  routes.slice(0, 10).forEach(route => {
    console.log(`   ${route.route}: ${route.size}kB`);
  });
  
  console.log('\n📊 Performance Issues:');
  routes.forEach(route => {
    if (route.size > 250) {
      console.log(`   ⚠️  ${route.route} is very large (${route.size}kB) - consider code splitting`);
    } else if (route.size > 150) {
      console.log(`   ⚠️  ${route.route} is large (${route.size}kB) - consider optimization`);
    }
  });
}

// Analyze image sizes
function analyzeImageSizes() {
  console.log('\n🖼️  Image Size Analysis');
  console.log('======================\n');
  
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
          if (sizeMB > 0.5) { // Images larger than 500KB
            largeImages.push({ 
              path: path.relative(publicDir, filePath), 
              size: sizeMB 
            });
          }
        }
      }
    }
  }
  
  scanDirectory(publicDir);
  
  // Sort by size (largest first)
  largeImages.sort((a, b) => b.size - a.size);
  
  console.log('🚨 Largest Images (>500KB):');
  largeImages.slice(0, 15).forEach(img => {
    console.log(`   ${img.path}: ${img.size.toFixed(2)}MB`);
  });
  
  const totalSize = largeImages.reduce((sum, img) => sum + img.size, 0);
  console.log(`\n📊 Total size of large images: ${totalSize.toFixed(2)}MB`);
  
  if (largeImages.length > 0) {
    console.log('\n💡 Recommendations:');
    console.log('   1. Run "npm run optimize:images" to compress large images');
    console.log('   2. Consider using WebP format for better compression');
    console.log('   3. Implement lazy loading for images below the fold');
    console.log('   4. Use responsive images with different sizes');
  }
}

// Performance recommendations
function generateRecommendations() {
  console.log('\n🚀 Performance Optimization Recommendations');
  console.log('==========================================\n');
  
  console.log('1. 🖼️  Image Optimization:');
  console.log('   - Run: npm run optimize:images');
  console.log('   - Convert large images to WebP format');
  console.log('   - Implement lazy loading for images');
  console.log('   - Use responsive images with srcset');
  
  console.log('\n2. 📦 Bundle Optimization:');
  console.log('   - Implement dynamic imports for large components');
  console.log('   - Split vendor bundles (already configured)');
  console.log('   - Remove unused dependencies');
  console.log('   - Use tree shaking for better dead code elimination');
  
  console.log('\n3. 🚀 Next.js Optimizations:');
  console.log('   - Enable static generation where possible');
  console.log('   - Use ISR (Incremental Static Regeneration) for dynamic content');
  console.log('   - Implement proper caching strategies');
  console.log('   - Use Next.js Image component for all images');
  
  console.log('\n4. 🔧 Code Optimizations:');
  console.log('   - Implement React.memo for expensive components');
  console.log('   - Use useMemo and useCallback for expensive calculations');
  console.log('   - Optimize re-renders with proper dependency arrays');
  console.log('   - Remove console.logs in production');
  
  console.log('\n5. 🌐 Network Optimizations:');
  console.log('   - Enable gzip compression (already configured)');
  console.log('   - Implement proper cache headers (already configured)');
  console.log('   - Use CDN for static assets');
  console.log('   - Minimize HTTP requests');
  
  console.log('\n6. 📱 User Experience:');
  console.log('   - Implement skeleton loading states');
  console.log('   - Add progressive loading for large pages');
  console.log('   - Optimize critical rendering path');
  console.log('   - Use service workers for caching');
}

// Main execution
if (require.main === module) {
  console.log('🔍 Website Performance Analysis');
  console.log('================================\n');
  
  analyzeBundleSizes();
  analyzeImageSizes();
  generateRecommendations();
} 