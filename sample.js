let var1=document.getElementById("input-food");
let var2=document.getElementById("input-btn");
let response=document.getElementById("response");
// console.log(var1,var2)
var2.addEventListener('click' ,()=>{
    ( response.innerText=var1.value)
})