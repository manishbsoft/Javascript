function countLetters(sent) {
    let arr = sent.toLowerCase().split('');

    return arr.filter(letter => letter != ' ')
        .reduce((obj, letter) => {
            if (obj[letter] == undefined) {
                obj[letter] = 1;
            } else {
                obj[letter]++;
            }
            return obj;
        }, {});
}
const sent1 = 'If Purple People Eaters are real... where do they find purple people to eat?';
const sent2 = 'This is the last random sentence I will be writing and I am going to stop mid-sent';
console.log(countLetters(sent1)); // {i: 2, f: 2, p: 8, u: 2, r: 6, l: 5, e: 14, o: 4, a: 4, …}
console.log(countLetters(sent2)); //  {t: 8, h: 2, i: 9, s: 6, e: 6, l: 3, a: 4, r: 2, n: 7, …}