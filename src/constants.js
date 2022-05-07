import React from 'react';

//API URL
export const API_URL = 'https://ctrack-api.herokuapp.com';

//API End Points
export const REGISTER = `${API_URL}/register`;
export const LOGIN = `${API_URL}/loginUser`;
export const LOGS = `${API_URL}/logWithQR`;
export const GET_LOGS = `${API_URL}/getUserLogs`;
export const CHECKOUT = `${API_URL}/checkout`;
export const UPDATE_STATUS = `${API_URL}/userstatus`
export const UPDATE_PROFILE = `${API_URL}/user`;
export const UPLOAD_IMAGE = `${API_URL}/user/upload`;
export const FORGOT_PASSWORD = `${API_URL}/auth/recover`;