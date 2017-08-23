var exports = module.exports = {};

// You can now add export properties to the exports object to be accessible from outside this file

exports.retirementAmountIfSavingPerMonth = function (yearsUntilRetirement, amountSavingPerMonth, yearlyInterestRateOfInvestment) {
    if (!yearsUntilRetirement || yearsUntilRetirement < 0) throw "Invalid years provided";
    if (typeof yearsUntilRetirement === "string") yearsUntilRetirement = parseInt(yearsUntilRetirement);

    if (!amountSavingPerMonth || amountSavingPerMonth < 0) throw "Invalid per month provided";
    if (typeof amountSavingPerMonth === "string") amountSavingPerMonth = parseInt(amountSavingPerMonth);

    if (!yearlyInterestRateOfInvestment || yearlyInterestRateOfInvestment < 0) throw "Invalid interest rate provided";
    if (typeof yearlyInterestRateOfInvestment === "string") yearlyInterestRateOfInvestment = parseFloat(yearlyInterestRateOfInvestment);

    var runningTotal = 0;
    var monthsUntilRetirement = yearsUntilRetirement * 12;
    for (var i = monthsUntilRetirement; i > 0; i--) {
        runningTotal = (runningTotal + amountSavingPerMonth) * (1 + (yearlyInterestRateOfInvestment / 12));
    }
    return runningTotal;

}

exports.investedAmountAfterSomeYears = function (yearsInvesting, initialAmount, yearlyInterestRateOfInvestment) {
    if (!yearsInvesting || yearsInvesting < 0) throw "Invalid years provided";
    if (typeof yearsInvesting === "string") yearsInvesting = parseInt(yearsInvesting);

    if (!initialAmount || initialAmount < 0) throw "Invalid initial amount provided";
    if (typeof initialAmount === "string") initialAmount = parseInt(initialAmount);

    if (!yearlyInterestRateOfInvestment || yearlyInterestRateOfInvestment < 0) throw "Invalid interest rate provided";
    if (typeof yearlyInterestRateOfInvestment === "string") yearlyInterestRateOfInvestment = parseFloat(yearlyInterestRateOfInvestment);

    var runningTotal = initialAmount;
    for (var i = yearsInvesting; i > 0; i--) {
        runningTotal = runningTotal * (1 + yearlyInterestRateOfInvestment);
    }
    return runningTotal;
}

exports.monthsToPayOffLoan = function (monthlyPaymentAmount, initialLoanAmount, yearlyInterestRateOfLoan) {
    if (!monthlyPaymentAmount || monthlyPaymentAmount < 0) throw "Invalid monthly amount provided";
    if (typeof monthlyPaymentAmount === "string") monthlyPaymentAmount = parseInt(monthlyPaymentAmount);

    if (!initialLoanAmount || initialLoanAmount < 0) throw "Invalid loan amount provided";
    if (typeof initialLoanAmount === "string") initialLoanAmount = parseInt(initialLoanAmount);

    if (!yearlyInterestRateOfLoan || yearlyInterestRateOfLoan < 0) throw "Invalid interest rate provided";
    if (typeof yearlyInterestRateOfLoan === "string") yearlyInterestRateOfLoan = parseFloat(yearlyInterestRateOfLoan);

    var leftToPay = initialLoanAmount;
    var totalMonths = 0;
    while (leftToPay > 0) {
        leftToPay = (leftToPay * (1 + (yearlyInterestRateOfLoan / 12))) - monthlyPaymentAmount;
        totalMonths++;
    }
    return totalMonths;
}

module.exports = exports;
