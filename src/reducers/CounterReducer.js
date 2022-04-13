let initialState={
    loginSucess: true ,
    SignupSucess:false,
    user:"none"
}


function CounterReducer(state=initialState, action) {
    switch(action.type){
        case "loginSuccess": 
        return{
            ...state,
            loginSuccess: true,
            user:action.payload.user
        };
        case "loginFail": 
        return{
            ...state,
            loginSuccess: false
        };
        case "SignupSucess":
            return{
                ...state,
                SignupSucess:true
            };
        case "SignupFail":
            return{
                ...state,
                SignupSucess:false
            };
    
        default: return state
    }

}



export default CounterReducer;