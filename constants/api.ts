import dotenv from 'dotenv';
dotenv.config();

export const API_URL = process.env.API_URL;
export const NEWS_URL = `${API_URL}/news`;