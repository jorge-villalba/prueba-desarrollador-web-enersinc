/**
 * Controller of user 
 *@author Jorge Villalba 
*/

// Imports by use in the controller
// const fetch = (...args) =>
// 	import('node-fetch').then(({default: fetch}) => fetch(...args));
const axios = require("axios");
require('dotenv').config();


/**
 * Function by show the users in the API
 * @param {*} req Request
 * @param {*} res Response
 * @param {*} next Next
 */
const showAllUsers = async (req, res, next) => {

    //reques of the API by show the users
    const response = await axios({
        method: "GET",
        url: "https://gorest.co.in/public/v2/users",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${process.env.ACCESS_TOKEN}`
        }
    });

    //Obtains the data of the response, because this is a promise
    const data = await response.data;

    //Response of the current server
    res.send(data);
}


/**
 * Bring the user through the ID
 * @param {*} req request
 * @param {*} res response
 * @param {*} next next param
 */
const showUserById = async (req, res, next) => {

    //Get params contained in the url
    const { userId } = req.params

    //URL link by do the request to the API
    const urlAPI = "https://gorest.co.in/public/v2/users";

    try {

        //Request to the API using axios
        const response = await axios.get(`${urlAPI}/${userId}`, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${process.env.ACCESS_TOKEN}`
            }
        });

        //Response of the server
        res.status(response.status).send(response.data)

    } catch (error) {
        //Launch a error if there any error in the execution 
        res.status(error.response.status).json(error.response.data)
    }
}


/**
 * Function to enumerate the pages
 */
const enumerateUsers = async (req, res, next) => {

}


/**
 * Function to add a user in the foreing API
 * @param {*} req Request
 * @param {*} res Response
 * @param {*} next Next
 */
const addUser = async (req, res, next) => {

    //Save the body content of the post
    const reqBody = req.body;

    try {

        //URL of the API
        const urlAPI = "https://gorest.co.in/public/v2/users"

        //Text of the authorization 
        const authText = `Bearer ${process.env.ACCESS_TOKEN}`

        //Headers with the token bearer
        const headers = {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": authText
        }

        //Data of the body
        const data = {
            name: reqBody.name,
            email: reqBody.email,
            gender: reqBody.gender,
            status: reqBody.status
        }

        //Do the request to the gorest API
        const response = await axios.post(urlAPI, data, { headers: headers });

        //Response of the server
        res.status(response.status).send(response.data);

    } catch (error) {
        //Launch a error if there any error in the execution 
        res.status(error.response.status).json(error.response.data)
    }
}


/**
 * Edit user with the id
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const editUser = async (req, res, next) => {

    //Save the body content of the POST request
    const reqBody = req.body;
    //Params of the POST request
    let userId = req.params;
    //Get the value os the userId given for the request url
    userId = Object.values(userId);

    try {

        //URL of the API adding the value of the id
        const urlAPI = `https://gorest.co.in/public/v2/users/${userId}`

        //Text of the authorization 
        const authText = `Bearer ${process.env.ACCESS_TOKEN}`

        //Headers with the token bearer
        const headers = {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": authText
        }

        //Data of the body obtained of the POST request
        const data = {
            name: reqBody.name,
            email: reqBody.email,
            gender: reqBody.gender,
            status: reqBody.status
        }

        //Do the request to the gorest API with axios
        const response = await axios.put(urlAPI, data, { headers: headers });

        //Response of the server
        res.status(response.status).send(response.data);

    } catch (error) {

        //Error handler
        //Launch a error if there any error in the execution 
        res.status(error.response.status).json(error.response.data)
    }
}


/**
 * Function by delete user by Id
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const deleteUser = async (req, res, next) => {

    //Obtain the id of the request url
    const userId = parseInt(req.params.userId);

    //URL link by do the request to the API
    const urlAPI = `https://gorest.co.in/public/v2/users/${userId}`;

    try {

        //Request to the API using axios
        const response = await axios.delete(urlAPI, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Bearer ${process.env.ACCESS_TOKEN}`
            }
        });

        //Response of the server
        res.status(response.status).send(response.data)

    } catch (error) {
        //Launch a error if there any error in the execution 
        res.status(error.response.status).json(error.response.data)
    }
}


module.exports = { showAllUsers, showUserById, addUser, editUser, deleteUser }