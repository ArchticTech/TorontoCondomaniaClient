import axios from 'axios';
import global from '../../config/env'

const apiProxy = async (req,res) => {
    
    const { query } = req;
    const { method, url } = query;

    const authToken = req.cookies['auth-token'] || '';
    console.log('Auth Token', authToken);
    
    // Make the API request with the auth token in the headers
    try {
        const apiResponse = await axios({
            method: method,
            url: global.apiURL + url,
            headers: {
                'Authorization': `Bearer ${authToken}`,
            },
        });
    
        res.status(200).send(apiResponse.data);
    }
    catch(error)
    {
        if(error.response.status === 401)
        {
            res.status(200).send({'error': 'Unauthenticated'});
        }
        else {
            res.status(error.response.status).send({'error': error.message});
        }
    }
};

export default apiProxy;