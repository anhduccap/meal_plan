
export const Types={
  changeFormField:"changeFormField",
  checkEmail:"checkEmail",
  checkPassword:"checkPassword",
  checkConfirm:"checkConfirm",
  loginRequest:"loginRequest",
  loginSuccess:"loginSuccess",
  loginFail:"loginFail",
  getUser:"getUser",
  getUserSuccess:"getUserSuccess",
  getUserFail:"getUserFail",
  registerRequest:"registerRequest",
  registerSuccess:"registerSuccess",
  registerFail:"registerFail",
  resetForm:"resetForm",
}

const changeFormField=(key,value)=>{
    return{
        type:Types.changeFormField,
        key,
        value
    }
}

const checkEmail =(error)=>{
    return{
        type:Types.checkEmail,
        error
    }
}
const checkPassword=(error)=>{
    return{
        type:Types.checkPassword,
        error
    }
}
const checkConfirm=(error)=>{
    return{
        type:Types.checkConfirm,
        error
    }
}
const login=(email,password)=>{
   return{
       type:Types.loginRequest,
       email,
       password
   }
} 

const register=(email,password,username)=>{
    return{
        type:Types.registerRequest,
        email,
        password,
        username
    }
 } 


export default{
    changeFormField,
    checkEmail,
    checkPassword,
    checkConfirm,
    login,
    register,
}