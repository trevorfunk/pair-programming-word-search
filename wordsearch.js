const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }

    for (let i = 0; i < horizontalJoin[0].length; i++) {
        let result = '';
        for (let j = 0; j < horizontalJoin.length; j++) {
            result += horizontalJoin[j][i]
        }
        if (result === word) return true;
    }

    return false;
}


module.exports = wordSearch