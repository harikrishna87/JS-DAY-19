let quote = document.getElementById("quote");
let button = document.querySelector("button");

const Data = [
    "I don't mind repeating everything. I am stubborn enough to keep saying the same things and hope that people listen to them.",
    "Face problems with patience, not with panic.",
    "You have to be honest to yourself.",
    "Take risks, but understand that not every risk will pay off.",
    "If you don't enjoy the game, it becomes a burden.",
    "Loyalty towards your dreams is the key to success.",
    "Your struggles will define your success. Keep working hard.",
    "When you work towards a goal, you don't see what's happening around.",
    "You can’t change what has already happened, so don’t waste your time thinking about it. Move on, let go, and get over it.",
    "Be focused, be determined, be hopeful.",
    "People inspire me. My experiences inspire me.",
    "Don’t compromise on your beliefs.",
    "Sometimes, silence is the loudest answer.",
    "Stand for what you believe in, even if it means standing alone.",
    "If you fight for what you believe, that’s true strength.",
    "There is beauty in simplicity and honesty.",
    "Be the change you want to see in the world.",
    "Live with honesty, live with integrity.",
    "Fearlessness comes from understanding yourself.",
    "You don’t need to be a hero to change the world. Just be yourself.",
    "Words have power. Be careful what you say, because it may shape your life.",
    "Actions speak louder than words, but words shape your actions.",
    "Life is a journey, not a destination. Embrace the moments.",
    "Success is not an end; it’s a continuous process.",
    "Dream big, start small, and act now.",
    "In a world full of noise, calmness is the real power.",
    "Be humble; humility can move mountains.",
    "Life is like a movie, make it worth watching.",
    "Forgive not because they deserve forgiveness, but because you deserve peace.",
    "True strength is staying positive in tough times.",
    "Failure is the opportunity to begin again more intelligently.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "You only live once, but if you do it right, once is enough.",
    "The journey of a thousand miles begins with one step.",
    "Our greatest glory is not in never falling, but in rising every time we fall.",
    "In the end, we only regret the chances we didn’t take.",
    "Happiness is not something ready made. It comes from your own actions.",
    "Success usually comes to those who are too busy to be looking for it.",
    "Believe you can and you're halfway there.",
    "The best way to predict the future is to create it.",
    "The harder I work, the luckier I get.",
    "The only way to do great work is to love what you do.",
    "Do not wait to strike till the iron is hot; but make it hot by striking.",
    "Believe in yourself, push your limits, and do whatever it takes to conquer your goals.",
    "Don’t watch the clock; do what it does. Keep going.",
    "Dream big and dare to fail.",
    "Success is not in what you have, but who you are.",
    "Keep your face always toward the sunshine—and shadows will fall behind you.",
    "The only way to achieve the impossible is to believe it is possible."
];

function randomquotes() {
    let randomquotes = Math.floor(Math.random() * Data.length);
    quote.textContent = Data[randomquotes];
    button.textContent = "Next Quote"
    quote.style.width = "800px"
}

