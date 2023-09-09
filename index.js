// //inquirer npm package used for getting user input.
// //qr-image npm package used for turning entered URL into a QR code image.
// //native fs node module used to write the link to URL.txt file

// import inquirer from "inquirer";
// import qr from "qr-image";
// import fs from "fs";

// inquirer
//   .prompt([
//     /* Pass your questions in here */
//     {
//       message: "Enter the URL you want to create QR of:",
//       name: "url",
//     }
//   ])
//   .then((answers) => {

//     var qr_img = qr.image(answers.url);
//     qr_img.pipe(fs.createWriteStream('qr-image.png'));
//     fs.writeFile("URL.txt", answers.url, (err) => {
//         if(err){
//             console.log(err);
//         }
//     } )

//   })
//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   });

