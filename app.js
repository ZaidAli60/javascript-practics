

//  For Loop

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }
// for (var a = 1; a <=10; a++  ) {
//     document.write(a + "<br>");
// }

// for (var i = 1; i <= 10; i++ ){
//     document.write("3" + "x" + i + "=" + 3*i + "<br>" );
// }


// var names = ["zaid ","Ali","Zain"];

// for (var i = 0; i <= names.length; i++){
//     console.log(names[i]);
// }


// var cites = ["Faisalabad","Lahore","Ialamabad","Karachi"]; 
//   for (var i = 0; i <= cites.length; i++){
//         if (cites[i] === "Faisalabad" ) {
//             alert(cites[i] + " " + "is a city")
//         } 
//   }


// for (var i = 1; i >=0; i++ ){
//     if (i === 10) {
//         break
//     }

//     console.log("Hello World");
// }


// for (var i = 0; i <  5; i++ ){
//     for (var j = 0; j < 3; j++){
//         document.write(j + "pakistan" + "<br>")
//     }
// }

// var firstName = ["Zaid Ali","Zain Ali","Zaid Ali"]
// var lastName = ["Riaz-ul-Haq"]

// for (i = 0; i < firstName.length; i++){
//     for (j = 0; j < lastName.length; j++){
//         console.log(firstName[i] + " " + lastName);
//     }
// }

for (var i = 0; i < 10; i++){
    for (var j = 0; j < i; j++){
        document.write("*")
    }
    for (var j = 0; j < i; j++){
        document.write("*")
    }
    document.write("<br>")
}
