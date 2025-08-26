const login_again_btn = document.getElementById("login-again-button")
const fp_show_btn = document.getElementById("fp-show-image")
const fp_hide_btn = document.getElementById("fp-hide-image")
const fp_show_btn_2 = document.getElementById("fp-show-image-2")
const fp_hide_btn_2 = document.getElementById("fp-hide-image-2")
const password_input_1 = document.getElementById("password-input-1")
const password_input_2 = document.getElementById("password-input-2")
const password_blank_compare = document.getElementById("password-blank-compare")
const password_blank_1 =document.getElementById("password-blank-1")
const password_blank_2 =document.getElementById("password-blank-2")
login_again_btn.addEventListener("click",()=>{
   const password_1=password_input_1.value.trim()
   const password_2=password_input_2.value.trim()
   password_blank_1.style.display = "none";
   password_blank_2.style.display = "none";
   password_input_1.style.border = "none";
   password_input_2.style.border = "none";
   password_blank_compare.style.display = "none";
   if (password_1 === "" && password_2 === "") {
      password_blank_1.style.display = "block";
      password_input_1.style.border = "2px solid red";
      password_blank_2.style.display = "block";
      password_input_2.style.border = "2px solid red";
   } 
   else if (password_1 === "") {
      password_blank_1.style.display = "block";
      password_input_1.style.border = "2px solid red";
   } 
   else if (password_2 === "") {
      password_blank_2.style.display = "block";
      password_input_2.style.border = "2px solid red";
   } 
   else if(password_1 != password_2){
      password_blank_compare.style.display = "block";
   }
   else {
      alert("Success");
      window.location.href="../login/index.html"
   }
});

fp_show_btn.addEventListener("click", ()=>{
   fp_show_btn.style.display ="none";
   fp_hide_btn.style.display= "block";
   password_input_1.type="text";
})
fp_hide_btn.addEventListener("click", ()=>{
   fp_show_btn.style.display ="block";
   fp_hide_btn.style.display= "none";
   password_input_1.type="password";
})
fp_show_btn_2.addEventListener("click", ()=>{
   fp_show_btn_2.style.display ="none";
   fp_hide_btn_2.style.display= "block";
   password_input_2.type="text";
})
fp_hide_btn_2.addEventListener("click", ()=>{
   fp_show_btn_2.style.display ="block";
   fp_hide_btn_2.style.display= "none";
   password_input_2.type="password";
})
