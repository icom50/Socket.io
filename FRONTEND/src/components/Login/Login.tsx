import { Col, Input, Row, Space } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import '../../css/Login.css'

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
                            width={'200px'}
                            placeholder="Password"
                            iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        />
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Login;