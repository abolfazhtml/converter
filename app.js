'use strict';

const button = document.querySelector('.button');
const result = document.querySelector('#result');
let input = document.querySelector('#input');

if (input==='') {
    result.innerHTML = `You did not input any things.`
}
button.addEventListener('click', function () {
    input = input.value.toLowerCase().split(' ');
    let total = 0;

    function converter(word) {
        const numberWords = {
            'one': 1,
            'two': 2,
            'three': 3,
            'fourth': 4,
            'fifth': 5,
            'sixth': 6,
            'seventh': 7,
            'eight': 8,
            'nine': 9,
            'ten': 10,
            'eleven': 11,
            'twelve': 12,
            'thirteen': 13,
            'fourteen': 14,
            'fifteen': 15,
            'sixteen': 16,
            'seventeen': 17,
            'eighteen': 18,
            'nineteen': 19,
            'twenty': 20,
            'thirty': 30,
            'forty': 40,
            'fifty': 50,
            'sixty': 60,
            'seventy': 70,
            'eighty': 80,
            'ninety': 90,
        };

        const multipliers = {
            'hundred': 100,
            'thousand': 1000,
            'million': 1000000
        }

        if (numberWords[word] !== undefined) {
            total += numberWords[word]
        } else if (multipliers[word] !== undefined) {
            total *= multipliers[word]
        } else {
            total= 'unvalid input';
        }
        result.textContent = total;
    }

    input.forEach((item) => {
        // console.log(item);
        converter(item);
    })

    let input1 = document.querySelector('#input').value = '';
    total = 0;

})