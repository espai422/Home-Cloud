import { useParams } from "react-router-dom";
import { InputGroup,  FormControl, Button} from 'react-bootstrap';
import { useState } from 'react'

const URL = process.env.REACT_APP_API_URL + '/upload/mkdir'

const MkDir = () => {
    
    const style = {marginTop: "10px"}
    const [ dirName, setDirname ] = useState('');
    let { path } = useParams()

    const handleInput = event => setDirname(event.target.value)

    const Submit = () => {
        let separator
        if (path === undefined) {
            path = '';
            separator = '';
        } else {
            separator = '-'
        };

        let sess = localStorage.getItem("Session");
        if (sess === null){
          sess = ''
        } else {
          var user = sess.replace('"','').replace('"','');
        }

        let url = `${URL}/${path}${separator}${dirName}`;

        fetch(url,{headers:{user:user},method:'POST'})
        .then(() => window.location.reload())
    }


    return(
    <InputGroup className="mb-3"size="lg" style={style}>
    <FormControl onChange={handleInput}
      placeholder="New Directory"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <Button variant="success" id="button-addon2" onClick={Submit}>
      Mkdir
    </Button>
  </InputGroup>
    );
}

export default MkDir;

