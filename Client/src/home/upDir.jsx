import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import  { BsFillArrowLeftSquareFill }  from "react-icons/bs";
/* eslint no-restricted-globals:0 */


const UpDir = () => {
    const LinkStyle = {color:"white"}
    const style = {marginTop: "10px"}

    let { path } = useParams()
    if (path === undefined) path = '';

    let arrayPath = path.split('-');
    if (arrayPath.length >= 1) arrayPath.pop();
    console.log(arrayPath.length, arrayPath)

    let newPath = arrayPath.join('-')
    console.log(newPath)
    return(
        <button type="button" class="btn btn-danger 
         btn-lg btn-block btn-lg" data-mdb-ripple-color="#000000"
        style={style} > <BsFillArrowLeftSquareFill/> <Link to={`/${newPath}`}
        style={LinkStyle}> Go to previous Directory
        </Link>
        </button>
    );
}

export default UpDir;

