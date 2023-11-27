function createFooter(){
    // create footer element
    const footer = document.createElement('footer')
    footer.className = 'footer container'

    // create the div to hold top footer section content
    const footerContentDiv = document.createElement('div')
    footerContentDiv.class = 'footer-content'

    // create top-left footer section
    const topLeftFooterSection = document.createElement('div')
    topLeftFooterSection.class = 'footer-section'
    //create header
    const topLeftHeader = document.createElement('h4')
    topLeftHeader.textContent = 'About Us'
    //create paragraph
    const topLeftParagragh = document.createElement('p')
    topLeftParagragh.textContent = 'Lorem ipsum dolor, sit amet consecttur apiscipinvel elit <br> Officia ab autum dolorboris provident porro dolorum'
    // append elements
    topLeftFooterSection.appendChild(topLeftHeader)
    topLeftFooterSection.appendChild(topLeftParagragh)

    // create top-right footer section
    const topRightFooterSection = document.createElement('div')
    topRightFooterSection.class = 'footer-section'
    //create header
    const topRightHeader = document.createElement('h4')
    topRightHeader.textContent = 'Contact Info'
    //create paragraph
    const topRightParagragh_1 = document.createElement('p')
    topRightParagragh_1.textContent = 'Email: info@example.com'
    //create paragraph
    const topRightParagragh_2 = document.createElement('p')
    topRightParagragh_2.textContent = 'Phone: +123 456 7890'
    // append elements
    topRightFooterSection.appendChild(topRightHeader)
    topRightFooterSection.appendChild(topRightParagragh_1)
    topRightFooterSection.appendChild(topRightParagragh_2)
}