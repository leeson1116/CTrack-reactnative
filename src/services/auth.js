

import axios from 'axios';

import * as c from '../constants';

export async function register(data) {
    try {
        let res = await axios.post(c.REGISTER, data);

        return res.data;
    } catch (e) {
        throw handler(e)
    }
}

export async function login(data) {
    try {

        let res = await axios.post(c.LOGIN, data);

        return res.data;
    } catch (e) {
        throw handler(e);
    }
}
export async function updateStatus(data) {
    try {
        let rep = {
            "status": data
        }
        console.log(rep)
        let res = await axios.post(c.UPDATE_STATUS, rep);

        return res.data

    } catch (err) {

    }
}

export async function forgotPassword(data) {
    try {
        let res = await axios.post(c.FORGOT_PASSWORD, data);

        return res.data;
    } catch (e) {
        throw handler(e);
    }
}

export async function checkin(data) {
    try {

        let res = await axios.post(c.LOGS + "/" + data);

        return res.data;
    } catch (e) {
        throw handler(e);
    }
}

export async function getUserLogs() {
    try {
        let res = await axios.get(c.GET_LOGS);
        return res.data
    } catch (error) {
        throw handler(error)
    }
}

export async function checkout(data) {
    try {
        let res = await axios.post(c.CHECKOUT, data)
        return res.data
    } catch (error) {
        throw handler(error)
    }
}

export async function getConfirmCase() {
    try {
        let res = await axios.get("https://services-eu1.arcgis.com/z6bHNio59iTqqSUY/arcgis/rest/services/LaboratoryLocalTimeSeriesHistoricView/FeatureServer/0/query?where=1%3D1&outFields=Positive&returnGeometry=false&outSR=4326&f=json")
        return res.data
    } catch (error) {
        throw handler(error)
    }
}

export async function updateProfile(userId, data) {
    try {
        const options = {
            headers: {
                Accept: "application/json",
                "Content-Type": "multipart/form-data"
            }
        };

        const form_data = new FormData();
        for (let key in data)
            form_data.append(key, data[key]);

        let res = await axios.put(`${c.UPDATE_PROFILE}/${userId}`, form_data, options);
        return res.data;
    } catch (e) {
        throw handler(e);
    }
}


export function handler(err) {
    let error = err;

    if (err.response && err.response.data.hasOwnProperty("message"))
        error = err.response.data;
    else if (!err.hasOwnProperty("message")) error = err.toJSON();

    return new Error(error.message);
}