const login_btn = document.getElementById("login-button")
const show_btn = document.getElementById("show-image")
const hide_btn = document.getElementById("hide-image")
const username_input= document.getElementById("username-input")
const password_input = document.getElementById("password-input")
const username_blank= document.getElementById("username-blank")
const password_blank= document.getElementById("password-blank")
login_btn.addEventListener("click",()=>{
   const username=username_input.value.trim()
   const password=password_input.value.trim()
   username_blank.style.display = "none";
   password_blank.style.display = "none";
   username_input.style.border = "none";
   password_input.style.border = "none";
   if (username === "" && password === "") {
      username_blank.style.display = "block";
      username_input.style.border = "2px solid red";
      password_blank.style.display = "block";
      password_input.style.border = "2px solid red";
   } 
   else if (username === "") {
      username_blank.style.display = "block";
      username_input.style.border = "2px solid red";
   } 
   else if (password === "") {
      password_blank.style.display = "block";
      password_input.style.border = "2px solid red";
   } 
   else {
      alert("Success");
      location.reload();
   }
});

show_btn.addEventListener("click", ()=>{
   show_btn.style.display ="none";
   hide_btn.style.display= "block";
   password_input.type="text";
})
hide_btn.addEventListener("click", ()=>{
   show_btn.style.display ="block";
   hide_btn.style.display= "none";
   password_input.type="password";
})

