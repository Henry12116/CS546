// We first require our express package
var express = require('express');
var bodyParser = require('body-parser');
var myData = require('./data.js');
var validate = require('./static/js/validators.js');

// This package exports the function to create an express instance:
var app = express();

// Here we change our view engine from Jade (default) to EJS
app.set('view engine', 'ejs');

// This is called 'adding middleware', or things that will help parse your request
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({
    extended: true
})); // for parsing application/x-www-form-urlencoded

// This middleware will activate for every request we make to 
// any path starting with /assets;
// it will check the 'static' folder for matching files 
app.use('/assets', express.static('static'));

// Setup your routes here!
app.get("/", function (request, response) {
    // We have to pass a second parameter to specify the root directory
    // __dirname is a global variable representing the file directory you are currently in
    var displayType = "";

    response.render("pages/index", {
        root: __dirname,
        type: displayType
    });
});

app.get("/api/perMonthRetirementSavings", function (request, response) {
    if (request.query.years && request.query.perMonth && request.query.interestRate) {
        try {
            var result = myData.retirementAmountIfSavingPerMonth(request.query.years, request.query.perMonth, request.query.interestRate);
            response.json({
                status: "success",
                result: result
            });
        } catch (error) {
            response.json({
                status: "error",
                message: error
            });
        }
    } else {
        response.status(500).json({
            status: "error",
            message: "Please provide parameters."
        });
    }
});

//find your retirement savings 
app.post("/results/perMonthRetirementSavings", function (request, response) {
    console.log("CALCULATING PER MONTH RETIREMENT SAVINGS");
    console.log(request.body);
    try {
        var result = myData.retirementAmountIfSavingPerMonth(request.body.years, request.body.savings, request.body.interest1);
        response.render('pages/results', {
            operationTitle: "Retirement Savings Calculator",
            result: result
        });
    } catch (error) {
        response.status(500).render('pages/error', {errorType: "Invalid Parameter", errorMessage: error, operationTitle: "Retirement Savings Calculator"});
    }
});

app.get("/api/investedAmount", function (request, response) {
    if (request.query.years && request.query.initial && request.query.interestRate) {
        try {
            var result = myData.investedAmountAfterSomeYears(request.query.years, request.query.initial, request.query.interestRate);
            response.json({
                status: "success",
                result: result
            });
        } catch (error) {
            response.json({
                status: "error",
                message: error
            });
        }
    } else {
        response.status(500).json({
            status: "error",
            message: "Please provide parameters."
        });
    }
});

//find your inveseted amount after some years
app.post("/results/investedAmount", function (request, response) {
    console.log("CALCULATING TOTAL INVESTMENT AMOUNT");
    console.log(request.body);
    try {
        var result = myData.investedAmountAfterSomeYears(request.body.totYears, request.body.amount, request.body.interest2);
        response.render('pages/results', {
            operationTitle: "Investment Calculator",
            result: result
        });
    } catch (error) {
        response.status(500).render('pages/error', {errorType: "Invalid Parameter", errorMessage: error, operationTitle: "Investment Calculator"});
    }
});

app.get("/api/loanPayoff", function (request, response) {
    if (request.query.monthlyAmount && request.query.loanAmount && request.query.interestRate) {
        try {
            var result = myData.monthsToPayOffLoan(request.query.monthlyAmount, request.query.loanAmount, request.query.interestRate);
            response.json({
                status: "success",
                result: result
            });
        } catch (error) {
            response.json({
                status: "error",
                message: error
            });
        }
    } else {
        response.status(500).json({
            status: "error",
            message: "Please provide parameters."
        });
    }
});

//find how long it will take to repay a loan
app.post("/results/loanPayoff", function (request, response) {
    console.log("CALCULATING TIME TO PAY OFF LOAN");
    console.log(request.body);
    try {
        var result = myData.monthsToPayOffLoan(request.body.monthlyAmount, request.body.loan, request.body.interest3);
        response.render('pages/results', {
            operationTitle: "Loan Repayment Time Calculator",
            result: result
        });
    } catch (error) {
        response.status(500).render('pages/error', {errorType: "Invalid Parameter", errorMessage: error, operationTitle: "Loan Repayment Time Calculator"});
    }
});

// We can now navigate to localhost:3000
app.listen(3000, function () {
    console.log('Your server is now listening on port 3000! Navigate to http://localhost:3000 to access it');
});
