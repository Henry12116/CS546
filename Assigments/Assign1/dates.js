var dateModule = {};

dateModule.daysUntil = function (someDate) {
    if (typeof (someDate) != 'string') {
        console.log("Error: Please enter date in format 'Month Day, Year' (must be string)");
        return -1;
    }
    var someDateInMs = +new Date(someDate),
        todaysDateInMs = Date.now(),
        difference = someDateInMs - todaysDateInMs,
        days = (difference / (1000 * 60 * 60 * 24));

    return Math.ceil(days) + " days.";
}

dateModule.daysLeftinYear = function () {
    var todaysDate = new Date(),
        lastDayInYear = new Date('December 31, 2016'),
        difference = lastDayInYear - todaysDate,
        days = (difference / (1000 * 60 * 60 * 24));

    return Math.ceil(days) + " days.";
}

dateModule.daysSince = function (someDate) {
    if (typeof (someDate) != 'string') {
        console.log("Error: Please enter date in format 'Month Day, Year' (must be string)");
        return -1;
    }
    var today = Date.now(),
        pastDate = +new Date(someDate),
        difference = today - pastDate,
        days = (difference / (1000 * 60 * 60 * 24));

    return Math.floor(days) + " days.";
}

module.exports = dateModule;
