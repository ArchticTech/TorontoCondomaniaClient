import global from '../config/env';

export async function fetchAllProperties() 
{
    const response = await fetch(global.apiURL + 'api/getAllProperties');
    if (!response.ok) {
        // throw new Error('Network response was not ok');
    }
    const properties = await response.json();
    return properties;
}