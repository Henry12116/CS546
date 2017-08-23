/* 2/13/2016 
I pledge my honor that I have abided by the Stevens Honor System.
Henry Thomas */

var strModule = require("./string.js"),
    numberModule = require("./numbers.js"),
    objectModule = require("./objects.js"),
    arrayModule = require("./arrays.js"),
    dateModule = require("./dates.js");

console.log("All modules have loaded!");

console.log("\n-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");
console.log("             String Module Tests");
console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-\n");

//Occurrences of Substring (case sensitive) testing
console.log("\n-----occurrencesOfSubstring------");
console.log(strModule.occurrencesOfSubstring('hello', 'lo'));
console.log(strModule.occurrencesOfSubstring('', 'lo'));
console.log(strModule.occurrencesOfSubstring('hello', ''));
console.log(strModule.occurrencesOfSubstring('hello', 'Lo'));
console.log(strModule.occurrencesOfSubstring('', ''));
console.log(strModule.occurrencesOfSubstring(1, 0));

//Occurrences of Substring (case insensitive) testing
console.log("\n-----occurrencesOfSubstringInsensitive------");
console.log(strModule.occurencesOfSubstringInsensitive('hello', 'lo'));
console.log(strModule.occurencesOfSubstringInsensitive('', 'lo'));
console.log(strModule.occurencesOfSubstringInsensitive('hello', ''));
console.log(strModule.occurencesOfSubstringInsensitive('hello', 'Lo'));
console.log(strModule.occurencesOfSubstringInsensitive('', ''));
console.log(strModule.occurencesOfSubstringInsensitive(1, 0));

//Randomize Paragraph testing
console.log("\n-----randomizeSentences------");
console.log(strModule.randomizeSentences("Hello. This is the start of a paragraph. It is really neat. Maybe one day I will be able to randomize this."));
console.log(strModule.randomizeSentences(""));
console.log(strModule.randomizeSentences(1));
console.log(strModule.randomizeSentences("Hello. This is the start of a paragraph."));
console.log(strModule.randomizeSentences("..."));

console.log("\n-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");
console.log("             Number Module Tests");
console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-\n");

//Area of Triangle testing
console.log("\n-----triangleArea------");
console.log(numberModule.triangleArea(1, 2));
console.log(numberModule.triangleArea(0, 2));
console.log(numberModule.triangleArea(1, 0));
console.log(numberModule.triangleArea(null, 2));
console.log(numberModule.triangleArea(1, null));
console.log(numberModule.triangleArea(-1, 2));
console.log(numberModule.triangleArea(1, -2));
console.log(numberModule.triangleArea("hello", "world"));

//Perimeter of Triangle testing
console.log("\n-----perimeterOfTriangle------");
console.log(numberModule.perimeterOfTriangle(1, 2, 3));
console.log(numberModule.perimeterOfTriangle(null, 2, 3));
console.log(numberModule.perimeterOfTriangle(1, null, 3));
console.log(numberModule.perimeterOfTriangle(1, 2, null));
console.log(numberModule.perimeterOfTriangle(-1, 2, 3));
console.log(numberModule.perimeterOfTriangle(1, -2, 3));
console.log(numberModule.perimeterOfTriangle(1, 2, -3));
console.log(numberModule.perimeterOfTriangle("hey", "hello", "world"));
            
//Area of a Square
console.log("\n-----areaOfSquare------");
console.log(numberModule.areaOfSquare(2));
console.log(numberModule.areaOfSquare(-2));
console.log(numberModule.areaOfSquare(null));
console.log(numberModule.areaOfSquare("hiii"));


//Perimeter of a Square
console.log("\n-----perimeterOfSquare------");
console.log(numberModule.perimeterOfSquare(2));
console.log(numberModule.perimeterOfSquare(-2));
console.log(numberModule.perimeterOfSquare(null));
console.log(numberModule.perimeterOfSquare("testing!"));

//Volume of a Cube
console.log("\n-----volumeOfCube------");
console.log(numberModule.volumeOfCube(5));
console.log(numberModule.volumeOfCube(-5));
console.log(numberModule.volumeOfCube(null));
console.log(numberModule.volumeOfCube("ayyy lmaoo"));

//Surface area of a Cube
console.log("\n-----surfaceAreaOfCube------");
console.log(numberModule.surfaceAreaOfCube(5));
console.log(numberModule.surfaceAreaOfCube(-5));
console.log(numberModule.surfaceAreaOfCube(null));
console.log(numberModule.surfaceAreaOfCube("asfdasfd"));

//Perimeter area of a Cube
console.log("\n-----perimeterOfCube------");
console.log(numberModule.perimeterOfCube(5));
console.log(numberModule.perimeterOfCube(-5));
console.log(numberModule.perimeterOfCube(null));
console.log(numberModule.perimeterOfCube("paranoia"));

//Circumference of a Circle
console.log("\n-----circumferenceOfCircle------");
console.log(numberModule.circumferenceOfCircle(5));
console.log(numberModule.circumferenceOfCircle(-5));
console.log(numberModule.circumferenceOfCircle(null));
console.log(numberModule.circumferenceOfCircle("is"));

//Area of a Circle
console.log("\n-----areaOfCircle------");
console.log(numberModule.areaOfCircle(5));
console.log(numberModule.areaOfCircle(-5));
console.log(numberModule.areaOfCircle(null));
console.log(numberModule.areaOfCircle("key"));

console.log("\n-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");
console.log("             Object Module Tests");
console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-\n");

//Some Testing Objects
var shallowTester = {a:1, b:2, c:3, d:4};
var deepTester = {a:1, b:2, c:3, d:4};
console.log("Original test object: {a:1, b:2, c:3, d:4}");

//Shallow Object Clone
console.log("\n-----shallowClone------");
var shallowCopy = objectModule.shallowClone(shallowTester);
shallowTester.a = 100;
console.log("Updated Object:");
console.log(shallowTester);
console.log("Shallow Copy:");
console.log(shallowCopy);

//Deep Object Clone
console.log("\n-----deepClone------");
var deepCopy = objectModule.deepClone(deepTester);
deepTester.a = 100;
console.log("Updated Object:");
console.log(deepTester);
console.log("Deep Copy:");
console.log(deepCopy);

console.log("\n-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");
console.log("             Array Module Tests");
console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-\n");

//Testing Object
var shallowArr = [1, 2, 3, 4, 5],
    shallowArrCopy = arrayModule.shallowClone(shallowArr);
console.log("Original Array: " + shallowArr);

//Shallow Array Clone
console.log("\n-----shallowClone (Arrays)------");
shallowArr[4] = 6;
console.log(shallowArr);
console.log(shallowArrCopy);

//Randomize Array
console.log("\n-----Randomized------");
console.log(arrayModule.randomized(shallowArr));

console.log("\n-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");
console.log("             Date Module Tests");
console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-\n");

//Days Until
console.log("\n-----daysUntil------");
console.log(dateModule.daysUntil('Feburary 14, 2016'));
console.log(dateModule.daysUntil(2/14/2016));

//Days Left in Year
console.log("\n-----daysLeftinYear------");
console.log(dateModule.daysLeftinYear());

//Days Since
console.log("\n-----daysSince------");
console.log(dateModule.daysSince('Feburary 12, 2016'));
console.log(dateModule.daysSince(2/12/2016));

