function countUniqueWorld (str) {
    let mapStr = [];
    let string = "";
    let count = str.length - 1;
    for (i = 0; i <= count ; i++) {
        if (str[i] !== " " && str[i] != ","){
           string += str[i]; 
           if (i == count){
            mapStr.push(string);
        }
        } else if (str[i] == ","){
        } else {
            mapStr.push(string);
            string = "";
        }
    }
   for (j =0; j <= mapStr.length - 1; j++){
        console.log(mapStr[j]);
   }
}
countUniqueWorld("Текст, в котором слово текст несколько раз встречается и слово тоже");