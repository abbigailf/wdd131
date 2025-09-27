const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Okinawa Japan",
        location: "Okinawa, Japan",
        dedicated: "2023, November, 12",
        area: 12437,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/okinawa-japan-temple/okinawa-japan-temple-40844.jpg"
    },
    {
        templeName: "London England",
        location: "Surrey, England",
        dedicated: "1958, September, 7",
        area: 42652,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/london-england-temple/london-england-temple-63059.jpg"
    },
    {
        templeName: "Brigham City Utah",
        location: "Brigham City, Utah, United States",
        dedicated: "2012, September, 23",
        area: 36000,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/brigham-city-utah-temple/brigham-city-utah-temple-39612.jpg"
    }
];

document.addEventListener("DOMContentLoaded", () =>
{
    const hamburger = document.getElementById("hamburger");
    const nav = document.getElementById("primary-nav");
    const yearEl = document.getElementById("currentyear");
    const lastModEl = document.getElementById("lastModified");
    const cardsContainer = document.getElementById("temple-cards");

    yearEl.textContent = new Date().getFullYear();
    lastModEl.textContent = `Last Modified: ${document.lastModified}`;

// Hamburger menu toggle
    function toggleNav() {
        const open = nav.classList.toggle("open");
        hamburger.setAttribute("aria-expanded", open ? "true" : "false");
    }
    hamburger.addEventListener("click", toggleNav);

// Render temple cards
    function renderTemples(list) {
        cardsContainer.innerHTML = "";
        list.forEach(t => {
            const card = document.createElement("figure");
            card.classList.add("card");
            card.innerHTML = `
                <figcaption>
                    <h3>${t.templeName}</h3>
                    <p><strong>Location:</strong> ${t.location}</p>
                    <p><strong>Dedicated:</strong> ${t.dedicated}</p>
                    <p><strong>Area:</strong> ${t.area.toLocaleString()} sq ft</p>
                </figcaption>
                <img src="${t.imageUrl}" alt="${t.templeName}" loading="lazy">
            `;
            cardsContainer.appendChild(card);
        });
    }

// Default: render all
    renderTemples(temples);

// Helper: get year
    function getYear(dedicated) {
        return parseInt(dedicated.split(",")[0], 10);
    }

// Filtering
    document.getElementById("home").addEventListener("click", e => {
        e.preventDefault();
        renderTemples(temples);
    });
    
    document.getElementById("old").addEventListener("click", e => {
        e.preventDefault();
        renderTemples(temples.filter(t => getYear(t.dedicated) < 1900)); 
    });
    
    document.getElementById("new").addEventListener("click", e => {
        e.preventDefault();
        renderTemples(temples.filter(t => getYear(t.dedicated) > 2000));
    });

    document.getElementById("large").addEventListener("click", e => {
        e.preventDefault();
        renderTemples(temples.filter(t => t.area > 90000));
    });

    document.getElementById("small").addEventListener("click", e => {
        e.preventDefault();
        renderTemples(temples.filter(t => t.area < 10000));
    });
});