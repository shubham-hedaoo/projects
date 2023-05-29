const dob=document.querySelector("#dob");
const luckyNum=document.querySelector("#lucky-num");
const check=document.querySelector(".check-btn");
const msg=document.querySelector(".msg")
check.addEventListener("click",checkBirthdayIsLucky);
function checkBirthdayIsLucky(){
    const dateOfB=dob.value;
    const sum = calculateSum(dateOfB);
    campareValues(sum,luckyNum.value)
}
function campareValues(sum,luckyNumber){
    if (sum%luckyNumber===0) {
        msg.innerText="Your BirthDay is lucky"
    }else{
        msg.innerText="Your BirthDay is not lucky" 
    }
}
function calculateSum(dateOfB){
dateOfB =dateOfB.replaceAll("-","")
let sum=0;
for (let i = 0; i < dateOfB.length; i++) {
    sum=sum+Number(dateOfB.charAt(i));
    
}
return sum;
}