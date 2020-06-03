const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    let answer = false;
    for (line of horizontalJoin) {
        if (line.includes(word)) {
            answer = true;
        }
    }

    const transposed = [];
    const numberOfRows = letters.length;
    const numberOfCols = letters[0].length;
    for (let i = 0; i < numberOfCols; i++) {
      const row = [];
      for (let j = 0; j < numberOfRows; j++) {
        row.push(letters[j][i]);
      }
      transposed.push(row);
    }
    const transposedJoin = transposed.map(ls => ls.join(''));
    for (transposedLine of transposedJoin) {
        if (transposedLine.includes(word)) {
            answer = true;
        }
    }

    return answer;
}

module.exports = wordSearch


