import axios from 'axios';
import global from '../../config/env'

const logout = async (req,res) => {

    const authToken = req.cookies['auth-token'] || '';
    
    // Make the API request with the auth token in the headers
    if(authToken)
    {
        try {
            const apiResponse = await axios({
                method: 'GET',
                url: global.apiURL + 'api/logout',
                headers: {
                    'Authorization': `Bearer ${authToken}`,
                },
            });
            const cookieSerialized = serialize('auth-token', '', {
                httpOnly: true,
                expires: new Date(0), // Set the expiration date in the past
                path: '/',
                sameSite: 'Strict',
            });
    
            // Send the cookie as a response header to clear it
            res.setHeader('Set-Cookie', [cookieSerialized]);
            res.status(200).send(apiResponse.data);
        }
        catch(error)
        {
            if(error?.response?.status === 401)
            {
                res.status(200).send('Auth Token Not Available');
            }
            else {
                res.status(200).send(error);
            }
        }
    }
    else {
        res.status(200).send('Already Logged Out');
    }
};

export default logout;