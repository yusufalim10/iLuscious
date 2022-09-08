const inputRegion = document.querySelector (".input_region");
let regionSelected = document.querySelector (".selected");
let regionContainer = document.querySelector (".region_container");
const regionOptions = document.querySelectorAll (".option")

inputRegion.addEventListener("click", ()=>{
    regionContainer.classList.toggle("active")

})


regionOptions.forEach(option =>{
    option.addEventListener("click", ()=>{
        regionSelected.textContent = option.querySelector("label").textContent;
        option.querySelector("input").checked = true
        regionContainer.classList.remove("active")
    })  
    
})


// Registration

const signIn = document.querySelector(".sign-in")
const signUp = document.querySelector(".sign-up")
const forms = document.querySelector(".forms")

signIn.addEventListener("click", ()=>{
    forms.classList.add("active")
})

signUp.addEventListener("click", ()=>{
    forms.classList.remove("active")
})


const unHide = document.querySelectorAll(".unHide")
const pwField = document.querySelectorAll(".password_field")

unHide.forEach(unHide =>{
    unHide.addEventListener("click", ()=>{
        pwField.forEach(pwField =>{
            if(pwField.type === "password"){
                pwField.type = "text";
                unHide.classList.replace("bi-eye-slash", "bi-eye");
            } else {
                pwField.type = "password";
                unHide.classList.replace("bi-eye", "bi-eye-slash");
            }
        })
    })
})


// const email = document.querySelector (".email_field");
// const password = document.querySelector (".password_field");
// let warning = document.querySelector (".warning");

// if(email.value !== (`${email.value}@gmail.com`)) {
//     warning.textContent = "You need to enter correct Email"
// }