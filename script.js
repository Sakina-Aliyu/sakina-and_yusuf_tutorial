document.getElementById("btn1").addEventListener("click",
function (){
    let userName = prompt("Enter your username")
    if(userName.lenght < 10 && userName.lenght > 0){
        return true
    }else{
        return false
    }
     console.log(validateUserName(userName))
     let email = prompt("Enter your email")
     if(emailCheckResult == true){
        return true
    }else{
        return false
    }
   
})


// let userDetailsDatabase = {}

// function getUserDetails(){


// var sakina = getElementById("btn1")


// function validateUserName(userName){
//     if(userName.lenght < 10 && userName.lenght > 0){
//         return true
//     }else{
//         return false
//     }
// }

// console.log(validateUserName(userName))

// userDetailsDatabse{"userName"} = userName

// let email = prompt("Enter your email")

// function validateEmail(email){
//     if(emailCheckResult == true){
//         return true
//     }else{
//         return false
//     }
// }

// console.log(validateEmail(email))

// userDetailsDatabase{"email"} = email

// let phoneNumber = prompt("Enter your phone number")

// function validatePhoneNumber(phoneNumber){
//     if(phoneNumber.lenght == 11){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(validatePhoneNumber(phoneNumber))

// userDetailsDatabase{phoneNumber} = phoneNumber

// let password = prompt("Enter your password")

// function validatePassword(password){
//     if(password.lenght < 6){
//         return false
//     }else{
//         return true
//     }
// }

// console.log(validatePassword(password))

// userDetailsDatabase{"password"} = password

// let confirmPassword = prompt("confirm your password")

// function validateConfirmPassword(confirmPassword){
//     if (confirmPassword != password){
//         return false
//     }else{
//         return true
//     }
// }

// console.log(validateConfirmPassword(confirmPassword))

// userDetailsDatabase{"confirmPassword"} = confirmPassword


// function displayUserDetails(){

// }


// function displayUserDetails(){
//     alert('Your Details\n\nUsername: $(userDetailsDatabase.userName')\nphoneNumber: $(userDetailsDatabase.phoneNumber)\nEmail: $(userDetailsDatabase.email)
// }