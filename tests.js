function runTests() {
    const tests = [
        { first: 5, operator: '+', second: 3, expected: 8 },
        { first: 10, operator: '-', second: 4, expected: 6 },
        { first: 6, operator: '*', second: 7, expected: 42 },
        { first: 15, operator: '/', second: 3, expected: 5 },
        { first: 17, operator: '%', second: 5, expected: 2 },
        { first: 0.1, operator: '+', second: 0.2, expected: 0.3 },
        { first: 999, operator: '*', second: 0, expected: 0 },
        { first: 5, operator: '/', second: 0, expected: Infinity },
    ];

    let passedTests = 0;
    
    tests.forEach((test, index) => {
        const result = calculate(test.first, test.operator, test.second);
        const passed = Math.abs(result - test.expected) < 0.0001; // Handle floating point precision
        
        console.log(`Test ${index + 1}: ${test.first} ${test.operator} ${test.second}`);
        console.log(`Expected: ${test.expected}, Got: ${result}`);
        console.log(`Status: ${passed ? 'PASSED' : 'FAILED'}\n`);
        
        if (passed) passedTests++;
    });

    console.log(`Passed ${passedTests} out of ${tests.length} tests`);
}

// Add this to your HTML file: 