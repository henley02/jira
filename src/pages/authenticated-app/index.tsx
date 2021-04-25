import ProjectList from "../projectList";
import {useAuth} from "../../context/auth_context";

const AuthenticatedApp = () => {
    const {logout} = useAuth();
    return <>
        <button onClick={logout}>登出</button>
        <ProjectList/>
    </>
}

export default AuthenticatedApp;
