const fetch = require('node-fetch');

exports.getDates = async (month) => {

    let regex = /Fall.*\n<ul>\n<li>(.*)<\/li>\n<li>(.*)<\/li>\n<li>(.*)<\/li>/; //default
    if (month < 4) {
        regex = /Winter.*\n<ul>\n<li>(.*)<\/li>\n<li>(.*)<\/li>\n<li>(.*)<\/li>/;
    } else if (month < 7) {
        regex = /Spring.*\n<ul>\n<li>(.*)<\/li>\n<li>(.*)<\/li>\n<li>(.*)<\/li>/;
    } else if (month < 9) {
        return null; // summer doesn't have posted finals.
    }

    const res = await fetch("https://www.bellevuecollege.edu/courses/exams/").catch((e) => { return null });
    if (!res) return null;
    const data = await res.text();


    let finals = [];
    const dates = data.match(regex);
    dates.forEach((d) => finals.push(d));
    finals.shift();

    return finals;
}