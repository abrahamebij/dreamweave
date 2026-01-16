import { SessionOptions } from 'iron-session';

// 1. Define the shape of your session data
export interface SessionData extends SessionOptions {
  isLoggedIn?: boolean;
  userId?: string;
}

// 2. Define your session options
export const sessionOptions = {
  cookieName: 'aegis-session', // Name of your cookie
  cookieOptions: {
    // secure: process.env.NODE_ENV === 'production', // Use this in production (HTTPS)
    secure: false, // Use this for local development (HTTP)
  },
};