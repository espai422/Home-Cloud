import { useParams } from "react-router-dom";
import { useState } from 'react'
import { Form, Button,InputGroup } from 'react-bootstrap';

const URL = process.env.REACT_APP_API_URL + '/upload/'

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

const InputFile = () => {
    const style = {marginTop:"10px"}
    const [Files, setFiles ] = useState('')
    let { path } = useParams()

    const onChange = e => setFiles(e.target.files);

    const submit = () => {
        // Get Files
        const data = new FormData();

        // append files in FormData
        for (let file of Files) data.append('files', file, replaceAll(file.name, '-', '_'));
        
        // Get url
        if (path === undefined) path = ''        
        const url = `${URL}${path}`

        // Get user header
        let sess = localStorage.getItem("Session");
        if (sess === null){
          sess = ''
        } else {
          var user = sess.replace('"','').replace('"','');
        }

        // Settings for fetch
        const settings = {
            headers:{user:user},
            method:'POST',
            body:data
        };

        // Send files
        fetch(url,settings).then(() => window.location.reload())
        
    }

    return(
      <>
    <InputGroup className="mb-3"size="lg" style={style}>
        <Form.Control type="file" multiple  onChange={onChange} />
        <Button variant="secondary" id="button-addon2" onClick={submit}>
      Upload
        </Button>
        </InputGroup>
      </>
    );
}

export default InputFile;
