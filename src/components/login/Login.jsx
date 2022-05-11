
import { useDispatch, useSelector } from "react-redux"
import { Form, Input, Button, Checkbox } from 'antd';

import { loginFn } from "../../redux/login/loginAction";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const Login = () => {
    const tok = useSelector((store) => store.token.tok)
    const dispatch = useDispatch()
    const navigate = useNavigate()
   
        const onFinish = (values) => {
            console.log('Success:', values);
            // axios.post("https://masai-api-mocker.herokuapp.com/auth/login", values).then((res)=>{console.log(res)})
            dispatch(loginFn(values))
        };
      
        // const onFinishFailed = (errorInfo) => {
        //     console.log('Failed:', errorInfo);
        // };
    useEffect(() => {
        if (tok !== null) {
            navigate("/dashboard")
        }
    },[tok])
   
        return <>
        
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                // onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

              
                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
       
        </>
    }