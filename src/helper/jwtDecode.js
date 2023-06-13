import jwt_decode from 'jwt-decode';
import { logOut } from './FormHHelper';
export const jwtDecode = (token) =>{
    try {
        if (token) {
            const decodedToken = jwt_decode(token);
            const expTime = new Date(decodedToken.exp*1000);
            if(new Date() > expTime){
                logOut()
            }
            return decodedToken;
        }
    } catch (error) {
        logOut()
    }

}