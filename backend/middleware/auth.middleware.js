//Header - 
//Authorization: Bearer <actual token>

// Import necessary modules
import path from 'path';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { fileURLToPath } from 'url';

// Convert import.meta.url to a path and get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables from the .env file
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

// Extract the JWT secret key from environment variables
const jwtKey = process.env.JWT_KEY;

const authMiddleware = async (req, res, next) => {
    // Get the authorization header from the request
    const header = req.headers.authorization;

    // Check if the authorization header is present and starts with 'Bearer '
    if (!header || !header.startsWith('Bearer ')) {
        return res.status(403).json({ message: 'Forbidden: No token provided' });
    }

    // Extract the token from the authorization header
    const token = header.split(' ')[1];

    try {
        // Verify the token using the JWT secret key
        const decoded = await jwt.verify(token, jwtKey);

        // Attach the decoded userId to the request object
        req.userId = decoded.userId;

        // Proceed to the next middleware or route handler
        next();
    } catch (err) {
        // Handle errors (e.g., invalid token, expired token)
        return res.status(403).json({ message: 'Forbidden: Invalid token' });
    }
};

// Export the middleware for use in other parts of the application
export { authMiddleware };
