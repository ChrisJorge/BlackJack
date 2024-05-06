import { NewDeck } from "./cards.mjs"
let deck = NewDeck

let options = 
[
'2Club', '2Diamond', '2Heart', '2Spade',
'3Club', '3Diamond', '3Heart', '3Spade',
'4Club', '4Diamond', '4Heart', '4Spade',
'5Club', '5Diamond', '5Heart', '5Spade',
'6Club', '6Diamond', '6Heart', '6Spade',
'7Club', '7Diamond', '7Heart', '7Spade',
'8Club', '8Diamond', '8Heart', '8Spade',
'9Club', '9Diamond', '9Heart', '9Spade',
'10Club', '10Diamond', '10Heart', '10Spade',
'AceClub', 'AceDiamond', 'AceHeart', 'AceSpade', 'Jack', 'Queen', 'King'
]


const start = () => {
    console.log('clicked')
    for(let i =0; i < 2; i++)
    {
        let rand = Math.floor(Math.random() * 43)
        let url = deck[options[rand]].url
        console.log(options[rand])
        placeCard(url, 1)
    }
}

const placeCard = (url, placement) => {
    
    let body = document.querySelector('.cards')
    let image = document.createElement('img');
    image.setAttribute('src', url)
    image.setAttribute('class', 'image')
    body.appendChild(image)
}


let btn = document.querySelector('.start')
btn.addEventListener('click', start)

