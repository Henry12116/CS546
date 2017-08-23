/*
Lab 1 

I pledge my honor that I have abided by the Stevens Honor System.
Henry Thomas
*/

//returns the amount of money that will be accumulated before retirement given the years until retirement, savings deposited each month, and a yearly interest rate

function retirementAmountIfSavingPerMonth(yearsUntilRetirement, amountSavingPerMonth, yearlyInterestRateOfInvestment) {
    //Error Check
    if ((yearsUntilRetirement < 0 || yearsUntilRetirement == undefined) || (amountSavingPerMonth < 0 || amountSavingPerMonth == undefined) || (yearlyInterestRateOfInvestment < 0 || yearlyInterestRateOfInvestment == undefined)) {
        console.log("Error: Invalid parameter(s).");
        return -1;
    }
    
    var runningTotal = 0;
    var monthsUntilRetirement = yearsUntilRetirement * 12;
    for (var i = monthsUntilRetirement; i > 0; i--) {
        runningTotal = (runningTotal + amountSavingPerMonth) * (1 + (yearlyInterestRateOfInvestment / 12));
        //console.log(runningTotal); testing
    }
    return runningTotal;
}

//returns the total amount of money one will accumulate over a certain amount of years given the amount of years, the initial amount, and the yearly interest rate
function investedAmountAfterSomeYears(yearsInvesting, initialAmount, yearlyInterestRateOfInvestment) {
    //E.C.
    if ((yearsInvesting < 0 || yearsInvesting == undefined) || (initialAmount < 0 || initialAmount == undefined) || (yearlyInterestRateOfInvestment < 0 || yearlyInterestRateOfInvestment == undefined)) {
        console.log("Error: Invalid parameter(s).");
        return -1;
    }
    
    var runningTotal = initialAmount;
    for (var i = yearsInvesting; i > 0; i--) {
        runningTotal = runningTotal * (1 + yearlyInterestRateOfInvestment);
        //console.log(runningTotal); testing
    }
    return runningTotal;
}

//returns the amount of months it will take to pay off a loan given the monthly payment, the amount to be repaid, and the yearly interest rate on the loan
function monthsToPayOffLoan(monthlyPaymentAmount, initialLoanAmount, yearlyInterestRateOfLoan) {
    //E.C.
    if ((monthlyPaymentAmount < 0 || monthlyPaymentAmount == undefined) || (initialLoanAmount < 0 || initialLoanAmount == undefined) || (yearlyInterestRateOfLoan < 0 || yearlyInterestRateOfLoan == undefined)) {
        console.log("Error: Invalid parameter(s).");
        return -1;
    }
    
    var leftToPay = initialLoanAmount;
    var totalMonths = 0;
    while (leftToPay > 0) {
        leftToPay = (leftToPay * (1 + (yearlyInterestRateOfLoan / 12))) - monthlyPaymentAmount;
        //console.log(leftToPay); testing
        totalMonths++;
    }
    return totalMonths;
}