import axios from 'axios';
import { parse } from 'cookie';
import global from '../../config/env'

const apiProxy = async (req, res) => {
    // Read the HTTP-only cookie
    const cookies = parse(req.headers.cookie || '');
    const authToken = '35|wlMsmvAAsOcFZwZ10u0NTHvJFta7OefA58f8eOz7'; // cookies['auth-token'];
    
    console.log('Auth Token', authToken);
    
    // Make the API request with the auth token in the headers
    const apiResponse = await axios({
        method: req.method,
        url: global.apiURL + 'api/getAllProperties', 
        headers: {
        'Authorization': `Bearer ${authToken}`,
        },
        data: req.body,
    });

    return apiResponse.data;
};

export default apiProxy;