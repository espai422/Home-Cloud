import { Button, Container, Form, Alert } from 'react-bootstrap';
import { useState } from 'react';
import { Link } from "react-router-dom";


const url = process.env.REACT_APP_API_URL + '/auth/login';

const Input = ({ SetState, placeholder, type, }) => {

  const handleInput = event => SetState(event.target.value)
  return(
    <Form.Control onChange={handleInput} type={type} placeholder={placeholder}/>
  );
}



const LoginForm = () => {
    
  const [UserName, setUserName] = useState('');
  const [Password, setPassword] = useState('');
  const [Error, setError] = useState(false);

  const style = {"marginTop": "20px"}

  const sendForm = () => {
    let credentials = {username: UserName, password: Password};
    const JsonToSend = JSON.stringify(credentials);
  
    console.log(credentials);

    fetch(url,{
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JsonToSend
    }).then(response => response.text()).then(txt => {
      console.log(txt);
      if (txt === 'Unauthorized' || txt === '452'){
        setError(true)
      } else {
        setError(false)
        localStorage.setItem("Session", txt);
        console.log('Storaged');
        window.location.href = '/';
      }
    });
  }

  return (
    <>
    <Form.Label style={style}>Username</Form.Label>
    <Input type="text" placeholder="Enter your Username" SetState={setUserName} />

    <Form.Label style={style}>Password</Form.Label >
    <Input type="password" placeholder="Secure Password" SetState={setPassword} />

    <Button variant="primary" style={style} onClick={sendForm}> Login </Button>
    {(Error === true) ? <Alert variant="danger">Incorrect Credentials</Alert> : <></>}
  </>
  );
};


const Header = () => {
  const style = {"marginTop": "20px"}
  return(
    <div style={style} >
    <h1>Home-Cloud</h1>
    <h4>Like The "Cloud" But at Home </h4>
    <hr></hr>
    <h2>Login</h2>
  </div>
  );
};

const Login = () =>{
  let style = {"border":"1px solid #ccc", "borderRadius":"10px",
  "marginTop":"10px", "paddingBottom":"10px"};
  let style2 = {"marginLeft": "20px"}

  return(
    <Container style={style}>
      <Header/>
      <LoginForm></LoginForm>
      <Link to="/register" style={style2}>REGISTER</Link>
    </Container>
  );
}

export default Login;
