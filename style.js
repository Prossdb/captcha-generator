let captcha;
let alphabets = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
let statusbar = document.getElementById ('statusbar');
statusbar,innerText = "Captcha Generator";
generate = () =>{
let first = alphabets[Math.floor(Math.random()* alphabets.length)];
let second = Math.floor(Math.random() * 10);
let third = Math.floor(Math.random() * 10);
let fourth = alphabets[Math.floor(Math.random()* alphabets.length)];
let fifth = alphabets[Math.floor(Math.random()* alphabets.length)];
let sixth = Math.floor(Math.random() * 10);
captcha = first.toString()+second.toString()+third.toString()+fourth.toString()+
fifth.toString()+sixth.toString();
document.getElementById('generated-captcha').value = captcha;
document.getElementById("entered-captcha").value = '';
statusbar.innerText = "Captcha Generator";
}

check = () =>{
    let userValue = document.getElementById("entered-captcha").value;
    console.log(captcha);
    console.log(userValue);
    if (userValue = captcha){
        statusbar.innerText = "Correct!!"
    }else{
        statusbar.innerText = "Try Again!!"
        document.getElementById("entered-captcha").value = '';
    }
}