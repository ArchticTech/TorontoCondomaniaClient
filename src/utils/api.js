import global from '../config/env';

export async function fetchAllProperties() 
{
    const response = await fetch(global.apiURL + 'api/getAllProperties');
    console.log(response);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const properties = await response.json();
    return properties;
}

export async function fetchProperty(id) 
{
    const response = await fetch(global.apiURL + 'api/getProperty/' + id);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const property = await response.json();
    
    return property;
}

export async function fetchAllAssignments() 
{
    const response = await fetch(global.apiURL + 'api/getAllAssignments');
    console.log(response);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const assignments = await response.json();
    return assignments;
}

export async function fetchAssignment(id) 
{
    const response = await fetch(global.apiURL + 'api/getAssignment/' + id);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const assignment = await response.json();
    
    return assignment;
}