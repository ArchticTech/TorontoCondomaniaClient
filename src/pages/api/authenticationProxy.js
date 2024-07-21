import axios from 'axios';
import { serialize } from 'cookie';
import global from '../../config/env';

const AuthenticationProxy = async (req, res) => {

    const { email, password } = req.body; 

    const apiResponse = await axios({
        method: 'GET',
        url: global.apiURL + 'api/authenticate/' + email + '/' + password,
    });
    
    const responseData = apiResponse.data;

    if (responseData.token) {
        const cookieSerialized = serialize('auth-token', responseData.token, {
        httpOnly: true,
        maxAge: 60 * 60 * 24, // Cookie expiration time (e.g., 24 hours)
        path: '/',
        sameSite: 'Strict', // Adjust sameSite attribute as needed
        });

        delete responseData.token;
        res.setHeader('Set-Cookie', [cookieSerialized]);
        res.status(200).json(responseData);
    }
    else {
        const cookieSerialized = serialize('auth-token', '', {
            httpOnly: true,
            expires: new Date(0), // Set the expiration date in the past
            path: '/',
            sameSite: 'Strict', // Adjust sameSite attribute as needed
        });
    
        // Send the cookie as a response header to clear it
        res.setHeader('Set-Cookie', [cookieSerialized]);

        res.status(401).json(responseData);
    }
};

export default AuthenticationProxy;
