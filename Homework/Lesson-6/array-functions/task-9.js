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

// - знайти піковий туз

console.log(deck.find(card => card.cardSuit === 'spade' && card.cardValue === 'ace'))

// - всі шістки

console.log(deck.filter(card => card.cardValue === '6'))

// - всі червоні карти

console.log(deck.filter(card => card.color === 'red'))

// - всі буби

console.log(deck.filter(card => card.cardSuit === 'diamond'))

// - всі трефи від 9 та більше

console.log(deck.filter(card => card.cardSuit === 'clubs' && (card.cardValue !== '6' && card.cardValue !== '7' && card.cardValue !== '8')))