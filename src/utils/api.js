
export async function fetchAllProperties() 
{
    const response = await fetch('http://localhost:8000/api/getAllProperties');
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const properties = await response.json();
    return properties;
}