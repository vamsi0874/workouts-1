import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useAuthContext = ()=>{
    const context = useContext(AuthContext);

    if(!context) {
        throw Error('Authcontext must be used inside AuthcontextProvider')
    }
    return context
}