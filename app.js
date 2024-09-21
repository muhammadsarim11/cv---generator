     

let username = document.getElementById("name");
let lastname = document.getElementById("Lastname");
let rollno = document.getElementById("password");
let course = document.getElementById("email");
let temp = document.querySelector(".template")

let showname = document.getElementById("showname")
let showlast = document.getElementById("showlast")
let showcourse = document.getElementById("showcourse")
let shownroll = document.getElementById("showroll")

let submit =  document.getElementById("submit")


function Inputvalue(){

    
if(email.value==""){
    alert("please enter your Email!")
}

else if(password.value==""){
    alert("please enter you password!")

}
else if(password.value.length<8){
    alert("Password must have 8 letters")
}

else{
    console.log(email.value);
    console.log(password.value);
}
}

function validate(){
    if(username.value=="" || email.value=="" || rollno.value=="" || course.value==""){
       return false

    }
    else{
return true
    }
}

function template(){
    if(validate()==false){
        alert("fill this form correctly!")
    }
    else{
        temp.style.display = "block"
        showname.innerText = "Name: " + username.value
        showlast.innerText = "Lastname: "+lastname.value
        showcourse.innerText = "Course: "+course.value
        shownroll.innerText = "RollNo: "+rollno.value
       
    }
}

