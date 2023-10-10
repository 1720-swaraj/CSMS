import axios from 'axios'
import { createUrl, log } from '../utils/utils'

export async function registerUser(fname,lname,email,password,role,outlet_id) {
  const url = createUrl('/users/SignUp')
  const body = {fname,lname,email,password,role,outlet_id}

  // wait till axios is making the api call and getting response from server
  try {
    const response = await axios.post(url, body)
    log(response.data)
    return response.data
  } catch (ex) {
    log(ex)
    return null
  }
}

export async function loginUser(email, password) {
  const url = createUrl('/users/Login')
  console.log(url);
  const body = {email,password,}

  // wait till axios is making the api call and getting response from server
  try {
    const response = await axios.post(url, body)
    log("response", response)
    log("data", response.data)
    return response
  } catch (ex) {
    log(ex)
    return null
  }
}

export async function getManufac() {
  const url = createUrl('/manufacturer')
  console.log(url);

  // wait till axios is making the api call and getting response from server
  try {
    const response = await axios.get(url);
    console.log("response", response);
    console.log("data", response.data);
    return response;
  } catch (ex) {
    log(ex)
    return null
  }
  
}

export async function getModelById(selectedCar) {
  const url = createUrl(`/model/${selectedCar}`)
  console.log(url);
  // wait till axios is making the api call and getting response from server
  try {
    const response = await axios.get(url);
    console.log("response", response);
    console.log("data", response.data);
    return response;
  } catch (ex) {
    log(ex)
    return null
  }
  
}

export async function getOutlets() {
  const url = createUrl('/outlet')
  console.log(url);

  // wait till axios is making the api call and getting response from server
  try {
    const response = await axios.get(url);
    console.log("response", response);
    console.log("data", response.data);
    return response;
  } catch (ex) {
    log(ex)
    return null
  }
  
}

export async function getServices() {
  const url = createUrl('/services  ')
  console.log(url);

  // wait till axios is making the api call and getting response from server
  try {
    const response = await axios.get(url);
    console.log("response", response);
    console.log("data", response.data);
    return response;
  } catch (ex) {
    log(ex)
    return null
  }
  
}
