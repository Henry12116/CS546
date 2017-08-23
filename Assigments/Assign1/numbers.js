var numberModule = {};

numberModule.triangleArea = function (base, height) {
    if ((base < 0 || typeof(base) != 'number') || (height < 0 || typeof(height) != 'number')) {
        console.log("Error: Invalid Parameter(s)");
        return -1;
    }
    return (1 / 2 * base) * height;
}

numberModule.perimeterOfTriangle = function (side1, side2, side3) {
    if ((side1 < 0 || typeof(side1) != 'number') || (side2 < 0 || typeof(side2) != 'number') || (side3 < 0 || typeof(side3) != 'number')) {
        console.log("Error: Invalid Parameter(s)");
        return -1;
    }
    return side1 + side2 + side3;
}

numberModule.areaOfSquare = function (side) {
    if (side < 0 || typeof(side) != 'number') {
        console.log("Error: Invalid Parameter(s)");
        return -1;
    }
    return Math.pow(side, 2);
}

numberModule.perimeterOfSquare = function (side) {
    if (side < 0 || typeof(side) != 'number') {
        console.log("Error: Invalid Parameter(s)");
        return -1;
    }
    return side * 4;
}

numberModule.volumeOfCube = function (side) {
    if (side < 0 || typeof(side) != 'number') {
        console.log("Error: Invalid Parameter(s)");
        return -1;
    }
    return Math.pow(side, 3);
}

numberModule.surfaceAreaOfCube = function (side) {
    if (side < 0 || typeof(side) != 'number') {
        console.log("Error: Invalid Parameter(s)");
        return -1;
    }
    return 6 * (Math.pow(side, 2));
}

numberModule.perimeterOfCube = function (side) {
    if (side < 0 || typeof(side) != 'number') {
        console.log("Error: Invalid Parameter(s)");
        return -1;
    }
    return 12 * side;
}

numberModule.circumferenceOfCircle = function (radius) {
    if (radius < 0 || typeof(radius) != 'number') {
        console.log("Error: Invalid Parameter(s)");
        return -1;
    }
    return 2 * Math.PI * radius;
}

numberModule.areaOfCircle = function (radius) {
    if (radius < 0 || typeof(radius) != 'number') {
        console.log("Error: Invalid Parameter(s)");
        return -1;
    }
    return Math.PI * Math.pow(radius, 2);
}

module.exports = numberModule;
