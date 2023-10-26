import axios from 'axios';
import global from '../../config/env'

const apiProxy = async (req,res) => {
    
    const { query, body } = req;
    const { method, url } = query;

    const authToken = req.cookies['auth-token'] || '';
    
    try {
        const config = {
            method: method,
            url: global.apiURL + url,
            headers: {
              'Authorization': `Bearer ${authToken}`,
            },
          };
      
          if (body) {
            config.data = body;
          }
          const apiResponse = await axios(config);
    
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