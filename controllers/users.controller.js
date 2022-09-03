/**
 * Controller of user 
 *@author Jorge Villalba 
*/

// Imports by use in the controller
const fetch = (...args) =>
	import('node-fetch').then(({default: fetch}) => fetch(...args));
require('dotenv').config();


/**
 * Function by show the users in the API
 * @param {*} req Request
 * @param {*} res Response
 * @param {*} next Next
 */
const showUsers = async (req, res, next) => {

    const response = await fetch("https://gorest.co.in/public/v2/users")
    const data = await response.json();
    res.json(data);
}


/**
 * Function to enumerate the pages
 */
const enumerateUsers = async (req, res, next) =>{
    
}

/**
 * Function to add a user in the foreing API
 * @param {*} req Request
 * @param {*} res Response
 * @param {*} next Next
 */
const addUser = async (req, res, next) => {

    //Save the body content of the post
    const req_body = req.body;

    try {

        //URL of the API
        const url = "https://gorest.co.in/public/v2/users"

        //Text of the authorization 
        const authText= `Bearer ${process.env.ACCESS_TOKEN}`

        //Do the request to the gorest API
        const response = await fetch("https://gorest.co.in/public/v2/users",
            {
                method: "POST",
                mode: "cors",
                headers:{
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": "Bearer a7a4363c580d99c309218ed380506fa62c67fd6dfc274f1981c5f97e109734e7"
                },
                body:JSON.stringify(req_body)
            });

        //Save the response of the gorest API
        const data = await response.json();

        console.log(req_body);

        res.status(response.status).send(data);

    } catch (error) {
        //Launch a error if there any error in the execution 
        res.status(500).json({
            message: error.message,
            stack: error.stack
        })
    }
}


module.exports = { showUsers, addUser }