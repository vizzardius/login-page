const sign_up_btn = document.getElementById("sign-up-button")
const show_btn = document.getElementById("sign-up-show-image")
const hide_btn = document.getElementById("sign-up-hide-image")
const sign_up_username_input= document.getElementById("sign-up-username-input")
const sign_up_password_input = document.getElementById("sign-up-password-input")
const sign_up_username_blank= document.getElementById("sign-up-username-blank")
const sign_up_password_blank= document.getElementById("sign-up-password-blank")
const sign_up_email_blank=document.getElementById("sign-up-email-blank")
const sign_up_email_input=document.getElementById("sign-up-email-input")
const privacy_terms_checkbox=document.getElementById("privacy-terms-checkbox")
const sign_up_checkbox_blank = document.getElementById("sign-up-checkbox-blank")

sign_up_btn.addEventListener("click",()=>{
   const sign_up_username=sign_up_username_input.value.trim()
   const sign_up_email=sign_up_email_input.value.trim()
   const sign_up_password=sign_up_password_input.value.trim()
   sign_up_email_blank.style.display="none";
   sign_up_email_input.style.border="none"
   sign_up_username_blank.style.display = "none";
   sign_up_password_blank.style.display = "none";
   sign_up_username_input.style.border = "none";
   sign_up_password_input.style.border = "none";
   sign_up_checkbox_blank.style.display="none"
   const privacy_terms_checkbox_isChecked=privacy_terms_checkbox.checked;
   if (sign_up_username === "" && sign_up_password === "" && sign_up_email===""&& !privacy_terms_checkbox_isChecked) {
      sign_up_email_blank.style.display = "block";
      sign_up_email_input.style.border = "2px solid red";
      sign_up_username_blank.style.display = "block";
      sign_up_username_input.style.border = "2px solid red";
      sign_up_password_blank.style.display = "block";
      sign_up_password_input.style.border = "2px solid red";
      sign_up_checkbox_blank.style.display="block"
   } 
   else if (sign_up_username === "") {
      sign_up_username_blank.style.display = "block";
      sign_up_username_input.style.border = "2px solid red";
   } 
   else if (sign_up_password === "") {
      sign_up_password_blank.style.display = "block";
      sign_up_password_input.style.border = "2px solid red";
   } 
   else if (sign_up_email === "") {
      sign_up_email_blank.style.display = "block";
      sign_up_email_input.style.border = "2px solid red";
   }
   else if(!privacy_terms_checkbox_isChecked){
      sign_up_checkbox_blank.style.display="block"
   }
   else {
      alert("Success");
      location.reload();
   }
});

show_btn.addEventListener("click", ()=>{
   show_btn.style.display ="none";
   hide_btn.style.display= "block";
   sign_up_password_input.type="text";
})
hide_btn.addEventListener("click", ()=>{
   show_btn.style.display ="block";
   hide_btn.style.display= "none";
   sign_up_password_input.type="password";

})

