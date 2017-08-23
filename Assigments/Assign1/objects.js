var objectModule = {};

objectModule.shallowClone = function (baseObject) {
    if (typeof (baseObject) != 'object') {
        console.log("Error: Please enter an object.");
        return -1;
    }
    var shallowClone = baseObject;
    return shallowClone;
}

objectModule.deepClone = function (baseObject) {
    if (typeof (baseObject) != 'object') {
        console.log("Error: Please enter an object.");
        return -1;
    }
    var deepClone = Object.assign({}, baseObject);
    return deepClone;
}

module.exports = objectModule;
