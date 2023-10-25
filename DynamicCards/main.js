const MAIN_CONTAINER = document.querySelector('.container')


fetch('./icon.json')
    .then(response => response.json())
    .then(data => {
        data.icons.forEach(icon => {
            // console.log(icon)
            buildCard(icon)
        })
    })

function buildCard(data){
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

    // append elements to card
    card.appendChild(cardImageWrapper)
    card.appendChild(span)
    card.appendChild(button)

    MAIN_CONTAINER.appendChild(card)
}

const LEARN_MORE_BTNS = document.querySelectorAll('card-view-btn')

console.log(LEARN_MORE_BTNS)