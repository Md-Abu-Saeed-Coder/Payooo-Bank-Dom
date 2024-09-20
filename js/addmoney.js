// Theme Start
const htmlTag=document.getElementsByTagName("html")[0];
htmlTag.setAttribute("data-thim",'light')
// Theme End



let addMoney=document.getElementById('add-money') 
.addEventListener("click",function(event){
    event.preventDefault();

    const addMoney = document.getElementById("input-add-money").value ;
    const addMoneyNumber = parseFloat(addMoney) ;
    
    const pinNumber=document.getElementById("input-pin-number").value ;
    console.log(addMoney , pinNumber);
     // wrong way to veryfy pin

     if(pinNumber ==="1234"){
        const balance=document.getElementById('account-balance').innerText ;
        const balanceNumber=parseFloat(balance) ;
        const newBlance= balanceNumber + addMoneyNumber;
        document.getElementById("account-balance").innerText =newBlance ;

     }else{
        alert("Faild to add money")
     }



}) 