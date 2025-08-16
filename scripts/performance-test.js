const https = require('https');
const http = require('http');

function testPerformance(url, iterations = 5) {
    console.log(`\n🚀 Testing performance for: ${url}`);
    console.log('=' .repeat(50));
    
    const times = [];
    const protocol = url.startsWith('https') ? https : http;
    
    function makeRequest(index) {
        return new Promise((resolve, reject) => {
            const startTime = Date.now();
            
            protocol.get(url, (res) => {
                const endTime = Date.now();
                const duration = endTime - startTime;
                times.push(duration);
                
                console.log(`Request ${index + 1}: ${duration}ms (Status: ${res.statusCode})`);
                
                if (index < iterations - 1) {
                    setTimeout(() => makeRequest(index + 1), 1000);
                } else {
                    resolve(times);
                }
            }).on('error', (err) => {
                reject(err);
            });
        });
    }
    
    return makeRequest(0).then((times) => {
        const avg = times.reduce((a, b) => a + b, 0) / times.length;
        const min = Math.min(...times);
        const max = Math.max(...times);
        
        console.log('\n📊 Performance Summary:');
        console.log(`Average: ${avg.toFixed(2)}ms`);
        console.log(`Min: ${min}ms`);
        console.log(`Max: ${max}ms`);
        
        // Performance rating
        let rating = '🟢 Excellent';
        if (avg > 1000) rating = '🔴 Poor';
        else if (avg > 500) rating = '🟡 Fair';
        else if (avg > 200) rating = '🟠 Good';
        
        console.log(`Rating: ${rating}`);
        
        return { avg, min, max, rating };
    });
}

// Test multiple pages
async function runTests() {
    const baseUrl = 'http://localhost:3000';
    const pages = [
        '/en/ocean-freight-forms',
        '/en',
        '/en/about-us',
        '/en/contact'
    ];
    
    console.log('🎯 Performance Test Suite');
    console.log('=' .repeat(50));
    
    for (const page of pages) {
        try {
            await testPerformance(`${baseUrl}${page}`, 3);
        } catch (error) {
            console.error(`❌ Error testing ${page}:`, error.message);
        }
    }
}

// Run if called directly
if (require.main === module) {
    runTests().catch(console.error);
}

module.exports = { testPerformance, runTests }; 