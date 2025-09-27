const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "http://127.0.0.1:5500/images/aba-nigeria-temple.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "http://127.0.0.1:5500/images/manti-temple.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "http://127.0.0.1:5500/images/payson-utah-temple.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "http://127.0.0.1:5500/images/yigo_guam_temple.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "http://127.0.0.1:5500/images/washington_dc_temple.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "http://127.0.0.1:5500/images/lima-peru-temple.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "http://127.0.0.1:5500/images/mexico-city-temple.jpg"
    },
    {
        templeName: "Okinawa Japan",
        location: "Okinawa, Japan",
        dedicated: "2023, November, 12",
        area: 12437,
        imageUrl: "http://127.0.0.1:5500/images/okinawa-japan.jpg"
    },
    {
        templeName: "London England",
        location: "Surrey, England",
        dedicated: "1958, September, 7",
        area: 42652,
        imageUrl: "http://127.0.0.1:5500/images/london-england.jpg"
    },
    {
        templeName: "Brigham City Utah",
        location: "Brigham City, Utah, United States",
        dedicated: "2012, September, 23",
        area: 36000,
        imageUrl: "http://127.0.0.1:5500/images/brigham-city-utah-temple.jpg"
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