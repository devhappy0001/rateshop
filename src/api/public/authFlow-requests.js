// import axios from "axios";

export class AuthFlowRequest {

    sendLoginData = async (loginData) => {

        try {

            const response =  new Promise((resolve,reject) => {

                    if(loginData.email == 'happy@gmsail.com') {
                        
                        resolve({

                             email : loginData.email,
                             accessToken : '2639872373770923230'
                        })

                    }
                    else
                    {
                         reject({email:'error while logged In'})
                    }
             }) 
             
             return response;
        }
        catch(error) {

            throw new Error(error);
        }
    }
}

const instance = new AuthFlowRequest();

export default instance;