let username = prompt("Nhap ten")
if (username == "Admin"){
    let pass = prompt("Nhap pass")
    if (pass == "TheMaster"){
        alert("welcome")
    }
    else if (pass == null){
        alert ("Canceled")
    }
    else {alert("wrong password")}
}
else if (username == null){
    alert("Canceled")
}
else {alert("I don't know you")}





























// let username = prompt("Nhập tên của bạn:");

// if (username == "Admin") {
//   let password = prompt("Nhập mật khẩu:");

//   if (password == "TheMaster") {
//     alert("Welcome");
//   } else if (password == null) {
//     alert("Canceled");
//   } else {
//     alert("Wrong password");
//   }
// } else if (username == null) {
//   alert("Canceled");
// } else {
//   alert("I don’t know you");
// }
