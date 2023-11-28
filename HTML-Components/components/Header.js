/** createHeader(activePage)
 * Creates and returns a header element for a webpage. This header is divided 
 * into two primary sections: a banner and a menu.
 * 
 * The banner section includes an image (logo) and a main heading.
 * 
 * The menu section is a list of nav items, representing different pages. These 
 * items are dynamically created based on a predefined array of page names and 
 * their corresponding URLs.
 * 
 * The function accepts 'activePage' as a parameter, which is used to highlight 
 * the current active page in the navigation menu by adding a class to the 
 * respective menu item.
 * 
 * This function facilitates the dynamic generation of a consistent header across 
 * different pages, with the active page highlighted appropriately.
 * 
 * An HTML representation is in the comments below the function
 * 
 */

// activePage arg is the name of the calling page
function createHeader(activePage) {
    // Create header element
    const header = document.createElement('header');
    header.className = 'container';

    // Create banner div
    const bannerDiv = document.createElement('div');
    bannerDiv.className = 'banner';

    // Create section with  image
    const sectionImage = document.createElement('section');
    const img = document.createElement('img');
    img.src = 'images/logo.png';
    img.alt = 'John Cena';
    sectionImage.appendChild(img);

    // Create section with heading
    const sectionHeading = document.createElement('section');
    const h1 = document.createElement('h1');
    h1.textContent = 'HTML Components Practice';
    sectionHeading.appendChild(h1);

    // Append sections to banner div
    bannerDiv.appendChild(sectionImage);
    bannerDiv.appendChild(sectionHeading);

    // Create menu div
    const menuDiv = document.createElement('div');
    menuDiv.className = 'menu';

    // Create menu items
    const ul = document.createElement('ul');
    const pages = [
        { name: 'Index', href: './index.html' },
        { name: 'Page 2', href: './page2.html' },
        { name: 'Page 3', href: './page3.html' }
    ];

    pages.forEach(page => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = page.href;
        a.textContent = page.name;
        if (page.name.toLowerCase() === activePage.toLowerCase()) {
            // add class to name of page stored in arg activePage
            a.className = 'active';
        }
        li.appendChild(a);
        ul.appendChild(li);
    });

    // Append list of menu items to menu div
    menuDiv.appendChild(ul);

    // Append banner and menu divs to header el
    header.appendChild(bannerDiv);
    header.appendChild(menuDiv);

    return header;
}



// The HTML representation of the return value of createHeader() function

{/* <header class="container">
    <div class="banner">
        <section>
            <img src="images/logo.png" alt="John Cena">
        </section>
        <section>
            <h1>HTML Components Practice</h1>
        </section>
    </div>
    <div class="menu">
        <ul>
            <li><a href="./index.html">Index</a></li>
            <li><a href="./page2.html">Page 2</a></li>
            <li><a href="./page3.html">Page 3</a></li>
        </ul>
    </div>
</header> */}
