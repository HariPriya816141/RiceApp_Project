import { apiClient, mockAuth } from "./config";


// function to handle login api
export const loginUser = async(email, password)=>{
  try{
    let res = await apiClient.get('/users', {
        params:{email}
    })
    //checking the user
    console.log(res);
    //checking if already the user exists in the database
    let user = res.data.find(u => u.email == email && u.password == password)

    // if user doesn't exist, throw an error
    if(!user){
        throw new Error ("Email and password not found")
    }

    //generate the token
    let token = mockAuth.generateToken(user);

    // sav eth etoken and user to local storage
    localStorage.setItem('token', token)
     localStorage.setItem('user',JSON.stringify(user))


    return { user, token }
  }catch(error){
    return error;

  }
}

// function to handle register api
export const registerUser = async(newUser) => {

  try {
    // checking already if the user exists in the db or not
  let res = await apiClient.get('/users', {
    params:{email:newUser.email}
  })

  if(res.data.length > 0){
    throw new Error("User already exists.")
  }

  let saveUser = await apiClient.post('/users', newUser)
  console.log(saveUser)

  //generate a token
  let token = mockAuth.generateToken(saveUser.data)

  // save the token and user to localstorage
  localStorage.setItem('token', token)
  localStorage.setItem('user', JSON.stringify(saveUser.data))

  return {user: saveUser.data, token}
}
  catch (error) {
    return error
  }

}



// function to handle logout api
export const logoutUser = () => {
  localStorage.removeItem("token")
  localStorage.removeItem("user")
}