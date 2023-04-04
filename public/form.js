// Selectors
const categoryDropdown = document.querySelector("#category-dropdown");
const fastenerDropdown = document.querySelector("#fastenertype");

const screwOptions = {
    Wood: "wood",
    Machine: "machine",
    Roofing: "roofing",
    Socket: "socket",
};
const nutOptions = {
    Hex: "hex",
    Flange: "flange",
    Eye: "eye",
    Lock: "lock",
};
const boltOptions = {
    Hex: "hex",
    Flange: "flange",
    Eye: "eye",
    Carriage: "carriage",
};
const washerOptions = {
    Flat: "flat",
    Lock: "lock",
    Tooth: "tooth",
};

const updateFastenerOptions = (category) => {
    fastenerDropdown.innerHTML = ""; // clear existing options then...
    // create new options
    let options;
    switch (category) {
        case "screws":
            options = screwOptions;
            break;
        case "nuts":
            options = nutOptions;
            break;
        case "bolts":
            options = boltOptions;
            break;
        case "washers":
            options = washerOptions;
            break;
        default:
            options = {};
    }

    // add new options to the fastener dropdown
    for (const [label, value] of Object.entries(options)) {
        const option = document.createElement("option");
        option.label = label;
        option.value = value;
        fastenerDropdown.appendChild(option);
    }
};

// Event listener for category dropdown
categoryDropdown.addEventListener("change", () => {
    const selectedCategory = categoryDropdown.value;
    updateFastenerOptions(selectedCategory);
});

// Grab form div & initialize API_URL
const partsForm = document.querySelector("#myform");
const API_URL = "http://localhost:3000/";

// Grab form data and send to server via fetch API
partsForm.addEventListener("submit", (e) => {
    e.preventDefault(); // prevent page refresh
    const formData = new FormData(e.target); 
    const data = Object.fromEntries(formData);
    console.log("log before fetch", data);
    fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .then((data) => {
            for (const [key, value] of Object.entries(data)) {
                console.log(`${key}: ${value}`);
                // Print results to the page
                const newDiv = document.createElement("div");
                newDiv.innerHTML = `${key}: ${value}<br>`;
                document.getElementById("results").appendChild(newDiv);
            }
        });
});
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

module.exports = partsForm;
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
