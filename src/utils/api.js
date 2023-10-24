import global from '../config/env';
import axios from 'axios';

/*************************************************************/
/***** API Requests that does not require Authentication *****/
/*************************************************************/

export async function fetchAllProperties() {
    const response = await fetch(global.apiURL + 'api/getAllProperties/');
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

export async function fetchAssignment(slug) {
    const response = await fetch(global.apiURL + 'api/getAssignment/' + slug);
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

export async function sendConsultationRequest(consultationData)
{
    try {
        const response = await axios({
            method: 'POST',
            url: global.apiURL + 'api/sendConsultationRequest',
            data: consultationData
        });
        return response;
    }
    catch (error) {
        console.error('Error', error);
    }
}


/****************************************************/
/***** API Requests that require Authentication *****/
/****************************************************/

export async function fetchAllFavoriteProperties() {
    try {
        const response = await axios.get('/api/apiProxy', {
            params: {
                method: 'GET',
                url: 'api/getAllFavorites'
            },
        });
        
        return response.data;
    }
    catch (error) {
        console.log(error)
        return error;
    }
}
export async function storeFavoriteProperty(propertyID) {
    try {
        const response = await axios.get('/api/apiProxy', {
            params: {
                method: 'GET',
                url: 'api/storeFavorite/' + propertyID
            },
        });
        
        return response.data;
    }
    catch (error) {
        console.log(error)
        return error;
    }
}
export async function deleteFavoriteProperty(propertyID) {
    try {
        const response = await axios.get('/api/apiProxy', {
            params: {
                method: 'GET',
                url: 'api/deleteFavorite/' + propertyID
            },
        });
        
        return response.data;
    }
    catch (error) {
        console.log(error)
        return error;
    }
}

export async function authenticateUser(userData)
{
    const email = userData['email'];
    const password = userData['password'];
    
    const response = await fetch('/api/authenticationProxy', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
        });
    const authResponse = await response.json();
    return authResponse;
}