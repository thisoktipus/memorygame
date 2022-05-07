const section = document.querySelector('section');

const getCats = () => [

    { imgSrc: "./images/cat01.png", name: "cat01" },
    { imgSrc: "./images/cat02.png", name: "cat02" },
    { imgSrc: "./images/cat03.png", name: "cat03" },
    { imgSrc: "./images/cat04.png", name: "cat04" },
    { imgSrc: "./images/cat05.png", name: "cat05" },
    { imgSrc: "./images/cat06.png", name: "cat06" },
    { imgSrc: "./images/cat07.png", name: "cat07" },
    { imgSrc: "./images/cat08.png", name: "cat08" },
    { imgSrc: "./images/cat01.png", name: "cat01" },
    { imgSrc: "./images/cat02.png", name: "cat02" },
    { imgSrc: "./images/cat03.png", name: "cat03" },
    { imgSrc: "./images/cat04.png", name: "cat04" },
    { imgSrc: "./images/cat05.png", name: "cat05" },
    { imgSrc: "./images/cat06.png", name: "cat06" },
    { imgSrc: "./images/cat07.png", name: "cat07" },
    { imgSrc: "./images/cat08.png", name: "cat08" }
];

//randomize the board//
const randomize = () => {
    const cardCats = getCats();
    cardCats.sort(() => Math.random() - 0.5);
    return cardCats;
};

// --- card generator function ---//
const cardGenerator = () => {
    const cardCats = randomize();
    // --- generate HTML --- //
    //for each item in cardColors (randomized cards) generate a card//
    cardCats.forEach((item) => {
        const card = document.createElement('div');
        const front = document.createElement('img');
        const back = document.createElement('div');

        //adding classes//
        card.classList = 'card';
        front.classList = 'front';
        back.classList = 'back';

        // --- the card gets info attached here --- //
        front.src = item.imgSrc;
        card.setAttribute('name', item.name);

        // --- attaching the cards to the section --- //
        section.appendChild(card);
        card.appendChild(front);
        card.appendChild(back);



        // --- adding the click functionality and toggle ability --- //
        card.addEventListener('click', (e) => {
            card.classList.toggle('toggleCard');
            checkCards(e);
        });
    });
};



const checkCards = (e) => {
    const clickedCard = e.target;
    clickedCard.classList.add('flipped');
    const flippedCards = document.querySelectorAll('.flipped');


    if (flippedCards.length === 2) {

        if (flippedCards[0].getAttribute('name') === flippedCards[1].getAttribute('name')) {

            flippedCards.forEach(card => {
                card.classList.remove('flipped');
                card.getElementsByClassName.pointerEvents = 'none'

            })
        } else {
            flippedCards.forEach(card => {
                card.classList.remove('flipped');
                setTimeout(() => card.classList.remove('toggleCard'), 1500);
                
            });

        }
    }

};

cardGenerator();