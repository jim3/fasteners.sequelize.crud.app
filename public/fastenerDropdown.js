// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
// Used to update the options of the fastener dropdown based on the selected
// category. This is done by clearing the existing options and creating new
// options based on the selected category.
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

const categoryDropdown = document.querySelector("#category-dropdown");
const fastenerDropdown = document.querySelector("#fastener-type");

// create options/objects for each category of fasteners
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

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// Update the options of the fastener dropdown
const updateFastenerOptions = (category) => {
    fastenerDropdown.innerHTML = ""; // clear existing options

    // then, create new options based on the selected category
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

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// event listener for category dropdown
categoryDropdown.addEventListener("change", () => {
    const selectedCategory = categoryDropdown.value;
    updateFastenerOptions(selectedCategory);
});
