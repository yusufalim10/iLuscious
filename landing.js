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





// Food Slider

const foodSlider = document.querySelector(".food_container");
const food = document.querySelectorAll(".food");
const nextButton = document.querySelector(".next_btn");
const prevButton = document.querySelector(".prev_btn");
const foodImage = document.querySelectorAll(".food_image");

let foodIndex = 0;
const imageSize = food[0].clientWidth;

console.log(food.length - 1)

nextButton.removeAttribute("disabled")

nextButton.addEventListener("click", ()=>{
        foodIndex++
        if(foodIndex < food.length) {
            prevButton.removeAttribute("disabled")
            foodSlider.style.transform = 'translateX(' + (-imageSize * foodIndex) + 'px)';
            foodSlider.style.transition = 'transform 1s cubic-bezier(.63,.14,.11,1)';
            foodImage.forEach(foodImage =>{
                foodImage.style.transform = 'rotate(' + (90 * foodIndex) + 'deg)'
                foodImage.style.transition = 'transform 1s cubic-bezier(.63,.14,.11,1)'
            })
        } else {
            foodIndex = food.length - 1
            nextButton.setAttribute("disabled", "disabled");
        }
})

prevButton.setAttribute("disabled", "disabled");

prevButton.addEventListener("click", ()=>{ 
    foodIndex--
    if(foodIndex >= 0) {
        nextButton.removeAttribute("disabled")
        foodSlider.style.transform = 'translateX(' + (-imageSize * foodIndex) + 'px)';
        foodSlider.style.transition = 'transform 1s cubic-bezier(.63,.14,.11,1)';
        foodImage.forEach(foodImage =>{
            foodImage.style.transform = 'rotate(' + (90 * foodIndex) + 'deg)'
            foodImage.style.transition = 'transform 1s cubic-bezier(.63,.14,.11,1)'
        })
    } else {
        foodIndex = 0
        prevButton.setAttribute("disabled", "disabled")
    }
    
})


// Mobile Navbar 

const mobileToggle = document.querySelector (".mobile_navbar");
const navbarMenu = document.querySelector (".navbar_menu");
const navbarContact = document.querySelector(".navbar_contact_item")
const contactOptions = document.querySelector(".contact_options");

mobileToggle.addEventListener("click", ()=>{
    mobileToggle.classList.toggle ("active");
    navbarMenu.classList.toggle ("is-active");
    contactOptions.classList.remove("active")
})

navbarContact.addEventListener("click", ()=>{
    contactOptions.classList.toggle("active");
})





// const email = document.querySelector (".email_field");
// const password = document.querySelector (".password_field");
// let warning = document.querySelector (".warning");

// if(email.value !== (`${email.value}@gmail.com`)) {
//     warning.textContent = "You need to enter correct Email"
// }


