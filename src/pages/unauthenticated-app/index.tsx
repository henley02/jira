import {useState} from 'react';
import Register from "./Register";
import Login from "./Login";

const UnauthenticatedApp = () => {
    const [isRegister, setIsRegister] = useState<boolean>(false);
    return <>
        {isRegister ? <Register/> : <Login/>}
        <button onClick={() => setIsRegister(!isRegister)}>切换到{isRegister ? '登录' : '注册'}</button>
    </>
}

export default UnauthenticatedApp;
