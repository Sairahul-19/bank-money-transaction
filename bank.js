var row = 1;


function transfer(){
    var enterName = document.getElementById("enterName").value;
    var enterAmount = parseInt(document.getElementById("enterAmount").value);
 var enterSName = document.getElementById("enterSName").value;
  var findSenderBankAccount = enterSName + "BankBalance";
  sendmoney(findSenderBankAccount,enterAmount,enterName,enterSName)
}
function sendmoney(findSenderBankAccount,enterAmount,enterName,enterSName){  
    var enterSAmount =parseInt(document.getElementById(findSenderBankAccount).innerHTML);
    if (enterAmount > enterSAmount) {
       alert("Insufficient Balance.")
    }
 else {

       var tab= document.getElementById("tab2");
       var nrow = tab.insertRow(row);
       var cell1= nrow.insertCell(0);    
       var cell2= nrow.insertCell(1);   
       var cell3= nrow.insertCell(2); 
       var cell4= nrow.insertCell(3);  
       
       cell1.innerHTML = enterSName;
       cell2.innerHTML = enterName;
       cell3.innerHTML = enterAmount;
       cell4.innerHTML = Date();


       row++;


       var findUserBankAccount = enterName + "BankBalance";
      
       var finalAmount = parseInt(document.getElementById(findUserBankAccount).innerHTML) + enterAmount;
       var myAccountBalance = parseInt(document.getElementById(findSenderBankAccount).innerHTML) - enterAmount;
       document.getElementById(findSenderBankAccount).innerHTML = myAccountBalance;
       document.getElementById(findUserBankAccount).innerHTML = finalAmount;
       alert(`Successful Transaction !!  
       $${enterAmount} is sent to ${enterName}@email.com.`)
 
       // transaction history 
       
//        var createPTag = document.createElement("li");
//        var textNode = document.createTextNode(`Rs ${enterAmount} is sent from the sender with Email-id ${enterSName}@email.com
//   to recepient with Email-id ${enterName}@email.com on ${Date()}.`);
//        createPTag.appendChild(textNode);
//        var element = document.getElementById("transaction-history-body");
//        element.insertBefore(createPTag, element.firstChild);
    }
 }