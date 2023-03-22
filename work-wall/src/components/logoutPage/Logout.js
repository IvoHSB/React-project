import { useEffect } from "react";
import { logout } from "../../services/authService";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onLogout } from "../../store/user/user";

export const Logout = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const accessToken = useSelector((state) => state.user.accessToken);

    useEffect(() => {
        logout(accessToken);
        dispatch(onLogout());
        navigate('/');
    }, [])

}