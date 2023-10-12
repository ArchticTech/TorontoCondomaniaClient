import axios from 'axios';
import { serialize } from 'cookie';
import global from '../../config/env';

const Logout = async (req, res) => {

    const cookieSerialized = serialize('auth-token', '', {
        httpOnly: true,
        expires: new Date(0), // Set the expiration date in the past
        path: '/',
        sameSite: 'Strict', // Adjust sameSite attribute as needed
    });
    
    // Send the cookie as a response header to clear it
    res.setHeader('Set-Cookie', [cookieSerialized]);

    // Send a response to the client
    res.status(200).json({ message: 'Cookie cleared' });
};

export default Logout;
