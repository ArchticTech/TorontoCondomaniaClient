import axios from 'axios';
import { parse } from 'cookie';
import global from '../../config/env'

const apiProxy = async (req, res) => {
    // Read the HTTP-only cookie
    const cookies = parse(req.headers.cookie || '');
    const authToken = cookies['auth-token']; // Adjust the cookie name as needed
    console.log('Huzaifa', cookies);
    
    // Make the API request with the auth token in the headers
    const apiResponse = await axios({
        method: req.method,
        url: global.apiURL + req.url,
        headers: {
        'Authorization': `Bearer ${authToken}`,
        },
        data: req.body,
    });

    return apiResponse.data;
};

export default apiProxy;