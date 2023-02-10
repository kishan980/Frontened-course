import axios from "axios";
import {server} from "../store";


export const login = (email,password) => async(dispatch) =>{
    try{
        dispatch({type:"loginRequest"});
        const {data} = await axios.post(`${server}/login`, {email,password},{
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


export const myProfile = ()=>async(dispatch) =>{
    try{
        dispatch({type:"loadUserRequest"})
        const {data} = await axios.get(`${server}/me`,{
            headers:{
                "Content-Type":"application/json"
            },
            withCredentials:true
        })
        dispatch({type:"loadUserSuccess", payload:data.user})
    }catch(error){
        dispatch({type:"loadUserFail", payload:error.response.data.message})
    }
}


export const logout = () =>async(dispatch)=>{
    try{
        dispatch({type:"logoutRequest"})
        const {data}= await axios.post(`${server}/logout`, {
            headers:{
                "Content-Type":"application/json"
            },
            withCredentials:true
        })
        console.log(data)
        dispatch({type:"logoutSuccess", payload:data.message})
    }catch(error){
        dispatch({type:"logoutFail", payload:error.response.data.message})
    }
}