import global from '../config/env';

const axios = require('axios');

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
    const response = await fetch(global.apiURL + 'api/getRental/' + id);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const rental = await response.json();

    return rental;
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

export async function registerUser(userData)
{
    const response = await fetch(global.apiURL + 'api/register/' + 
        encodeURIComponent(userData['name']) + '/' + 
        encodeURIComponent(userData['email']) + '/' + 
        encodeURIComponent(userData['password']));

    return await response.json();
}
export async function resendVerificationEmail(email)
{
    await fetch(global.apiURL + 
        'api/resendEmail/' + 
        encodeURIComponent(email));
}
export async function authenticateUser(userData)
{
    const response = await fetch(global.apiURL + 'api/authenticate/' + 
        encodeURIComponent(userData['email']) + '/' + 
        encodeURIComponent(userData['password']));

    const data = await response.json();
    if (response.ok) {

        if (data.token) {
            // Store the token in localStorage
            localStorage.setItem('token', data.token);
            // $response = new Response('Token set in a cookie');

            // // Set the token in an HttpOnly cookie
            // $response->withCookie(cookie('token', $token, 60)); // 'token' is the name of the cookie

            // return $response;
        }
    }

    return await data;
}

export async function validateUser()
{
    
}