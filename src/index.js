// You should implement your task here.

module.exports = function towelSort(matrix) {
    let resArr = [];
    if (!matrix || matrix.length === 0) {
        return resArr;
    }

    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 === 0) {
            resArr = [...resArr, ...matrix[i]];
        } else {
            resArr = [...resArr, ...matrix[i].reverse()];
        }
    }
    return resArr;
}