import global from '../config/env';
import apiProxy from '../pages/api/apiProxy';

export async function fetchAllProperties() {
    try {
        const response = await fetch('/api/apiProxy', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
          });

        return response;

        // const requestData = {
        //     method: 'GET',
        //     url: 'api/getAllProperties/',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        // };

        // const response = await apiProxy(requestData);
        // return response;
    } 
    catch (error) {
        console.error('Error fetching property:', error);
        throw error; // Optionally re-throw the error
    }
}

export async function fetchProperty(slug) {
    try {
        const requestData = {
            method: 'GET',
            url: 'api/getProperty/' + slug,
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const property = await apiProxy(requestData);
        return property;
    } 
    catch (error) {
        console.error('Error fetching property:', error);
        throw error; // Optionally re-throw the error
    }
}
export async function fetchProperty2(slug) {
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
    const email = userData['email'];
    const password = userData['password'];
    try {
        const response = await fetch('/api/authenticationProxy', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
          });

        return response;
    } 
    catch (error) {
        console.error('Authentication Error:', error);
        throw error; // Optionally re-throw the error
    }
}

export async function validateUser()
{
    
}