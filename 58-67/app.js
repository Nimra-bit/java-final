//task1
var mainContent = document.childNodes[1].childNodes[1].childNodes[0];


console.log(mainContent.childNodes)


var render=document.childNodes[1].childNodes[1].childNodes[0].childNodes[2]
document.write(render.innerHTML)


var firstName=document.getElementById('first-name').value="Nimra";
console.log(firstName)


        var lastName=document.getElementById('last-name').value='Riaz'
console.log(lastName)
        var email=document.getElementById('email').value='nriaz6109@gmail.com'
console.log(email)


// Task2

var formContect=document.getElementById('form-content')
console.log(formContect.nodeType)


var lastName=document.getElementById('lastName')
console.log(lastName.nodeType)
console.log(lastName.childNodes)


var lastName=document.getElementById('lastName')
console.log(lastName.childNodes[0].nodeValue='Last Name :khalid')


var firstAndLast=document.getElementById('main-content')
console.log(firstAndLast.firstChild)
console.log(firstAndLast.lastChild)


var nextPervious=document.getElementById('lastName')
console.log(nextPervious.nextSibling)
console.log(nextPervious.previousSibling)


 var nodeParent=document.getElementById('email')
 console.log(nodeParent.nodeType)
 console.log(nodeParent.parentNode)
