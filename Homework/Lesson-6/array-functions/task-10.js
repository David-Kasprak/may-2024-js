suits = ['spade', 'diamond','heart', 'clubs'];
values = ['6', '7', '8', '9', '10','jack','queen','king','ace'];

const deck = [];
for (const suit of suits) {
    for (const value of values) {
        const card= ({cardSuit: suit, cardValue: value})
        if (suit === 'heart' || suit === "diamond") {
            card.color = 'red';
        }
        else {
            card.color = 'black';
        }
        deck.push(card);
    }
}
console.log(deck)