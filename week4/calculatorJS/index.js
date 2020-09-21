document.getElementById("first-function").addEventListener("click", function() {
   sum(num1 + num2) 
    return num1 + num2;
    document.body.append(sum)
})

document.getElementById("second-function").addEventListener("click", function() {
  difference(num1,  num2) 
   return num1 - num2;
   document.body.append(difference)
})

document.getElementById("third-function").addEventListener("click", function() {
  product(num1, num2)
   return num1 * num2;
   document.body.append(product)
})

document.getElementById("third-function").addEventListener("click", function() {
  quotient(num1, num2)
   return num1 / num2;
   document.body.append(quotient)
})

