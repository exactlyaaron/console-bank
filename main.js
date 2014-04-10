var balance = 1000;
var response = query();

while(!isQuit(response)){
  var x = getInput();
  var amount, action;

  switch(response){
    case 'd':
      amount = deposit(x);
      action = 'deposit';
      break;
    case 'w':
      amount = withdraw(x);
      action = 'withdraw';
      break;
    default:
      alert("Not a command");
      query();
  }
  changeBalance(amount, action);
  console.log(balance);
  response = query();
}

function query(){
  alert("Your ConsoleBank balance is " + balance + ".");
  var response = prompt("Do you want to (d)eposit, (w)ithdraw, or (q)uit?");
  return response.toLowerCase();
}

function isQuit(letter){
  return letter === "q";
}

function getInput(){
  var amount = prompt("Enter amount:");
  return amount * 1;
}

function deposit(x){
  if(x >= 500){
    reward(x);
    return balance;
  } else {
    balance = balance + x;
    return balance;
  }
}

function withdraw(x){

  if(balance - x < 0){
    overdraft(x);
    if(balance < (0 - 750)){
      closeAccount();
      return balance;
    }
  } else if (balance - x >= 0){
    balance = balance - x;
    return balance;
  }
}

function reward(x){
  balance = balance + x + 25;
  return balance;
}

function overdraft(x){
  balance = balance - x - 50;
  return balance;
}

function changeBalance(amount, action){
    alert("Your " + action + " has been processed.");
}

function closeAccount(){
  if (confirm("Are you sure? This will close your account!")){
    alert("ACCOUNT CLOSED!");
    isQuit(q);
  } else {
    balance = balance + x + 50;
    query();
  }
}
