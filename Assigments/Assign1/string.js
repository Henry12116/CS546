var stringModule = {};

stringModule.occurrencesOfSubstring = function (main, substr) {
    //E.C.
    if ((main.length == 0 || typeof (main) != 'string') || (substr.length == 0 || typeof (substr) != 'string')) {
        console.log('Error: Invalid main or sub string.');
        return -1;
    } else {
        var occurences = 0,
            pos = 0,
            interval = substr.length;
        
        while (1) {
            pos = main.indexOf(substr, pos); //returns -1 if the substring isn't found within the main string
            if (pos >= 0) {
                occurences++;
                pos += interval;
            } else break;
        }
        return occurences;
    }
}

stringModule.occurencesOfSubstringInsensitive = function (main, substr) {
    //E.C.
    if ((main.length == 0 || typeof (main) != 'string') || (substr.length == 0 || typeof (substr) != 'string')) {
        console.log('Error: Invalid main or sub string.');
        return -1;
    } else {
        var newMain = main.toLowerCase(), //strips the main string of uppercase values
            newSubStr = substr.toLowerCase(), //strips the sub string of uppercase values
            occurences = 0,
            pos = 0,
            interval = newSubStr.length;

        while (1) {
            pos = newMain.indexOf(newSubStr, pos);
            if (pos >= 0) {
                occurences++;
                pos += interval;
            } else break;
        }
        return occurences;
    }
}

stringModule.randomizeSentences = function (paragraph) {
    if (paragraph.length == 0 || typeof (paragraph) != 'string') {
        console.log('Error: Invalid paragraph.');
        return -1;
    }

    var result = paragraph.split("."),
        newResult = result.slice(0, result.length - 1);

    function shuffle(array) {
        var curr = array.length,
            temp, rand;

        while (curr !== 0) {
            rand = Math.floor(Math.random() * curr);
            curr -= 1;
            temp = array[curr];
            array[curr] = array[rand];
            array[rand] = temp;
        }

        return array;
    }

    var randomParagraph = shuffle(newResult);

    for (sentence in randomParagraph) {
        randomParagraph[sentence] = randomParagraph[sentence] + '.';
    }

    return randomParagraph;
}


module.exports = stringModule;
