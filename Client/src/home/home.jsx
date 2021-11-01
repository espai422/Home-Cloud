import Content from './ls.jsx';
import { useParams } from "react-router-dom";
import {Container, Row,Col} from 'react-bootstrap';
import UpDir from './upDir.jsx'
import MkDir from './mkdir.jsx';
import Upload from './uploadForm.jsx';
import NoSession from './noSession.jsx';

console.log('------------------------------------------------------------')

const Home = () => {
  let { path } = useParams()
  let sess = localStorage.getItem("Session");
  console.log('This is the session', sess)
  if (sess === null){
    return(<NoSession/>)
  } else {
    var Sess = sess.replace('"','').replace('"','');
  }

  return (
  <div>
    <Container fluid="md">
    <h1> Home Page {path}</h1>
        <Row xs={1} md={3}>
          <Content user={Sess} path={path}/>
        </Row>
        <Row xs={1} md={3}>
            <Col> <UpDir/> </Col>
            <Col> <MkDir/></Col>
            <Col> <Upload/></Col>
        </Row>
    </Container>
    
  </div>
 
  );
};

export default Home;