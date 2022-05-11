import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../redux/register/action';
import { postData } from '../redux/register/action';
import { Form, Input, InputNumber, Button } from 'antd';
import { useEffect, useState } from 'react';
const { TextArea } = Input;
import "./register.css"
import { useNavigate } from 'react-router-dom';
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
/* eslint-enable no-template-curly-in-string */

export const Register = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
    const [data, setData]= useState([])
  const error = useSelector((store) => store.reg.error)
  useEffect(() => {
    
    if (error === false) {
      navigate("/login")
    }
  },[error])
    const onFinish = () => {
      dispatch(postData(data))
      // navigate("/login")
      
    };
  // console.log("redux store state", user)
    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value})
        
    }
    
    return <div className='main' style={{"textAlign": "center"}}>
        <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
      <Form.Item
      
        label="name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input   name="name" onChange={handleChange} />
      </Form.Item>
      <Form.Item
      
       label="email"
        rules={[
          {
            type: 'email',
          },
        ]}
      >
        <Input name="email" onChange={handleChange}/>
     
      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password name="password" onChange={handleChange} />
      </Form.Item>
      </Form.Item>
      <Form.Item label="username">
        <Input  name="username" onChange={handleChange}/>
      </Form.Item>
      <Form.Item
        
        label="mobile"
        rules={[{ required: true, message: 'Please input your phone number!' }]}
      >
        <Input  style={{ width: '100%' }} name="mobile" onChange={handleChange} />
            </Form.Item>
            <Form.Item label="description">
        <Input name="description" onChange={handleChange} />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </div>
}