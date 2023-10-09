import global from '../config/env';

export async function fetchAllProperties() {
    const response = await fetch(global.apiURL + 'api/getAllProperties');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const properties = await response.json();
    return properties;
}

export async function fetchProperty(slug) {
    const response = await fetch(global.apiURL + 'api/getProperty/' + slug);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const property = await response.json();

    return property;
}
export async function fetchAllAssignments() {
    const response = await fetch(global.apiURL + 'api/getAllAssignments');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const assignments = await response.json();
    return assignments;
}

export async function fetchAssignment(id) {
    const response = await fetch(global.apiURL + 'api/getAssignment/' + id);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const assignment = await response.json();

    return assignment;
}
export async function fetchAllRentals() {
    const response = await fetch(global.apiURL + 'api/getAllRentals');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const rentals = await response.json();
    return rentals;
}

export async function fetchRental(id) {
    const response = await fetch(global.apiURL + 'api/getAllFavorites/'  + id);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const rental = await response.json();

    return rental;
}

export async function fetchAllFavProperties() {
    const response = await fetch(global.apiURL + 'api/getAllFavorites');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const favProperties = await response.json();

    return favProperties;
}

export async function fetchCityCount(name) {
    try {
        const response = await fetch(global.apiURL + 'api/getCityPropertyCount/' + name);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        return await response.text();
    } catch (error) {
        // Handle the error here
        console.error('Error fetching API:', error);
        
        throw error; // Re-throw the error to propagate it to the caller if needed
    }
}