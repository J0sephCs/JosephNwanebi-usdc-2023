/** 
 * RECOMMENDATION
 * 
 * To test your code, you should open "tester.html" in a web browser.
 * You can then use the "Developer Tools" to see the JavaScript console.
 * There, you will see the results unit test execution. You are welcome
 * to run the code any way you like, but this is similar to how we will
 * run your code submission.
 * 
 * The Developer Tools in Chrome are available under the "..." menu, 
 * futher hidden under the option "More Tools." In Firefox, they are 
 * under the hamburger (three horizontal lines), also hidden under "More Tools." 
 */

/**
 * Searches for matches in scanned text.
 * @param {string} searchTerm - The word or term we're searching for. 
 * @param {JSON} scannedTextObj - A JSON object representing the scanned text.
 * @returns {JSON} - Search results.
 * */ 
 function findSearchTermInBooks(searchTerm, scannedTextObj) {
    /** You will need to implement your search and 
     * return the appropriate object here. */

    let isbnNum= scannedTextObj[0].ISBN;
    let page= scannedTextObj[0].Content[0].Page;
 
    for(let i=0; i<scannedTextObj[0].Content.length; i++){
        let words= scannedTextObj[0].Content[i].Text.split(' ');
        for(let j=0; j<words.length; j++){
            if(searchTerm === words[j]){
                let result=  {
                    "SearchTerm": searchTerm,
                    "Results": [
                        {
                            "ISBN": isbnNum,
                            "Page": page,
                            "Line": scannedTextObj[0].Content[i].Line
                        }
                    ]
                };
                return result;
            }
        }
    } 
}
    


/** Example input object. */
const twentyLeaguesIn = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            },
            //Added content for unit testing
            {
                "Page": 31,
                "Line": 11,
                "Text": "I couldn't think of anything. His vision was nearly mutant like."
            },
            {
                "Page": 31,
                "Line": 12,
                "Text": "I was shocked and his vision got better as it got darker."

            }
        ] 
    }
]
    
// /** Example output object */
const twentyLeaguesOut = {
    "SearchTerm": "the",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        }
    ]
}

/* Positive unit test output object */
const positiveUnitTest = {
    "SearchTerm": "eyes",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 10
        }
    ]
}

/* Case-sensetive unit test output object */
const caseSenseUnitTest = {
    "SearchTerm": "his",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 12
        }
    ]
}

/*
 _   _ _   _ ___ _____   _____ _____ ____ _____ ____  
| | | | \ | |_ _|_   _| |_   _| ____/ ___|_   _/ ___| 
| | | |  \| || |  | |     | | |  _| \___ \ | | \___ \ 
| |_| | |\  || |  | |     | | | |___ ___) || |  ___) |
 \___/|_| \_|___| |_|     |_| |_____|____/ |_| |____/ 
                                                      
 */

/* We have provided two unit tests. They're really just `if` statements that 
 * output to the console. We've provided two tests as examples, and 
 * they should pass with a correct implementation of `findSearchTermInBooks`. 
 * 
 * Please add your unit tests below.
 * */

/** We can check that, given a known input, we get a known output. */
const test1result = findSearchTermInBooks("the", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut) === JSON.stringify(test1result)) {
    console.log("PASS: Test 1");
} else {
    console.log("FAIL: Test 1");
    console.log("Expected:", twentyLeaguesOut);
    console.log("Received:", test1result);
}

/** We could choose to check that we get the right number of results. */
const test2result = findSearchTermInBooks("the", twentyLeaguesIn); 
if (test2result.Results.length == 1) {
    console.log("PASS: Test 2");
} else {
    console.log("FAIL: Test 2");
    console.log("Expected:", twentyLeaguesOut.Results.length);
    console.log("Received:", test2result.Results.length);
}

/** Positive unit tests */
const unitTest1 = findSearchTermInBooks("eyes", twentyLeaguesIn);
if (JSON.stringify(positiveUnitTest) === JSON.stringify(unitTest1)) {
    console.log("PASS: Positive unit test 1 (Match found)");
} else {
    console.log("FAIL: Positive unit test 1 (No matches found)");
    console.log("Expected:", positiveUnitTest); 
    console.log("Received:", unitTest1);
}

const unitTest1B = findSearchTermInBooks("the", twentyLeaguesIn);
if (JSON.stringify(positiveUnitTest) === JSON.stringify(unitTest1B)) {
    console.log("PASS: Positive unit test 1B (Match found)");
} else {
    console.log("FAIL: Positive unit test 1B (No matches found)");
    console.log("Expected:", positiveUnitTest); 
    console.log("Received:", unitTest1B);
}

/** Negative unit tests */
const unitTest2 = findSearchTermInBooks("Joseph", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut) === JSON.stringify(unitTest2)) {
    console.log("FAIL: Negative unit test 2 (Match found)");
    console.log("Expected:", twentyLeaguesOut);
    console.log("Received:", unitTest2);
} else {
    console.log("PASS: Negative unit test 2 (No matches found)");
}

const unitTest2B = findSearchTermInBooks("the", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut) === JSON.stringify(unitTest2B)) {
    console.log("FAIL: Negative unit test 2B (Match found)");
    console.log("Expected:", twentyLeaguesOut);
    console.log("Received:", unitTest2B);
} else {
    console.log("PASS: Negative unit test 2B (No matches found)");
}

/** Case-sensetive unit tests */
const unitTest3 = findSearchTermInBooks("his", twentyLeaguesIn);
if (JSON.stringify(caseSenseUnitTest) === JSON.stringify(unitTest3)) {
    console.log("PASS: Case-senseitive unit test 3 (Match found)");
} else {
    console.log("FAIL: Case-sensetive unit test 3 (No matches found)");
    console.log("Expected:", caseSenseUnitTest); 
    console.log("Received:", unitTest3);
}

const unitTest3B = findSearchTermInBooks("His", twentyLeaguesIn);
if (JSON.stringify(caseSenseUnitTest) === JSON.stringify(unitTest3B)) {
    console.log("PASS: Case-senseitive unit test 3B (Match found)");
} else {
    console.log("FAIL: Case-sensetive unit test 3B (No matches found)");
    console.log("Expected:", caseSenseUnitTest); 
    console.log("Received:", unitTest3B);
}