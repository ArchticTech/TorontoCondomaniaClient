import axios from 'axios';
import global from '../../config/env'

const apiProxy = async (req,res) => {
    // Read the HTTP-only cookie
    console.log('Auth Token', req.cookies);
    const authToken = req.cookies['auth-token'] || '';
    
    // Make the API request with the auth token in the headers
    const apiResponse = await axios({
        method: 'GET',
        url: global.apiURL + 'api/getAllProperties', 
        headers: {
            'Authorization': `Bearer ${authToken}`,
        },
    });

    res.status(200).send(apiResponse.data);
};

export default apiProxy;