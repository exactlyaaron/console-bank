var response = query();

while(!isQuit(response)){
  var x = getInput();
  var deposit, withdraw;

  switch(response){
  case 'd':
    deposit = deposit(x);
  break;

  case 'w':
    withdraw = withdraw(x);
    break;
  default:
    alert("Not a command");
  }

  console.log(balance);
  response = query();
}

function query(){
  alert("Your ConsoleBank balance is " + balance + ".");
  var response = prompt("Do you want to (d)eposit, (w)ithdraw, or (q)uit?");
  return response.toLowerCase;
}

function isQuit(letter){
  return letter === "q";
}

function getInput(){
  var amount = prompt("Enter amount:");
  return value * 1;
}

function deposit(x){
  if(x >= 500){
    reward(x);
  } else {
    balance = balance + x;
    return balance;
  }
  changeBalance(deposit);
}

function withdraw(x){
  if(balance - x <= 0){
    overdraft(x);
    if(balance <= (-750)){
      closeAccount();
    }
  }
  changeBalance(withdraw);
}

function reward(x){
  balance = balance + x + 25;
  return balance;
}

function overdraft(x){
  balance = balance - x - 50;
  return balance;
}

function changeBalance(deposit,withdraw){
  if(deposit){
    alert("Your deposit of " + deposit + " has been received.");
  } else {
    alert("Your withdrawal of " + withdraw + " has been dispensed.")
  }
}

function closeAccount(){
  if (confirm("Are you sure? This will close your account!")){
    alert("ACCOUNT CLOSED!");
  } else {
    query();
  }
}
