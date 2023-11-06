const MAIN_CONTAINER = document.querySelector('.container')


fetch('./icon.json')
    .then(response => response.json())
    .then(data => {
        data.icons.forEach(icon => {
            // console.log(icon)
            cardBuilder(icon)
        })
    })

function cardBuilder(data){
    // create the card div (parent)
    const card = document.createElement('div')
    card.className = 'card'

    // create img wrapper and img elements
    const cardImageWrapper = document.createElement('div')
    cardImageWrapper.className = 'card-image-wrapper'
    const img = document.createElement('img')
    img.src = data.path
    img.alt = data.title
    img.className = 'card-img'
    cardImageWrapper.appendChild(img)

    // create title span
    const span = document.createElement('span')
    span.className = 'card-title'
    span.innerText = data.title

    // create button element
    const button = document.createElement('button')
    button.className = 'card-view-btn'
    button.setAttribute('data-id', data.title)
    button.innerText = 'Learn More'
    button.addEventListener('click', ()=> triggerPopup(event))

    // append elements to card
    card.appendChild(cardImageWrapper)
    card.appendChild(span)
    card.appendChild(button)

    MAIN_CONTAINER.appendChild(card)
}

// const LEARN_MORE_BTNS = document.querySelectorAll('card-view-btn')

function triggerPopup(event){
     
    // console.log(event.target.getAttribute("data-id"))
    let targetIcon = event.target.getAttribute("data-id")

    fetch('./icon.json')
    .then(response => response.json())
    .then(data => {
        // console.log(data.icons)
        const popupData = data.icons.filter(icon  =>{
            return icon.title === targetIcon
        })
        // console.log(popupData)
        popupBuilder(popupData)
    })    
}

function popupBuilder(data){
    let title = document.getElementById('popup-title')
    let image = document.getElementById('popup-img')
    let description = document.getElementById('popup-description')

    

    title.innerText = data[0].title
    image.src = data[0].path
    description.innerText = data[0].description

    document.querySelector('.popup').classList.remove('hidden')
    document.querySelector('#overlay').classList.remove('hidden')
}

document.querySelector('.close-btn').addEventListener('click', () => {
    document.querySelector('.popup').classList.add('hidden')
    document.querySelector('#overlay').classList.add('hidden')
})
