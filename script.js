// JavaScript source code

let username = new String();
let usernameTrimmed = new String();
let exitPress = false;
let cardColor;
let name;
let infoPress = false;
let playerCards = new Array();
let dealerCards = new Array();
let dealerP = 0;
let playerP = 0;
let tempPoints;
let scoreD = 0;
let scoreP = 0;
let lose = false;
let end = false;

let buttonSignIn = document.getElementById("complete");
let logOffPromt = document.getElementById("logOff");
let buttonLogOff = document.getElementById("exit");
let buttonYes = document.getElementById("yes");
let buttonNo = document.getElementById("no");
let ruleTable = document.getElementById("rulesList");
let infoButton = document.getElementById("infoButton");
let buttonInfoClose = document.getElementById("closeInfo");
let game = document.getElementById("gameDiv");
let signIn = document.getElementById("signIn");
let dealerPoints = document.getElementById("dealerPoints");
let dealerGame = document.getElementById("dealerGame");
let card1S = document.getElementById("card1S");
let card2S = document.getElementById("card2S");
let card3S = document.getElementById("card3S");
let card4S = document.getElementById("card4S");
let playerGame = document.getElementById("playerGame");
let actions = document.getElementById("actions");
let startGame = document.getElementById("startGame");
let hit = document.getElementById("hit");
let hold = document.getElementById("hold");
let playerName = document.getElementById("playerName");
let playerPoints = document.getElementById("playerPoints");
let startGameDiv = document.getElementById("startGameDiv");
let hitDiv = document.getElementById("hitDiv");
let holdDiv = document.getElementById("holdDiv");
let scoreDealer = document.getElementById("scoreDealer");
let scorePlayer = document.getElementById("scorePlayer");
let dealerName = document.getElementById("dealerName");

infoButton.addEventListener('click', () => {
    if (infoPress == false) {
        ruleTable.style.display = 'flex';
        signIn.style.filter = 'blur(10px)';
        infoPress = true;
    }
});

buttonInfoClose.addEventListener('click', () => {
    if (infoPress == true) {
        ruleTable.style.display = 'none';
        signIn.style.filter = 'blur(0px)';
        infoPress = false;
    }
});


buttonSignIn.addEventListener('click', () => {
    username = document.signIn.username.value;
    usernameTrimmed = username.trim();
    if (usernameTrimmed.length != 0 && usernameTrimmed.length < 30) {
        name = document.createTextNode(usernameTrimmed);
        playerName.appendChild(name);
        signIn.style.display = 'none';
        game.style.display = 'flex';
        playerPoints.textContent = 'Points: ' + playerP;
        dealerPoints.textContent = 'Points: ' + dealerP;
        scoreDealer.textContent = scoreD;
        scorePlayer.textContent = scoreP;
    }
    else {
        if (usernameTrimmed.length >= 30) {
            alert("Please, use shorter user name");
        }
        else {
            alert("User name empty");
        }
    }
});

buttonLogOff.addEventListener('click', () => {
    if (!exitPress) {
        logOffPromt.style.display = 'flex';
        exitPress = true;
    }
    else {
        logOffPromt.style.display = 'none';
        exitPress = false;
    }
});

buttonNo.addEventListener('click', () => {
    logOffPromt.style.display = 'none';
    exitPress = 0;
});

buttonYes.addEventListener('click', () => {
    logOffPromt.style.display = 'none';
    signIn.style.display = 'flex';
    game.style.display = 'none';
    playerName.textContent = "";
    while (dealerGame.firstChild) {
        dealerGame.removeChild(dealerGame.firstChild);
    }
    while (playerGame.firstChild) {
        playerGame.removeChild(playerGame.firstChild);
    }
    playerGame.appendChild(card3S);
    playerGame.appendChild(card4S);
    dealerGame.appendChild(card1S);
    dealerGame.appendChild(card2S);
    card1S.src = 'img/cards/BackSide.png';
    card1S.alt = 'Mystery';
    card2S.src = 'img/cards/BackSide.png';
    card2S.alt = 'Mystery';
    card3S.src = 'img/cards/BackSide.png';
    card3S.alt = 'Mystery';
    card4S.src = 'img/cards/BackSide.png';
    card4S.alt = 'Mystery';
    dealerP = 0;
    playerP = 0;
    playerCards.length = 0;
    dealerCards.length = 0;
    playerPoints.textContent = 'Points: ' + playerP;
    dealerPoints.textContent = 'Points: ' + dealerP;
    scoreD = 0;
    scoreP = 0;
    scoreDealer.textContent = scoreD;
    scorePlayer.textContent = scoreP;
    dealerName.textContent = "Dealer";
});

startGame.addEventListener('click', () => {
    if (end == true) {
        end = false;
        scoreD = 0;
        scoreP = 0;
        scoreDealer.textContent = scoreD;
        scorePlayer.textContent = scoreP;
        playerName.textContent = usernameTrimmed;
        dealerName.textContent = "Dealer";
    }
    if (playerP > 0 || dealerP > 0) {
        while (dealerGame.firstChild) {
            dealerGame.removeChild(dealerGame.firstChild);
        }
        while (playerGame.firstChild) {
            playerGame.removeChild(playerGame.firstChild);
        }
        playerGame.appendChild(card3S);
        playerGame.appendChild(card4S);
        dealerGame.appendChild(card1S);
        dealerGame.appendChild(card2S);
        card1S.src = 'img/cards/BackSide.png';
        card1S.alt = 'Mystery';
        card2S.src = 'img/cards/BackSide.png';
        card2S.alt = 'Mystery';
        card3S.src = 'img/cards/BackSide.png';
        card3S.alt = 'Mystery';
        card4S.src = 'img/cards/BackSide.png';
        card4S.alt = 'Mystery';
        dealerP = 0;
        playerP = 0;
        playerCards.length = 0;
        dealerCards.length = 0;
        playerPoints.textContent = 'Points: ' + playerP;
        dealerPoints.textContent = 'Points: ' + dealerP;
    }
    startGameDiv.style.display = 'none';
    hitDiv.style.display = 'flex';
    holdDiv.style.display = 'flex';
    tempPoints = Math.floor(Math.random() * 9);
    switch (tempPoints) {
        case 0:
            playerCards.push(tempPoints + 2);
            tempPoints = Math.floor(Math.random() * 3);
            if (tempPoints == 0) {
                card3S.src = 'img/cards/JClub.jpg';
                card3S.alt = 'Jack Club';
            }
            else if (tempPoints == 1) {
                card3S.src = 'img/cards/JDiamond.jpg';
                card3S.alt = 'Jack Diamond';
            }
            else if (tempPoints == 2) {
                card3S.src = 'img/cards/JHearts.jpg';
                card3S.alt = 'Jack Hearts';
            }
            else if (tempPoints == 3) {
                card3S.src = 'img/cards/JSpade.jpg';
                card3S.alt = 'Jack Spade';
            }
            break;
        case 1:
            playerCards.push(tempPoints + 2);
            tempPoints = Math.floor(Math.random() * 3);
            if (tempPoints == 0) {
                card3S.src = 'img/cards/QClub.jpg';
                card3S.alt = 'Queen Club';
            }
            else if (tempPoints == 1) {
                card3S.src = 'img/cards/QDiamond.jpg';
                card3S.alt = 'Queen Diamond';
            }
            else if (tempPoints == 2) {
                card3S.src = 'img/cards/QHearts.jpg';
                card3S.alt = 'Queen Hearts';
            }
            else if (tempPoints == 3) {
                card3S.src = 'img/cards/QSpade.jpg';
                card3S.alt = 'Queen Spade';
            }
            break;
        case 2:
            playerCards.push(tempPoints + 2);
            tempPoints = Math.floor(Math.random() * 3);
            if (tempPoints == 0) {
                card3S.src = 'img/cards/KClub.jpg';
                card3S.alt = 'King Club';
            }
            else if (tempPoints == 1) {
                card3S.src = 'img/cards/KDiamond.jpg';
                card3S.alt = 'King Diamond';
            }
            else if (tempPoints == 2) {
                card3S.src = 'img/cards/KHearts.jpg';
                card3S.alt = 'King Hearts';
            }
            else if (tempPoints == 3) {
                card3S.src = 'img/cards/KSpade.jpg';
                card3S.alt = 'King Spade';
            }
            break;
        case 3:
            playerCards.push(tempPoints + 3);
            tempPoints = Math.floor(Math.random() * 3);
            if (tempPoints == 0) {
                card3S.src = 'img/cards/6Club.jpg';
                card3S.alt = '6 Club';
            }
            else if (tempPoints == 1) {
                card3S.src = 'img/cards/6Diamond.jpg';
                card3S.alt = '6 Diamond';
            }
            else if (tempPoints == 2) {
                card3S.src = 'img/cards/6Hearts.jpg';
                card3S.alt = '6 Hearts';
            }
            else if (tempPoints == 3) {
                card3S.src = 'img/cards/6Spade.jpg';
                card3S.alt = '6 Spade';
            }
            break;
        case 4:
            playerCards.push(tempPoints + 3);
            tempPoints = Math.floor(Math.random() * 3);
            if (tempPoints == 0) {
                card3S.src = 'img/cards/7Club.jpg';
                card3S.alt = '7 Club';
            }
            else if (tempPoints == 1) {
                card3S.src = 'img/cards/7Diamond.jpg';
                card3S.alt = '7 Diamond';
            }
            else if (tempPoints == 2) {
                card3S.src = 'img/cards/7Hearts.jpg';
                card3S.alt = '7 Hearts';
            }
            else if (tempPoints == 3) {
                card3S.src = 'img/cards/7Spade.jpg';
                card3S.alt = '7 Spade';
            }
            break;
        case 5:
            playerCards.push(tempPoints + 3);
            tempPoints = Math.floor(Math.random() * 3);
            if (tempPoints == 0) {
                card3S.src = 'img/cards/8Club.jpg';
                card3S.alt = '8 Club';
            }
            else if (tempPoints == 1) {
                card3S.src = 'img/cards/8Diamond.jpg';
                card3S.alt = '8 Diamond';
            }
            else if (tempPoints == 2) {
                card3S.src = 'img/cards/8Hearts.jpg';
                card3S.alt = '8 Hearts';
            }
            else if (tempPoints == 3) {
                card3S.src = 'img/cards/8Spade.jpg';
                card3S.alt = '8 Spade';
            }
            break;
        case 6:
            playerCards.push(tempPoints + 3);
            tempPoints = Math.floor(Math.random() * 3);
            if (tempPoints == 0) {
                card3S.src = 'img/cards/9Club.jpg';
                card3S.alt = '9 Club';
            }
            else if (tempPoints == 1) {
                card3S.src = 'img/cards/9Diamond.jpg';
                card3S.alt = '9 Diamond';
            }
            else if (tempPoints == 2) {
                card3S.src = 'img/cards/9Hearts.jpg';
                card3S.alt = '9 Hearts';
            }
            else if (tempPoints == 3) {
                card3S.src = 'img/cards/9Spade.jpg';
                card3S.alt = '9 Spade';
            }
            break;
        case 7:
            playerCards.push(tempPoints + 3);
            tempPoints = Math.floor(Math.random() * 3);
            if (tempPoints == 0) {
                card3S.src = 'img/cards/10Club.jpg';
                card3S.alt = '10 Club';
            }
            else if (tempPoints == 1) {
                card3S.src = 'img/cards/10Diamond.jpg';
                card3S.alt = '10 Diamond';
            }
            else if (tempPoints == 2) {
                card3S.src = 'img/cards/10Hearts.jpg';
                card3S.alt = '10 Hearts';
            }
            else if (tempPoints == 3) {
                card3S.src = 'img/cards/10Spade.jpg';
                card3S.alt = '10 Spade';
            }
            break;
        case 8:
            playerCards.push(tempPoints + 3);
            tempPoints = Math.floor(Math.random() * 3);
            if (tempPoints == 0) {
                card3S.src = 'img/cards/AceClub.jpg';
                card3S.alt = 'Ace Club';
            }
            else if (tempPoints == 1) {
                card3S.src = 'img/cards/AceDiamond.jpg';
                card3S.alt = 'Ace Diamond';
            }
            else if (tempPoints == 2) {
                card3S.src = 'img/cards/AceHearts.jpg';
                card3S.alt = 'Ace Hearts';
            }
            else if (tempPoints == 3) {
                card3S.src = 'img/cards/AceSpade.jpg';
                card3S.alt = 'Ace Spade';
            }
            break;
    }
    tempPoints = Math.floor(Math.random() * 9);
    switch (tempPoints) {
        case 0:
            playerCards.push(tempPoints + 2);
            tempPoints = Math.floor(Math.random() * 3);
            if (tempPoints == 0) {
                card4S.src = 'img/cards/JClub.jpg';
                card4S.alt = 'Jack Club';
            }
            else if (tempPoints == 1) {
                card4S.src = 'img/cards/JDiamond.jpg';
                card4S.alt = 'Jack Diamond';
            }
            else if (tempPoints == 2) {
                card4S.src = 'img/cards/JHearts.jpg';
                card4S.alt = 'Jack Hearts';
            }
            else if (tempPoints == 3) {
                card4S.src = 'img/cards/JSpade.jpg';
                card4S.alt = 'Jack Spade';
            }
            break;
        case 1:
            playerCards.push(tempPoints + 2);
            tempPoints = Math.floor(Math.random() * 3);
            if (tempPoints == 0) {
                card4S.src = 'img/cards/QClub.jpg';
                card4S.alt = 'Queen Club';
            }
            else if (tempPoints == 1) {
                card4S.src = 'img/cards/QDiamond.jpg';
                card4S.alt = 'Queen Diamond';
            }
            else if (tempPoints == 2) {
                card4S.src = 'img/cards/QHearts.jpg';
                card4S.alt = 'Queen Hearts';
            }
            else if (tempPoints == 3) {
                card4S.src = 'img/cards/QSpade.jpg';
                card4S.alt = 'Queen Spade';
            }
            break;
        case 2:
            playerCards.push(tempPoints + 2);
            tempPoints = Math.floor(Math.random() * 3);
            if (tempPoints == 0) {
                card4S.src = 'img/cards/KClub.jpg';
                card4S.alt = 'King Club';
            }
            else if (tempPoints == 1) {
                card4S.src = 'img/cards/KDiamond.jpg';
                card4S.alt = 'King Diamond';
            }
            else if (tempPoints == 2) {
                card4S.src = 'img/cards/KHearts.jpg';
                card4S.alt = 'King Hearts';
            }
            else if (tempPoints == 3) {
                card4S.src = 'img/cards/KSpade.jpg';
                card4S.alt = 'King Spade';
            }
            break;
        case 3:
            playerCards.push(tempPoints + 3);
            tempPoints = Math.floor(Math.random() * 3);
            if (tempPoints == 0) {
                card4S.src = 'img/cards/6Club.jpg';
                card4S.alt = '6 Club';
            }
            else if (tempPoints == 1) {
                card4S.src = 'img/cards/6Diamond.jpg';
                card4S.alt = '6 Diamond';
            }
            else if (tempPoints == 2) {
                card4S.src = 'img/cards/6Hearts.jpg';
                card4S.alt = '6 Hearts';
            }
            else if (tempPoints == 3) {
                card4S.src = 'img/cards/6Spade.jpg';
                card4S.alt = '6 Spade';
            }
            break;
        case 4:
            playerCards.push(tempPoints + 3);
            tempPoints = Math.floor(Math.random() * 3);
            if (tempPoints == 0) {
                card4S.src = 'img/cards/7Club.jpg';
                card4S.alt = '7 Club';
            }
            else if (tempPoints == 1) {
                card4S.src = 'img/cards/7Diamond.jpg';
                card4S.alt = '7 Diamond';
            }
            else if (tempPoints == 2) {
                card4S.src = 'img/cards/7Hearts.jpg';
                card4S.alt = '7 Hearts';
            }
            else if (tempPoints == 3) {
                card4S.src = 'img/cards/7Spade.jpg';
                card4S.alt = '7 Spade';
            }
            break;
        case 5:
            playerCards.push(tempPoints + 3);
            tempPoints = Math.floor(Math.random() * 3);
            if (tempPoints == 0) {
                card4S.src = 'img/cards/8Club.jpg';
                card4S.alt = '8 Club';
            }
            else if (tempPoints == 1) {
                card4S.src = 'img/cards/8Diamond.jpg';
                card4S.alt = '8 Diamond';
            }
            else if (tempPoints == 2) {
                card4S.src = 'img/cards/8Hearts.jpg';
                card4S.alt = '8 Hearts';
            }
            else if (tempPoints == 3) {
                card4S.src = 'img/cards/8Spade.jpg';
                card4S.alt = '8 Spade';
            }
            break;
        case 6:
            playerCards.push(tempPoints + 3);
            tempPoints = Math.floor(Math.random() * 3);
            if (tempPoints == 0) {
                card4S.src = 'img/cards/9Club.jpg';
                card4S.alt = '9 Club';
            }
            else if (tempPoints == 1) {
                card4S.src = 'img/cards/9Diamond.jpg';
                card4S.alt = '9 Diamond';
            }
            else if (tempPoints == 2) {
                card4S.src = 'img/cards/9Hearts.jpg';
                card4S.alt = '9 Hearts';
            }
            else if (tempPoints == 3) {
                card4S.src = 'img/cards/9Spade.jpg';
                card4S.alt = '9 Spade';
            }
            break;
        case 7:
            playerCards.push(tempPoints + 3);
            tempPoints = Math.floor(Math.random() * 3);
            if (tempPoints == 0) {
                card4S.src = 'img/cards/10Club.jpg';
                card4S.alt = '10 Club';
            }
            else if (tempPoints == 1) {
                card4S.src = 'img/cards/10Diamond.jpg';
                card4S.alt = '10 Diamond';
            }
            else if (tempPoints == 2) {
                card4S.src = 'img/cards/10Hearts.jpg';
                card4S.alt = '10 Hearts';
            }
            else if (tempPoints == 3) {
                card4S.src = 'img/cards/10Spade.jpg';
                card4S.alt = '10 Spade';
            }
            break;
        case 8:
            playerCards.push(tempPoints + 3);
            tempPoints = Math.floor(Math.random() * 3);
            if (tempPoints == 0) {
                card4S.src = 'img/cards/AceClub.jpg';
                card4S.alt = 'Ace Club';
            }
            else if (tempPoints == 1) {
                card4S.src = 'img/cards/AceDiamond.jpg';
                card4S.alt = 'Ace Diamond';
            }
            else if (tempPoints == 2) {
                card4S.src = 'img/cards/AceHearts.jpg';
                card4S.alt = 'Ace Hearts';
            }
            else if (tempPoints == 3) {
                card4S.src = 'img/cards/AceSpade.jpg';
                card4S.alt = 'Ace Spade';
            }
            break;
    }
    for (let i = 0; i < playerCards.length; i++) {
        playerP += playerCards[i];
    }
    playerPoints.textContent = 'Points: ' + playerP;
    if (playerP > 21) {
        lose = true;
        hold.click();
    }
});

hit.addEventListener('click', () => {
    tempPoints = Math.floor(Math.random() * 9);
    let newCard = document.createElement('img');
    switch (tempPoints) {
        case 0:
            playerCards.push(tempPoints + 2);
            tempPoints = Math.floor(Math.random() * 3);
            if (tempPoints == 0) {
                newCard.src = 'img/cards/JClub.jpg';
                newCard.alt = 'Jack Club';
            }
            else if (tempPoints == 1) {
                newCard.src = 'img/cards/JDiamond.jpg';
                newCard.alt = 'Jack Diamond';
            }
            else if (tempPoints == 2) {
                newCard.src = 'img/cards/JHearts.jpg';
                newCard.alt = 'Jack Hearts';
            }
            else if (tempPoints == 3) {
                newCard.src = 'img/cards/JSpade.jpg';
                newCard.alt = 'Jack Spade';
            }
            break;
        case 1:
            playerCards.push(tempPoints + 2);
            tempPoints = Math.floor(Math.random() * 3);
            if (tempPoints == 0) {
                newCard.src = 'img/cards/QClub.jpg';
                newCard.alt = 'Queen Club';
            }
            else if (tempPoints == 1) {
                newCard.src = 'img/cards/QDiamond.jpg';
                newCard.alt = 'Queen Diamond';
            }
            else if (tempPoints == 2) {
                newCard.src = 'img/cards/QHearts.jpg';
                newCard.alt = 'Queen Hearts';
            }
            else if (tempPoints == 3) {
                newCard.src = 'img/cards/QSpade.jpg';
                newCard.alt = 'Queen Spade';
            }
            break;
        case 2:
            playerCards.push(tempPoints + 2);
            tempPoints = Math.floor(Math.random() * 3);
            if (tempPoints == 0) {
                newCard.src = 'img/cards/KClub.jpg';
                newCard.alt = 'King Club';
            }
            else if (tempPoints == 1) {
                newCard.src = 'img/cards/KDiamond.jpg';
                newCard.alt = 'King Diamond';
            }
            else if (tempPoints == 2) {
                newCard.src = 'img/cards/KHearts.jpg';
                newCard.alt = 'King Hearts';
            }
            else if (tempPoints == 3) {
                newCard.src = 'img/cards/KSpade.jpg';
                newCard.alt = 'King Spade';
            }
            break;
        case 3:
            playerCards.push(tempPoints + 3);
            tempPoints = Math.floor(Math.random() * 3);
            if (tempPoints == 0) {
                newCard.src = 'img/cards/6Club.jpg';
                newCard.alt = '6 Club';
            }
            else if (tempPoints == 1) {
                newCard.src = 'img/cards/6Diamond.jpg';
                newCard.alt = '6 Diamond';
            }
            else if (tempPoints == 2) {
                newCard.src = 'img/cards/6Hearts.jpg';
                newCard.alt = '6 Hearts';
            }
            else if (tempPoints == 3) {
                newCard.src = 'img/cards/6Spade.jpg';
                newCard.alt = '6 Spade';
            }
            break;
        case 4:
            playerCards.push(tempPoints + 3);
            tempPoints = Math.floor(Math.random() * 3);
            if (tempPoints == 0) {
                newCard.src = 'img/cards/7Club.jpg';
                newCard.alt = '7 Club';
            }
            else if (tempPoints == 1) {
                newCard.src = 'img/cards/7Diamond.jpg';
                newCard.alt = '7 Diamond';
            }
            else if (tempPoints == 2) {
                newCard.src = 'img/cards/7Hearts.jpg';
                newCard.alt = '7 Hearts';
            }
            else if (tempPoints == 3) {
                newCard.src = 'img/cards/7Spade.jpg';
                newCard.alt = '7 Spade';
            }
            break;
        case 5:
            playerCards.push(tempPoints + 3);
            tempPoints = Math.floor(Math.random() * 3);
            if (tempPoints == 0) {
                newCard.src = 'img/cards/8Club.jpg';
                newCard.alt = '8 Club';
            }
            else if (tempPoints == 1) {
                newCard.src = 'img/cards/8Diamond.jpg';
                newCard.alt = '8 Diamond';
            }
            else if (tempPoints == 2) {
                newCard.src = 'img/cards/8Hearts.jpg';
                newCard.alt = '8 Hearts';
            }
            else if (tempPoints == 3) {
                newCard.src = 'img/cards/8Spade.jpg';
                newCard.alt = '8 Spade';
            }
            break;
        case 6:
            playerCards.push(tempPoints + 3);
            tempPoints = Math.floor(Math.random() * 3);
            if (tempPoints == 0) {
                newCard.src = 'img/cards/9Club.jpg';
                newCard.alt = '9 Club';
            }
            else if (tempPoints == 1) {
                newCard.src = 'img/cards/9Diamond.jpg';
                newCard.alt = '9 Diamond';
            }
            else if (tempPoints == 2) {
                newCard.src = 'img/cards/9Hearts.jpg';
                newCard.alt = '9 Hearts';
            }
            else if (tempPoints == 3) {
                newCard.src = 'img/cards/9Spade.jpg';
                newCard.alt = '9 Spade';
            }
            break;
        case 7:
            playerCards.push(tempPoints + 3);
            tempPoints = Math.floor(Math.random() * 3);
            if (tempPoints == 0) {
                newCard.src = 'img/cards/10Club.jpg';
                newCard.alt = '10 Club';
            }
            else if (tempPoints == 1) {
                newCard.src = 'img/cards/10Diamond.jpg';
                newCard.alt = '10 Diamond';
            }
            else if (tempPoints == 2) {
                newCard.src = 'img/cards/10Hearts.jpg';
                newCard.alt = '10 Hearts';
            }
            else if (tempPoints == 3) {
                newCard.src = 'img/cards/10Spade.jpg';
                newCard.alt = '10 Spade';
            }
            break;
        case 8:
            playerCards.push(tempPoints + 3);
            tempPoints = Math.floor(Math.random() * 3);
            if (tempPoints == 0) {
                newCard.src = 'img/cards/AceClub.jpg';
                newCard.alt = 'Ace Club';
            }
            else if (tempPoints == 1) {
                newCard.src = 'img/cards/AceDiamond.jpg';
                newCard.alt = 'Ace Diamond';
            }
            else if (tempPoints == 2) {
                newCard.src = 'img/cards/AceHearts.jpg';
                newCard.alt = 'Ace Hearts';
            }
            else if (tempPoints == 3) {
                newCard.src = 'img/cards/AceSpade.jpg';
                newCard.alt = 'Ace Spade';
            }
            break;
    }
    playerP = 0;
    for (let i = 0; i < playerCards.length; i++) {
        playerP += playerCards[i];
    }
    playerPoints.textContent = 'Points: ' + playerP;
    newCard.className = 'cardGame';
    playerGame.appendChild(newCard);
    if (playerP > 21) {
        lose = true;
        hold.click();
    }
});

hold.addEventListener('click', () => {
    hitDiv.style.display = 'none';
    holdDiv.style.display = 'none';
    startGameDiv.style.display = 'flex';
    startGame.style.display = 'none';
    setTimeout(function () {
        tempPoints = Math.floor(Math.random() * 9);
        switch (tempPoints) {
            case 0:
                dealerCards.push(tempPoints + 2);
                tempPoints = Math.floor(Math.random() * 3);
                if (tempPoints == 0) {
                    card1S.src = 'img/cards/JClub.jpg';
                    card1S.alt = 'Jack Club';
                }
                else if (tempPoints == 1) {
                    card1S.src = 'img/cards/JDiamond.jpg';
                    card1S.alt = 'Jack Diamond';
                }
                else if (tempPoints == 2) {
                    card1S.src = 'img/cards/JHearts.jpg';
                    card1S.alt = 'Jack Hearts';
                }
                else if (tempPoints == 3) {
                    card1S.src = 'img/cards/JSpade.jpg';
                    card1S.alt = 'Jack Spade';
                }
                break;
            case 1:
                dealerCards.push(tempPoints + 2);
                tempPoints = Math.floor(Math.random() * 3);
                if (tempPoints == 0) {
                    card1S.src = 'img/cards/QClub.jpg';
                    card1S.alt = 'Queen Club';
                }
                else if (tempPoints == 1) {
                    card1S.src = 'img/cards/QDiamond.jpg';
                    card1S.alt = 'Queen Diamond';
                }
                else if (tempPoints == 2) {
                    card1S.src = 'img/cards/QHearts.jpg';
                    card1S.alt = 'Queen Hearts';
                }
                else if (tempPoints == 3) {
                    card1S.src = 'img/cards/QSpade.jpg';
                    card1S.alt = 'Queen Spade';
                }
                break;
            case 2:
                dealerCards.push(tempPoints + 2);
                tempPoints = Math.floor(Math.random() * 3);
                if (tempPoints == 0) {
                    card1S.src = 'img/cards/KClub.jpg';
                    card1S.alt = 'King Club';
                }
                else if (tempPoints == 1) {
                    card1S.src = 'img/cards/KDiamond.jpg';
                    card1S.alt = 'King Diamond';
                }
                else if (tempPoints == 2) {
                    card1S.src = 'img/cards/KHearts.jpg';
                    card1S.alt = 'King Hearts';
                }
                else if (tempPoints == 3) {
                    card1S.src = 'img/cards/KSpade.jpg';
                    card1S.alt = 'King Spade';
                }
                break;
            case 3:
                dealerCards.push(tempPoints + 3);
                tempPoints = Math.floor(Math.random() * 3);
                if (tempPoints == 0) {
                    card1S.src = 'img/cards/6Club.jpg';
                    card1S.alt = '6 Club';
                }
                else if (tempPoints == 1) {
                    card1S.src = 'img/cards/6Diamond.jpg';
                    card1S.alt = '6 Diamond';
                }
                else if (tempPoints == 2) {
                    card1S.src = 'img/cards/6Hearts.jpg';
                    card1S.alt = '6 Hearts';
                }
                else if (tempPoints == 3) {
                    card1S.src = 'img/cards/6Spade.jpg';
                    card1S.alt = '6 Spade';
                }
                break;
            case 4:
                dealerCards.push(tempPoints + 3);
                tempPoints = Math.floor(Math.random() * 3);
                if (tempPoints == 0) {
                    card1S.src = 'img/cards/7Club.jpg';
                    card1S.alt = '7 Club';
                }
                else if (tempPoints == 1) {
                    card1S.src = 'img/cards/7Diamond.jpg';
                    card1S.alt = '7 Diamond';
                }
                else if (tempPoints == 2) {
                    card1S.src = 'img/cards/7Hearts.jpg';
                    card1S.alt = '7 Hearts';
                }
                else if (tempPoints == 3) {
                    card1S.src = 'img/cards/7Spade.jpg';
                    card1S.alt = '7 Spade';
                }
                break;
            case 5:
                dealerCards.push(tempPoints + 3);
                tempPoints = Math.floor(Math.random() * 3);
                if (tempPoints == 0) {
                    card1S.src = 'img/cards/8Club.jpg';
                    card1S.alt = '8 Club';
                }
                else if (tempPoints == 1) {
                    card1S.src = 'img/cards/8Diamond.jpg';
                    card1S.alt = '8 Diamond';
                }
                else if (tempPoints == 2) {
                    card1S.src = 'img/cards/8Hearts.jpg';
                    card1S.alt = '8 Hearts';
                }
                else if (tempPoints == 3) {
                    card1S.src = 'img/cards/8Spade.jpg';
                    card1S.alt = '8 Spade';
                }
                break;
            case 6:
                dealerCards.push(tempPoints + 3);
                tempPoints = Math.floor(Math.random() * 3);
                if (tempPoints == 0) {
                    card1S.src = 'img/cards/9Club.jpg';
                    card1S.alt = '9 Club';
                }
                else if (tempPoints == 1) {
                    card1S.src = 'img/cards/9Diamond.jpg';
                    card1S.alt = '9 Diamond';
                }
                else if (tempPoints == 2) {
                    card1S.src = 'img/cards/9Hearts.jpg';
                    card1S.alt = '9 Hearts';
                }
                else if (tempPoints == 3) {
                    card1S.src = 'img/cards/9Spade.jpg';
                    card1S.alt = '9 Spade';
                }
                break;
            case 7:
                dealerCards.push(tempPoints + 3);
                tempPoints = Math.floor(Math.random() * 3);
                if (tempPoints == 0) {
                    card1S.src = 'img/cards/10Club.jpg';
                    card1S.alt = '10 Club';
                }
                else if (tempPoints == 1) {
                    card1S.src = 'img/cards/10Diamond.jpg';
                    card1S.alt = '10 Diamond';
                }
                else if (tempPoints == 2) {
                    card1S.src = 'img/cards/10Hearts.jpg';
                    card1S.alt = '10 Hearts';
                }
                else if (tempPoints == 3) {
                    card1S.src = 'img/cards/10Spade.jpg';
                    card1S.alt = '10 Spade';
                }
                break;
            case 8:
                dealerCards.push(tempPoints + 3);
                tempPoints = Math.floor(Math.random() * 3);
                if (tempPoints == 0) {
                    card1S.src = 'img/cards/AceClub.jpg';
                    card1S.alt = 'Ace Club';
                }
                else if (tempPoints == 1) {
                    card1S.src = 'img/cards/AceDiamond.jpg';
                    card1S.alt = 'Ace Diamond';
                }
                else if (tempPoints == 2) {
                    card1S.src = 'img/cards/AceHearts.jpg';
                    card1S.alt = 'Ace Hearts';
                }
                else if (tempPoints == 3) {
                    card1S.src = 'img/cards/AceSpade.jpg';
                    card1S.alt = 'Ace Spade';
                }
                break;
        }
        setTimeout(function () {
            tempPoints = Math.floor(Math.random() * 9);
            switch (tempPoints) {
                case 0:
                    dealerCards.push(tempPoints + 2);
                    tempPoints = Math.floor(Math.random() * 3);
                    if (tempPoints == 0) {
                        card2S.src = 'img/cards/JClub.jpg';
                        card2S.alt = 'Jack Club';
                    }
                    else if (tempPoints == 1) {
                        card2S.src = 'img/cards/JDiamond.jpg';
                        card2S.alt = 'Jack Diamond';
                    }
                    else if (tempPoints == 2) {
                        card2S.src = 'img/cards/JHearts.jpg';
                        card2S.alt = 'Jack Hearts';
                    }
                    else if (tempPoints == 3) {
                        card2S.src = 'img/cards/JSpade.jpg';
                        card2S.alt = 'Jack Spade';
                    }
                    break;
                case 1:
                    dealerCards.push(tempPoints + 2);
                    tempPoints = Math.floor(Math.random() * 3);
                    if (tempPoints == 0) {
                        card2S.src = 'img/cards/QClub.jpg';
                        card2S.alt = 'Queen Club';
                    }
                    else if (tempPoints == 1) {
                        card2S.src = 'img/cards/QDiamond.jpg';
                        card2S.alt = 'Queen Diamond';
                    }
                    else if (tempPoints == 2) {
                        card2S.src = 'img/cards/QHearts.jpg';
                        card2S.alt = 'Queen Hearts';
                    }
                    else if (tempPoints == 3) {
                        card2S.src = 'img/cards/QSpade.jpg';
                        card2S.alt = 'Queen Spade';
                    }
                    break;
                case 2:
                    dealerCards.push(tempPoints + 2);
                    tempPoints = Math.floor(Math.random() * 3);
                    if (tempPoints == 0) {
                        card2S.src = 'img/cards/KClub.jpg';
                        card2S.alt = 'King Club';
                    }
                    else if (tempPoints == 1) {
                        card2S.src = 'img/cards/KDiamond.jpg';
                        card2S.alt = 'King Diamond';
                    }
                    else if (tempPoints == 2) {
                        card2S.src = 'img/cards/KHearts.jpg';
                        card2S.alt = 'King Hearts';
                    }
                    else if (tempPoints == 3) {
                        card2S.src = 'img/cards/KSpade.jpg';
                        card2S.alt = 'King Spade';
                    }
                    break;
                case 3:
                    dealerCards.push(tempPoints + 3);
                    tempPoints = Math.floor(Math.random() * 3);
                    if (tempPoints == 0) {
                        card2S.src = 'img/cards/6Club.jpg';
                        card2S.alt = '6 Club';
                    }
                    else if (tempPoints == 1) {
                        card2S.src = 'img/cards/6Diamond.jpg';
                        card2S.alt = '6 Diamond';
                    }
                    else if (tempPoints == 2) {
                        card2S.src = 'img/cards/6Hearts.jpg';
                        card2S.alt = '6 Hearts';
                    }
                    else if (tempPoints == 3) {
                        card2S.src = 'img/cards/6Spade.jpg';
                        card2S.alt = '6 Spade';
                    }
                    break;
                case 4:
                    dealerCards.push(tempPoints + 3);
                    tempPoints = Math.floor(Math.random() * 3);
                    if (tempPoints == 0) {
                        card2S.src = 'img/cards/7Club.jpg';
                        card2S.alt = '7 Club';
                    }
                    else if (tempPoints == 1) {
                        card2S.src = 'img/cards/7Diamond.jpg';
                        card2S.alt = '7 Diamond';
                    }
                    else if (tempPoints == 2) {
                        card2S.src = 'img/cards/7Hearts.jpg';
                        card2S.alt = '7 Hearts';
                    }
                    else if (tempPoints == 3) {
                        card2S.src = 'img/cards/7Spade.jpg';
                        card2S.alt = '7 Spade';
                    }
                    break;
                case 5:
                    dealerCards.push(tempPoints + 3);
                    tempPoints = Math.floor(Math.random() * 3);
                    if (tempPoints == 0) {
                        card2S.src = 'img/cards/8Club.jpg';
                        card2S.alt = '8 Club';
                    }
                    else if (tempPoints == 1) {
                        card2S.src = 'img/cards/8Diamond.jpg';
                        card2S.alt = '8 Diamond';
                    }
                    else if (tempPoints == 2) {
                        card2S.src = 'img/cards/8Hearts.jpg';
                        card2S.alt = '8 Hearts';
                    }
                    else if (tempPoints == 3) {
                        card2S.src = 'img/cards/8Spade.jpg';
                        card2S.alt = '8 Spade';
                    }
                    break;
                case 6:
                    dealerCards.push(tempPoints + 3);
                    tempPoints = Math.floor(Math.random() * 3);
                    if (tempPoints == 0) {
                        card2S.src = 'img/cards/9Club.jpg';
                        card2S.alt = '9 Club';
                    }
                    else if (tempPoints == 1) {
                        card2S.src = 'img/cards/9Diamond.jpg';
                        card2S.alt = '9 Diamond';
                    }
                    else if (tempPoints == 2) {
                        card2S.src = 'img/cards/9Hearts.jpg';
                        card2S.alt = '9 Hearts';
                    }
                    else if (tempPoints == 3) {
                        card2S.src = 'img/cards/9Spade.jpg';
                        card2S.alt = '9 Spade';
                    }
                    break;
                case 7:
                    dealerCards.push(tempPoints + 3);
                    tempPoints = Math.floor(Math.random() * 3);
                    if (tempPoints == 0) {
                        card2S.src = 'img/cards/10Club.jpg';
                        card2S.alt = '10 Club';
                    }
                    else if (tempPoints == 1) {
                        card2S.src = 'img/cards/10Diamond.jpg';
                        card2S.alt = '10 Diamond';
                    }
                    else if (tempPoints == 2) {
                        card2S.src = 'img/cards/10Hearts.jpg';
                        card2S.alt = '10 Hearts';
                    }
                    else if (tempPoints == 3) {
                        card2S.src = 'img/cards/10Spade.jpg';
                        card2S.alt = '10 Spade';
                    }
                    break;
                case 8:
                    dealerCards.push(tempPoints + 3);
                    tempPoints = Math.floor(Math.random() * 3);
                    if (tempPoints == 0) {
                        card2S.src = 'img/cards/AceClub.jpg';
                        card2S.alt = 'Ace Club';
                    }
                    else if (tempPoints == 1) {
                        card2S.src = 'img/cards/AceDiamond.jpg';
                        card2S.alt = 'Ace Diamond';
                    }
                    else if (tempPoints == 2) {
                        card2S.src = 'img/cards/AceHearts.jpg';
                        card2S.alt = 'Ace Hearts';
                    }
                    else if (tempPoints == 3) {
                        card2S.src = 'img/cards/AceSpade.jpg';
                        card2S.alt = 'Ace Spade';
                    }
                    break;
            }
            for (let i = 0; i < dealerCards.length; i++) {
                dealerP += dealerCards[i];
            }
            dealerPoints.textContent = 'Points: ' + dealerP;
            if (lose == false) {
                async function drawCard() {
                    while (dealerP < 17) {
                        await new Promise(resolve => setTimeout(resolve, 1000));
                        addNewCards();
                    }
                    startGame.style.display = 'flex';
                    if (playerP > dealerP) {
                        scoreP++;
                        scorePlayer.textContent = scoreP;
                        scoreDealer.textContent = scoreD;
                    }
                    else if (playerP < dealerP) {
                        if (dealerP < 22) {
                            scoreD++;
                        }
                        else {
                            scoreP++;
                        }
                        scorePlayer.textContent = scoreP;
                        scoreDealer.textContent = scoreD;
                    }
                    else if (playerP == dealerP) {
                        scorePlayer.textContent = scoreP;
                        scoreDealer.textContent = scoreD;
                    }
                    if (scoreP == 3 || scoreD == 3) {
                        end = true;
                        if (scoreP == 3) {
                            playerName.textContent = name + " - Won!";
                            dealerName.textContent = 'Dealer - Lost!';
                            
                        }
                        else if (scoreD == 3) {
                            playerName.textContent = name + " - Lost!";
                            dealerName.textContent = "Dealer - Won!";
                        }
                    }
                }
                drawCard();
            }
            else {
                scoreD++;
                scorePlayer.textContent = scoreP;
                scoreDealer.textContent = scoreD;
                startGame.style.display = 'flex';
                if (scoreP == 3 || scoreD == 3) {
                    end = true;
                    if (scoreP == 3) {
                        playerName.textContent = usernameTrimmed + " - Won!";
                        dealerName.textContent = 'Dealer - Lost!';

                    }
                    else if (scoreD == 3) {
                        playerName.textContent = usernameTrimmed + " - Lost!";
                        dealerName.textContent = "Dealer - Won!";
                    }
                }
            }
        }, 1000);
    }, 1500);
});

function addNewCards() {
    tempPoints = Math.floor(Math.random() * 9);
    let newCard = document.createElement('img');
        switch (tempPoints) {
            case 0:
                dealerCards.push(tempPoints + 2);
                tempPoints = Math.floor(Math.random() * 3);
                if (tempPoints == 0) {
                    newCard.src = 'img/cards/JClub.jpg';
                    newCard.alt = 'Jack Club';
                }
                else if (tempPoints == 1) {
                    newCard.src = 'img/cards/JDiamond.jpg';
                    newCard.alt = 'Jack Diamond';
                }
                else if (tempPoints == 2) {
                    newCard.src = 'img/cards/JHearts.jpg';
                    newCard.alt = 'Jack Hearts';
                }
                else if (tempPoints == 3) {
                    newCard.src = 'img/cards/JSpade.jpg';
                    newCard.alt = 'Jack Spade';
                }
                break;
            case 1:
                dealerCards.push(tempPoints + 2);
                tempPoints = Math.floor(Math.random() * 3);
                if (tempPoints == 0) {
                    newCard.src = 'img/cards/QClub.jpg';
                    newCard.alt = 'Queen Club';
                }
                else if (tempPoints == 1) {
                    newCard.src = 'img/cards/QDiamond.jpg';
                    newCard.alt = 'Queen Diamond';
                }
                else if (tempPoints == 2) {
                    newCard.src = 'img/cards/QHearts.jpg';
                    newCard.alt = 'Queen Hearts';
                }
                else if (tempPoints == 3) {
                    newCard.src = 'img/cards/QSpade.jpg';
                    newCard.alt = 'Queen Spade';
                }
                break;
            case 2:
                dealerCards.push(tempPoints + 2);
                tempPoints = Math.floor(Math.random() * 3);
                if (tempPoints == 0) {
                    newCard.src = 'img/cards/KClub.jpg';
                    newCard.alt = 'King Club';
                }
                else if (tempPoints == 1) {
                    newCard.src = 'img/cards/KDiamond.jpg';
                    newCard.alt = 'King Diamond';
                }
                else if (tempPoints == 2) {
                    newCard.src = 'img/cards/KHearts.jpg';
                    newCard.alt = 'King Hearts';
                }
                else if (tempPoints == 3) {
                    newCard.src = 'img/cards/KSpade.jpg';
                    newCard.alt = 'King Spade';
                }
                break;
            case 3:
                dealerCards.push(tempPoints + 3);
                tempPoints = Math.floor(Math.random() * 3);
                if (tempPoints == 0) {
                    newCard.src = 'img/cards/6Club.jpg';
                    newCard.alt = '6 Club';
                }
                else if (tempPoints == 1) {
                    newCard.src = 'img/cards/6Diamond.jpg';
                    newCard.alt = '6 Diamond';
                }
                else if (tempPoints == 2) {
                    newCard.src = 'img/cards/6Hearts.jpg';
                    newCard.alt = '6 Hearts';
                }
                else if (tempPoints == 3) {
                    newCard.src = 'img/cards/6Spade.jpg';
                    newCard.alt = '6 Spade';
                }
                break;
            case 4:
                dealerCards.push(tempPoints + 3);
                tempPoints = Math.floor(Math.random() * 3);
                if (tempPoints == 0) {
                    newCard.src = 'img/cards/7Club.jpg';
                    newCard.alt = '7 Club';
                }
                else if (tempPoints == 1) {
                    newCard.src = 'img/cards/7Diamond.jpg';
                    newCard.alt = '7 Diamond';
                }
                else if (tempPoints == 2) {
                    newCard.src = 'img/cards/7Hearts.jpg';
                    newCard.alt = '7 Hearts';
                }
                else if (tempPoints == 3) {
                    newCard.src = 'img/cards/7Spade.jpg';
                    newCard.alt = '7 Spade';
                }
                break;
            case 5:
                dealerCards.push(tempPoints + 3);
                tempPoints = Math.floor(Math.random() * 3);
                if (tempPoints == 0) {
                    newCard.src = 'img/cards/8Club.jpg';
                    newCard.alt = '8 Club';
                }
                else if (tempPoints == 1) {
                    newCard.src = 'img/cards/8Diamond.jpg';
                    newCard.alt = '8 Diamond';
                }
                else if (tempPoints == 2) {
                    newCard.src = 'img/cards/8Hearts.jpg';
                    newCard.alt = '8 Hearts';
                }
                else if (tempPoints == 3) {
                    newCard.src = 'img/cards/8Spade.jpg';
                    newCard.alt = '8 Spade';
                }
                break;
            case 6:
                dealerCards.push(tempPoints + 3);
                tempPoints = Math.floor(Math.random() * 3);
                if (tempPoints == 0) {
                    newCard.src = 'img/cards/9Club.jpg';
                    newCard.alt = '9 Club';
                }
                else if (tempPoints == 1) {
                    newCard.src = 'img/cards/9Diamond.jpg';
                    newCard.alt = '9 Diamond';
                }
                else if (tempPoints == 2) {
                    newCard.src = 'img/cards/9Hearts.jpg';
                    newCard.alt = '9 Hearts';
                }
                else if (tempPoints == 3) {
                    newCard.src = 'img/cards/9Spade.jpg';
                    newCard.alt = '9 Spade';
                }
                break;
            case 7:
                dealerCards.push(tempPoints + 3);
                tempPoints = Math.floor(Math.random() * 3);
                if (tempPoints == 0) {
                    newCard.src = 'img/cards/10Club.jpg';
                    newCard.alt = '10 Club';
                }
                else if (tempPoints == 1) {
                    newCard.src = 'img/cards/10Diamond.jpg';
                    newCard.alt = '10 Diamond';
                }
                else if (tempPoints == 2) {
                    newCard.src = 'img/cards/10Hearts.jpg';
                    newCard.alt = '10 Hearts';
                }
                else if (tempPoints == 3) {
                    newCard.src = 'img/cards/10Spade.jpg';
                    newCard.alt = '10 Spade';
                }
                break;
            case 8:
                dealerCards.push(tempPoints + 3);
                tempPoints = Math.floor(Math.random() * 3);
                if (tempPoints == 0) {
                    newCard.src = 'img/cards/AceClub.jpg';
                    newCard.alt = 'Ace Club';
                }
                else if (tempPoints == 1) {
                    newCard.src = 'img/cards/AceDiamond.jpg';
                    newCard.alt = 'Ace Diamond';
                }
                else if (tempPoints == 2) {
                    newCard.src = 'img/cards/AceHearts.jpg';
                    newCard.alt = 'Ace Hearts';
                }
                else if (tempPoints == 3) {
                    newCard.src = 'img/cards/AceSpade.jpg';
                    newCard.alt = 'Ace Spade';
                }
                break;
        }
        dealerP = 0;
        for (let i = 0; i < dealerCards.length; i++) {
            dealerP += dealerCards[i];
        }
        dealerPoints.textContent = 'Points: ' + dealerP;
        newCard.className = 'cardGame';
        dealerGame.appendChild(newCard);
}