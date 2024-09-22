this is the script: // Define the salt water to lava transformation
elements.salt_water = {
    color: "#3399ff",
    behavior: [
        "M2|M1|M2",
        "M1|XX|M1",
        "M2|M1|M2"
    ],
    reactions: {
        "salt_water": { "elem1": "lava", "chance": 1 }
    },
    state: "liquid",
    category: "liquids",
    density: 1020,  // Adjust the density if needed
    temp: 20,
    tempHigh: 1000,  // Temperature at which it turns into lava
    stateHigh: "lava",  // Turns into lava when it reaches high temperature
    conduct: 0.2,
};

// Define lava properties
elements.lava = {
    color: "#ff4500",
    behavior: behaviors.LIQUID,
    state: "liquid",
    category: "liquids",
    density: 3000,
    temp: 1200,
    tempLow: 900, // Temperature at which lava solidifies
    stateLow: "rock",  // Solidifies into rock
    conduct: 0.5,
};
