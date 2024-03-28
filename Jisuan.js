function Calculator(type){
  var sum;
  var a = document.getElementById("One");
  var b = document.getElementById("Two");
  switch(type){
    case '+':
      sum = parseInt (a.value) + parseInt (b.value);
    break;
    case '-':
      sum = parseInt (a.value) - parseInt (b.value);
    break;
    case '*':
      sum = parseInt (a.value) * parseInt (b.value);
    break;
    case '/':
      sum = parseInt (a.value) / parseInt (b.value);
    break;
}
console.log(sum);
var c=document.getElementById ("demo");
c.value=sum;
document.getElementById ("demo").innerHTML=sum;
}
