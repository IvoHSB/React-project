import { useEffect } from "react";
import { logout } from "../../services/authService";
import { useSelector } from "react-redux";

export const Logout = () => {

    const accessToken = useSelector((state) => state.user.accessToken);

    useEffect(() => {
        logout(accessToken)
    }, [])

}