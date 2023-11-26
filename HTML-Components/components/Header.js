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



