/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function(tickets, k) {
    const queue = tickets
    let person = queue[k]
    let position = k
    let secondsTaken = 0

    while (person > 0) {
        secondsTaken++
        const buyer = queue.shift() - 1
        if (buyer !== 0) {
            queue.push(buyer)
        }
        if (position !== 0) {
            position--
        } else {
            position = queue.length - 1
            person--
        }
    }

    return secondsTaken
};
