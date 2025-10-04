const products = [
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "power laces", averagerating: 4.7 },
    { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    const select = document.getElementById("productName"); // get the select element

    // Loop through products array and create option elements
    products.forEach(product => {
        const option = document.createElement("option"); // create <option>
        option.value = product.id; // set value = product id
        option.textContent = product.name; // display product name
        select.appendChild(option); // add to select
    });
});