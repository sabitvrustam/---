function srtConv(str) {
    let newStr = "";
    for (i = 0; i <= str.length - 1; i++) {
        if (i === 0) {
            newStr += str[i].toUpperCase();
        } else if (i !== 0 && str[i - 1] == " ") {
            newStr += str[i].toUpperCase();
        } else {
            newStr += str[i].toLowerCase();
        }
    }
    return newStr;
}
console.log(srtConv('привет кАк делА heLLOO wORLD')); //Привет Как Дела Helloo World