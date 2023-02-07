import axios from "axios";
import {server} from "../store";


export const login = (email,password) => async(dispatch) =>{
    try{
        dispatch({type:"loginRequest"});
        const {data} = await axios.post(`http://localhost:4000/api/v2/login`, {email,password},{
            headers:{
                "Content-Type":"application/json" 
            },
            withCredentials:true
        })
        dispatch({type:"loginSuccess",payload:data })
        
    }catch(error){
        dispatch({type:"loginFail", payload:error.response.data.message})
    }
}