/** createFooter()
 * Creates and returns a footer element for a webpage. The footer is structured 
 * as a container with two main sections.The first section, 'footer-content', 
 * includes two subsections: 'About Us' and 'Contact Info'. 
 * 
 * 'About Us' contains a heading and a paragraph with descriptive text. 
 * 
 * 'Contact Info' includes a heading and two paragraphs for email and contact 
 * 
 * The second main section, 'footer-bottom', contains a paragraph with 
 * copyright information.
 * 
 * An HTML representation is in the comments below the function
 *  
 */

function createFooter(){
    // create footer element
    const footer = document.createElement('footer')
    footer.className = 'footer container'

    // create the div to hold top footer section content
    const footerContentDiv = document.createElement('div')
    footerContentDiv.className = 'footer-content'

    // create top-left footer section
    const topLeftFooterSection = document.createElement('div')
    topLeftFooterSection.className = 'footer-section'
    //create header
    const topLeftHeader = document.createElement('h4')
    topLeftHeader.textContent = 'About Us'
    //create paragraph
    const topLeftParagragh = document.createElement('p')
    topLeftParagragh.innerHTML = 'Lorem ipsum dolor, sit amet consecttur apisci<br>dolor dolorem eaque harum voluptatum'
    // append elements
    topLeftFooterSection.appendChild(topLeftHeader)
    topLeftFooterSection.appendChild(topLeftParagragh)

    // create top-right footer section
    const topRightFooterSection = document.createElement('div')
    topRightFooterSection.className = 'footer-section'
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

    // append footer section elements to parent
    footerContentDiv.appendChild(topLeftFooterSection)
    footerContentDiv.appendChild(topRightFooterSection)

    // create bottom section of footer
    const footerBottomDiv = document.createElement('div')
    footerBottomDiv.className = 'footer-bottom'

    const footerBottomParagragh = document.createElement('p')
    footerBottomParagragh.textContent = '© HTML Components Practice | All rights reserved'

    // append paragragh to parent
    footerBottomDiv.appendChild(footerBottomParagragh)

    //append top content and bottome content to <footer>
    footer.appendChild(footerContentDiv)
    footer.appendChild(footerBottomDiv)

    return footer
}


// The HTML representation of the return value of createFooter() function

{/* <footer class="footer container">
    <div class="footer-content">
        <div class="footer-section">
            <h4>About Us</h4>
            <p>Lorem ipsum dolor, sit amet consecttur apisci<br>dolor dolorem eaque harum voluptatum</p>
        </div>
        <div class="footer-section">
            <h4>Contact Info</h4>
            <p>Email: info@example.com</p>
            <p>Phone: +123 456 7890</p>
        </div>
    </div>
    <div class="footer-bottom">
        <p>&copy; 2023 HTML Components Practice | All rights reserved</p>
    </div>
</footer>  */}