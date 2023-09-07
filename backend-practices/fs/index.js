const fs = require("fs");
const path = require('path');

// fs.writeFile('mynewfile2.txt', 'yooooooo', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });

//COPYFILE API
// fs.copyFile('mynewfile1.txt', 'mynewfile2.txt', function callback(err) {
//     if (err) throw err;
//     console.log('success');
//   }
// );

//READ AND WRITE DATA
// fs.readFile('mynewfile1.txt', (err, data) => {
//   if (err) throw err;

//   fs.writeFile('mynewfile2.txt', data, (err) => {
//     if (err) throw err;
//     console.log("saved2")
//   })
// })

//PIPE STREAM
// const readableStream = fs.createReadStream('mynewfile1.txt');
// const writableStream = fs.createWriteStream('mynewfile2.txt');
// readableStream.pipe(writableStream);

// writableStream.on('finish', () => {
//   console.log(`copied`);
// });

// readableStream.on('error', (err) => {
//   console.error(`Error reading source file: ${err.message}`);
// });

// writableStream.on('error', (err) => {
//   console.error(`Error writing to destination file: ${err.message}`);
// });



const folderPath = './serial-files';

// for(let i = 0; i<11; i++) {
//   fs.writeFile(`./serial-files/newfile${i}.txt`, "newwwwwww", function (err) {
//       if (err) throw err;
//       console.log('Saved!');
//     })
//   // fs.unlink(`newfile${i}.txt`, function (err) {
//   //       if (err) throw err;
//   //       console.log('Saved!');
//   //     })
// }

fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error(`Error reading folder: ${err.message}`);
    return;
  }

  files.forEach((fileName, index) => {
    
    const oldFilePath = path.join(folderPath, fileName);

    let newFileName;
    index < 9 ? newFileName = `0${index + 1}.` + fileName : newFileName = `${index + 1}` + fileName;
    const newFilePath = path.join(folderPath, newFileName);


    // Rename the file
    fs.rename(oldFilePath, newFilePath, (renameErr) => {
      if (renameErr) {
        console.error(`Error renaming file ${fileName}: ${renameErr.message}`);
      } else {
        console.log(`Renamed ${fileName} to ${newFileName}`);
      }
    });
  });
});