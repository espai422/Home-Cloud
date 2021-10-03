const fs = require('fs')

const path2 = '/home/espai422/Escritorio/Projectes/Home-Cloud/Server';

// console.log(fs.readdirSync(path2));

fs.readdir(path2, (err, files) => {
    files.forEach(file => {
      if (fs.statSync(file).isDirectory()) {
      console.log(`DIR: ${file}`);
    } else {
      console.log(`FILE: ${file}`)
    }
    })}); 

// var fs = require('fs');
// var path = require('path');

// var walk = function(directoryName) {

//   fs.readdir(directoryName, function(e, files) {
//     files.forEach(function(file) {
//       fs.stat(directoryName + path.sep + file, function(e, f) {

//         if (f.isDirectory()) {
//           walk(directoryName + path.sep + file)
//         } else {
//           console.log(' - ' + file)
//         }
//       })
//     })
//   })
// }

// walk(path2)