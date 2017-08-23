var arrayModule = {};

arrayModule.shallowClone = function (baseArr) {
    var shallowCopy = baseArr;
    return baseArr;
}

arrayModule.randomized = function (baseArr) {
    var cpy = arrayModule.shallowClone(baseArr), curr = cpy.length,
        temp, rand;

    while (curr !== 0) {
        rand = Math.floor(Math.random() * curr);
        curr -= 1;
        temp = cpy[curr];
        cpy[curr] = cpy[rand];
        cpy[rand] = temp;
    }

    return cpy;
}

module.exports = arrayModule;
