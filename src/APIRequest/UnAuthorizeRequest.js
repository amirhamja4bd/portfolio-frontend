import { removeSessions } from "../helper/FormHHelper";

export  function UnAuthorizeRequest(error){
    if (error.response.status === 401) {
        removeSessions()
    }
}