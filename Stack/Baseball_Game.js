/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let scoresAdded = [];

    for (let op of operations) {
        if (!isNaN(op) || (op[0] === '-' && !isNaN(op.slice(1)))) {
            scoresAdded.push(parseInt(op));
        } else if (op === 'C') {
            scoresAdded.pop();
        } else if (op === 'D') {
            scoresAdded.push(scoresAdded[scoresAdded.length - 1] * 2);
        } else if (op === '+') {
            scoresAdded.push(scoresAdded[scoresAdded.length - 1] + scoresAdded[scoresAdded.length - 2]);
        }
    }
    
    return scoresAdded.reduce((a, b) => a + b, 0);
    };
