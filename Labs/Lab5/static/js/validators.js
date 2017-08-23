(function ($) {
    var myData = require('./data.js');

    var first1 = $("#years");
    var first2 = $("#savings");
    var first3 = $("#interest1");
    var second1 = $("#totYears");
    var second2 = $("#amount");
    var second3 = $("#interest2");
    var third1 = $("#monthlyAmount");
    var third2 = $("#loan");
    var third3 = $("#interest3");
    var errorAlert = $("#calculator-error");
    var resultAlert = $("#calculator-result");
    var bothAlerts = errorAlert.add(resultAlert);
    var retirementBttn = $("#retire");
    var investmentBttn = $("#invest");
    var loanBttn = $("#loans");

    function extractRetirementInputs() {
        var firstValue = first1.val();
        if (firstValue === undefined || firstValue === "" || firstValue === null || firstValue < 0) {
            throw "Invalid first value provided";
        }

        var secondValue = first2.val();
        if (secondValue === undefined || secondValue === "" || secondValue === null || secondValue < 0) {
            throw "Invalid first value provided";
        }

        var thirdValue = first3.val();
        if (thirdValue === undefined || thirdValue === "" || thirdValue === null || thirdValue < 0) {
            throw "Invalid first value provided";
        }

        var firstNumber = parseInt(firstValue);
        var secondNumber = parseInt(secondValue);
        var thirdNumber = parseFloat(thirdValue);

        if (isNaN(firstNumber)) {
            throw "First value is not a number";
        }

        if (isNaN(secondNumber)) {
            throw "Second value is not a number";
        }

        if (isNaN(thirdNumber)) {
            throw "Third value is not a number";
        }

        return {
            firstNumber: firstNumber,
            secondNumber: secondNumber,
            thirdNumber: thirdNumber
        }
    }

    function extractInvestmentInputs() {
        var firstValue = second1.val();
        if (firstValue === undefined || firstValue === "" || firstValue === null || firstValue < 0) {
            throw "Invalid first value provided";
        }

        var secondValue = second2.val();
        if (secondValue === undefined || secondValue === "" || secondValue === null || secondValue < 0) {
            throw "Invalid first value provided";
        }

        var thirdValue = second3.val();
        if (thirdValue === undefined || thirdValue === "" || thirdValue === null || thirdValue < 0) {
            throw "Invalid first value provided";
        }

        var firstNumber = parseInt(firstValue);
        var secondNumber = parseInt(secondValue);
        var thirdNumber = parseFloat(thirdValue);

        if (isNaN(firstNumber)) {
            throw "First value is not a number";
        }

        if (isNaN(secondNumber)) {
            throw "Second value is not a number";
        }

        if (isNaN(thirdNumber)) {
            throw "Third value is not a number";
        }

        return {
            firstNumber: firstNumber,
            secondNumber: secondNumber,
            thirdNumber: thirdNumber
        }

    }

    function extractLoanInputs() {
        var firstValue = third1.val();
        if (firstValue === undefined || firstValue === "" || firstValue === null || firstValue < 0) {
            throw "Invalid first value provided";
        }

        var secondValue = third2.val();
        if (secondValue === undefined || secondValue === "" || secondValue === null || secondValue < 0) {
            throw "Invalid first value provided";
        }

        var thirdValue = third3.val();
        if (thirdValue === undefined || thirdValue === "" || thirdValue === null || thirdValue < 0) {
            throw "Invalid first value provided";
        }
        var firstNumber = parseInt(firstValue);
        var secondNumber = parseInt(secondValue);
        var thirdNumber = parseFloat(thirdValue);

        if (isNaN(firstNumber)) {
            throw "First value is not a number";
        }

        if (isNaN(secondNumber)) {
            throw "Second value is not a number";
        }

        if (isNaN(thirdNumber)) {
            throw "Third value is not a number";
        }

        return {
            firstNumber: firstNumber,
            secondNumber: secondNumber,
            thirdNumber: thirdNumber
        }
    }

    retirementBttn.click(function () {
        bothAlerts.addCass('hidden');
        bothAlerts.text('');

        try {
            var numbers = extractRetirementInputs();
            var result = myData.retirementAmountIfSavingPerMonth(numbers.firstNumber, numbers.secondNumber, numbers.thirdNumber);

            resultAlert.text('Your retirement savings will be ' + result);
            resultAlert.removeClass('hidden');
        } catch (error) {
            errorAlert.text(error);
            errorAlert.removeClass('hidden');
        }
    });

    investmentBttn.click(function () {
        bothAlerts.addCass('hidden');
        bothAlerts.text('');

        try {
            var numbers = extractInvestmentInputs();
            var result = myData.investedAmountAfterSomeYears(numbers.firstNumber, numbers.secondNumber, numbers.thirdNumber);

            resultAlert.text('Your retirement savings will be ' + result);
            resultAlert.removeClass('hidden');
        } catch (error) {
            errorAlert.text(error);
            errorAlert.removeClass('hidden');
        }
    });

    loanBttn.click(function () {
        bothAlerts.addCass('hidden');
        bothAlerts.text('');

        try {
            var numbers = extractLoanInputs();
            var result = myData.monthsToPayOffLoan(numbers.firstNumber, numbers.secondNumber, numbers.thirdNumber);

            resultAlert.text('The time to repay your loan is ' + result);
            resultAlert.removeClass('hidden');
        } catch (error) {
            errorAlert.text(error);
            errorAlert.removeClass('hidden');
        }
    });
    
})(jQuery);
