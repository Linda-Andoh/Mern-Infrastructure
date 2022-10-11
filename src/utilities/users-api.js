import axios from "axios";
// This is the base path of the Express route we'll define
const BASE_URL = '/api/users';


export async function signUp(userData) {
    //This is how to do a post request using FETCH:
  // Fetch uses an options object as a second argument to make requests
  // other than basic GET requests, include data, headers, etc.
//   const response = await fetch(BASE_URL, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     // Fetch requires data payloads to be stringified
//     // and assigned to a body property on the options object
//     body: JSON.stringify(userData)
//   });

//This is the better way, Using AXIOS!

const response = await axios.post(BASE_URL, userData)
//This is equivalent to what is up on line 7 to 16.

  // Check if request was successful
  if (response.status === 200) {
    // res.json() will resolve to the JWT
    return response.data
  } else {
    throw new Error('Invalid Sign Up!');
  }
}