let EmailRegx = /\S+@\S+\.\S+/;
let MobileRegx = /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/;


class FormHelper {

    IsEmpty(value) {
        return value.length === 0;
    }

    IsMobile(value){
        return MobileRegx.test(value);
    }

    IsEmail(value) {
        return !EmailRegx.test(value);
    }
    setToken(token){
        localStorage.setItem("token",token)
    }
    getToken(){
        return localStorage.getItem("token")
    }
    removeSessions=()=>{
        localStorage.clear();
        window.location.href="/"
    }
    removeSessionsOnly=()=>{
        localStorage.clear();
    }
    logOut() {
        localStorage.removeItem('token');
        window.location.href = '/'
      }
}

export const {
    IsEmpty,
    IsMobile,
    setToken,
    getToken,
    IsEmail,
    removeSessions,
    removeSessionsOnly,
    logOut
} = new FormHelper();