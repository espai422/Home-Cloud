import React from 'react';
import { useFetch } from "react-async"
import {Col} from 'react-bootstrap';
import { BsFillFolderFill, BsFileEarmarkFill, BsDashSquareFill,BsFillCloudArrowDownFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const baseUrl = process.env.REACT_APP_API_URL 
const url = baseUrl + '/content/';
const dowloadUrl = baseUrl + '/download/'
const rmUrl = baseUrl + '/upload/rm/';
const RowStyless = {marginTop: "10px"}


let sess = localStorage.getItem("Session");
if (sess === null){
  sess = ''
} else {
  var User = sess.replace('"','').replace('"','');
}

const isDir = element => {

  let splitedElement = element.split('.');
  if (splitedElement.length === 1){
    return true
  } else {
    return false
  }
}

const File = ({ text }) => {
  var separator = '-';
  let { path } = useParams()
  if (path === undefined) {
    path = '';
    separator = '';
  }
  const FileUrl = `${dowloadUrl}${User}/${path}${separator}${text}`
  const style = {"float": "right", marginLeft: "10px"}

  const onClickDown = () => {
    window.location.href = FileUrl
  }

  const onClickDel = () => {
    let URL = `${rmUrl}${path}${separator}${text}`
    fetch(URL,{headers:{user:User},method:'POST'})
    .then(res => window.location.reload())

  };

  return(
    <div class="card" style={RowStyless}>
    <div class="card-body">
        <h5> <BsFileEarmarkFill/>
          <a href={FileUrl}>{' '+text+' '}</a>
          <BsDashSquareFill style={style} onClick={onClickDel}/>
          <BsFillCloudArrowDownFill style={style} onClick={onClickDown}/>
          {/* <Desplegable/> */}
        </h5>
    </div>
  </div>
  );
}
const Dir = ({ text }) => {
  var separator = '-';
  let { path } = useParams()
  if (path === undefined) {
    path = '';
    separator = '';
  }
  const style = {"float": "right", marginLeft: "10px"}

  const onClickDel = () => {
    let URL = `${rmUrl}${path}${separator}${text}`
    fetch(URL,{headers:{user:User},method:'POST'})
    .then(res => window.location.reload())

  };

  let folderUrl = `/${path}${separator}${text}`
  return(
    <div class="card" style={RowStyless}>
    <div class="card-body">
      <h5 class="card-title">
        <BsFillFolderFill /><Link to={folderUrl}>{` ${text}`}</Link>
        <BsDashSquareFill style={style} onClick={onClickDel}/>
      </h5> 
    </div>
  </div>
  );
}

const Element = ({ element }) => {
  if (isDir(element) === true) {
    return (
      <Dir text={element}></Dir>
    );
  } else {
    return(
      <File text={element}></File>
    );
  };
}
// console.log(isDir('DIR'));
// console.log(isDir('file.png'));


const Content = ({ user, path }) => {
  if (path === undefined) {path = ''}
  const finalUrl = url + '/' +path
  var { data } = useFetch(finalUrl,{
  headers: {accept: "application/json",'user':user}
  });

  for (let key in data) {
    var Mylist = data[key]
  }
  console.log(Mylist);

  let jsxContent = []
  for (let value in Mylist) {
    jsxContent.push(<Col> <Element element={Mylist[value]} /> </Col>)
  }
  return (
  
    jsxContent
    );
}

export default Content;