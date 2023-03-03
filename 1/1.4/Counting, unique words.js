

function countUniqueWords(text) {
    const words = text.split(/\W+/);
    const counts = {};
    for (let word of words) {
      if (word in counts) {
        counts[word]++;
      } else {
        counts[word] = 1;
      }
    }
    return counts;
  }
  
  console.log(countUniqueWords("Текст, в котором слово текст несколько раз встречается и слово тоже"));