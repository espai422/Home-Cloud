import {Container, Card} from 'react-bootstrap'; 
import { Link } from "react-router-dom";

export default function noSession(){

  return(
    <Container>
      <Card>
        <Card.Body>
            <h1>Welcome To Home Cloud !</h1>
            <h3>You are not loged in</h3>
            <h4><Link to="/login">Login</Link></h4>
            <h4><Link to="/register">Register</Link></h4>
        </Card.Body>
      </Card>
    </Container>
    )
}