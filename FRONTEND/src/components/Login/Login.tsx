import { Button, Input } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import '../../css/Login.css'
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AppContext, IAppActionType } from '../../contexts/appContext';
import { IUser } from '../../models/IUsers';

const Login: React.FC = () => {

    const [login, setLogin] = useState<string>('');
    const { state, dispatch } = useContext(AppContext)

    return (
        <div className="container">
            <div className="center">
                <div className='inputDiv' >

                    <h3>Connection</h3>

                    <span >
                        <Input className='inputSpan' placeholder="Login" onChange={(e) => setLogin(e.target.value)} />
                    </span>

                    <span >
                        <Input.Password
                            className='inputSpan'
                            width={'200px'}
                            placeholder="Password"
                            iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        />
                    </span>

                    <Link to="/dashboard">
                        <Button type="primary"
                            onClick={() => {
                                const User: IUser | undefined = state.Users.find((user: IUser) => user.Email === login);
                                if (User) dispatch({ type: IAppActionType.SetCurrentUser, User: User })
                            }}
                        >
                            Connect
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Login;