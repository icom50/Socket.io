import { Button, Input } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import '../../css/Login.css'
import { Link } from 'react-router-dom';

const Login: React.FC = () => {

    return (
        <div className="container">
            <div className="center">
                <div className='inputDiv' >

                    <h3>Connection</h3>

                    <span >
                        <Input className='inputSpan' placeholder="Login" />
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
                        <Button type="primary">
                            Connect
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Login;