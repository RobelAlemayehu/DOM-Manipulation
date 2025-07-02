let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
    {
        quote: `"Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world."`,
        person: `Albert Einstein`
    },
    {
        quote: `"Be the change that you wish to see in the world."`,
        person: `Mahatma Gandhi`
    },
    {
        quote: `"Injustice anywhere is a threat to justice everywhere."`,
        person: `Martin Luther King Jr.`
    },
    {
        quote: `"It always seems impossible until it's done."`,
        person: `Nelson Mandela`
    },
    {
        quote: `"I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel."`,
        person: `Maya Angelou`
    },
    {
        quote: `"The way to get started is to quit talking and begin doing."`,
        person: `Walt Disney`
    },
    {
        quote: `"Be yourself; everyone else is already taken."`,
        person: `Oscar Wilde`
    },
    {
        quote: `"Simplicity is the ultimate sophistication."`,
        person: `Leonardo da Vinci`
    },
    {
        quote: `"When something is important enough, you do it even if the odds are not in your favor."`,
        person: `Elon Musk`
    },
    {
        quote: `"Your time is limited, so do not waste it living someone else's life."`,
        person: `Steve Jobs`
    }
];

btn.addEventListener('click', function () {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
});
