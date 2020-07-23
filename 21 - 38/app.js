                              //Chapter No 21-25
 //Question No 1
//  var firstName = prompt("enter the first name");
//  var lastName = prompt("enter the Last name");
//  var fullName = firstName+ lastName;
//  alert(fullName);

 //Question No 2
//  var  str = prompt("enter the mobile model name");
//  var n = str.length;
 
    
     
//          document.write("My Favourite Phone is"+" "+ str+ "<br>");
//          document.write("The length of string is " +" " + n);
 


 //Question No 3
//  var letter = "pakistani"
//  document.write("String"+" "+letter+"<br>");
// var i = letter.indexOf('n');
//          document.write("Index of 'n'" +" "+i);
     
 
 //Question No 4
//  var letter = "Hello World"
//   document.write("String:"+" "+letter+"<br>");
//  var i = letter.lastIndexOf('l');
//           document.write(" last Index of 'l'" +" "+i);
 

//Question No 5
// var letter = "Pakistani"
//   document.write("String:"+" "+letter+"<br>");
//  var i = letter.charAt('3');
//           document.write("Character at index 3:" +" "+i);
 
 
 //Question No 6
//  var firstName = prompt("enter the first name");
//  var lastName = prompt("enter the Last name");
//   var fullName = firstName.concat(lastName);
//   alert(fullName);

 

//Question No 7
// var letter = "Hyderabad"
//   document.write("String:"+" "+letter+"<br>");
//  var i = letter.replace("Hyder","Islam");
//           document.write("After Replacement:" +" "+i);
  


//Question no 8                           
//           var letter = "Ali and Sami are best friends. They play cricket and football together"
//   document.write("String:"+" "+letter+"<br>");
//  var i = letter.replace(/and/g,"&");
//           document.write("After Replacement:" +" "+i);
                             
  //Question no 9

  //Question no 10
//   var letter = "peanuts"
//   document.write("String:"+" "+letter+"<br>");
//  var i = letter.toUpperCase();
//           document.write("Uper case:" +" "+i);
  

//Question no 11
// var letter = "javascript"
//   document.write("String:"+" "+letter+"<br>");
//  var i = letter.slice(0,1)
//  var j = letter.slice(1);
//  var f = i.toUpperCase();
//  var t = f+j;
//           document.write("Tile Case:" +" "+t);

  
//Question no 12
// var num = "35.36";
// document.write("Numnber:"+" "+num+"<br>");
// var s = num.replace(".","");
// document.write("Result:"+" "+s);


  //Question no 13
  // var userName = prompt("Enter the Username")
  // for( i =0 ; i< userName.length ; i++)
  // var s = userName.charCodeAt(i);
  
  // if(s== 33 && s== 44 && s== 46 && s== 64 )    {

  //   alert( "enter a valid username.");
  // }  


   //Question no 14
    // var items =  ["cake", "apple pie", "cookie", "chips", "patties"];
    //   var search = prompt("Welcome to ABC Bakery. what do you want to order sir/ma'am");
    //   search = search.toLowercase();
    //   var bakery = items.indexOf(search);
    
    
    //  if(items.indexOf(search)!= -1)

    //  {
      
      
    //    document.write(search+" " + "is avaiable "+  " " +"in our bakery");
    //  }

   
    //  else
    // {
    //    document.write(search+" " + "is not avaiable in our bakery");
    // }
   

  //Question no 15


    //Question no 16
    // var university = "University of Karachi";
    // var word = university.split("");
    // console.log(word);

      //Question no 17
      // var user = prompt("Enter the string");
      // document.write("User Input:"+" "+ user);
      // var lastchr = user[user.length - 1];
      // document.write("Last characher:"+" "+lastchr);



        //Question no 18
//           var str = "The quick brown fox jumps over the lazy dog";
//           document.write("text:"+" "+str+"<br>");
//           var count =0;
//            var str1 = str.split(" ");
//             for(i =0 ; i< str1.length ; i++)
      
// {
//             if(str1[i]=="the"|| str1[i]=="The")

//           {
//                count++;
//             }
//           }
                          
// document.write("There are"+ " "+ count +" "+ "Occurences of word 'the' ");
          

                                   //CHAPTER NO 26-30

//Question no 1
//  var integer = prompt("enter the positive interger");
//  document.write("integer :"+" "+integer+"<br");
//  var round = Math.round(integer);
//  document.write("Round Value :"+" "+round+"<br");
//  var flor = Math.floor(integer);
//  document.write("Floor Value :"+" "+flor+"<br");
//  var c = Math.ceil(integer);
//       document.write("Ceil Value :"+" "+c+"<br");
         
      
      
      //Question no 2
//       var integer = prompt("enter the negative interger");
//  document.write("integer :"+" "+integer+"<br>");
//  var round = Math.round(integer);
//  document.write("Round Value :"+" "+round+"<br>");
//  var flor = Math.floor(integer);
//  document.write("Floor Value :"+" "+flor+"<br>");
//  var c = Math.ceil(integer);
//       document.write("Ceil Value :"+" "+c+"<br>");



     //Question no 3
    //  var integer = prompt("enter the  interger");
    //  document.write("integer :"+" "+integer+"<br>");
    //  var a = Math.abs(integer);
    //  document.write("Absolute Value :"+" "+a+"<br>");
     
    
    
     //Question no 4
    //  var  diceNo;
    //  diceNo = Math.ceil(Math.random()*6);
    //  document.write("Random dice value:"+" "+ diceNo);
     
     //Question no 5
    //  var  coinNo;
    //  coinNo = Math.ceil(Math.random()*2);
    //  document.write(coinNo+"<br>");
    //  if(coinNo== 2 )
    //  document.write("Random coin value:"+" "+ "Head");
    //  else {
    //   document.write("Random coin value:"+" "+ "Tail");
    //  }

     //Question no 6
    //  var  randomNum;
    //  randomNum = Math.ceil(Math.random()*100);
    //  document.write("random number between 1 and 100: "+" "+randomNum);
     
    
     //Question no 7
    //  var weight = prompt("enter your weight in kilograms");
    //  var fl = parseFloat(weight);
    //  document.write("the weight of user is :"+" "+ fl+" "+"Kilograms");


     //Question no 8
  //  var random =Math.ceil(Math.random()*10);
  //  var int = prompt("Enter any integer from 1 to 10 ");
  //  if(random== int)
  //  {
  //    alert("Congratulations");
  //  }
  //  else
  //  {
  //   alert("Try Again");
  //  }


                                          // CHAPTER NO 31-34
     
   //Question no 1
    // var todayDate = new Date();
    // document.write(todayDate);

     //Question no 2
    //  var month =["jan","feb","march","april","may","june","july","aug","sep","oct","nov","dec"];
    //  var todayDate = new Date();
    //  var b = todayDate.getMonth();
    //  var currentMonth = month[b];
    //  document.write("Current month :"+currentMonth);
  
     //Question no 3
    //  var month =["saturday","sunday","monday","tuesday","wednesday","thursday","friday"];
    //  var todayDate = new Date();
    //  var b = todayDate.getDay();
    //  var c = month[b];
    //  var currentDayy = c.slice(0,3)
    //  alert("Current month :"+currentDayy);


     //Question no 4
    //  var month =["saturday","sunday","monday","tuesday","wednesday","thursday","friday"];
    //  var todayDate = new Date();
    //  var b = todayDate.getDay();
    //  var c = month[b];
    //  if(month[b]== "saturday"|| month[b]== "sunday")
    //  alert("Its a fun day");



     //Question no 5
    //  var month =["saturday","sunday","monday","tuesday","wednesday","thursday","friday"];
    //  var todayDate = new Date();
    //  var b = todayDate.getDay();
    //  var c = month[b];
    //  if(month[b]== "saturday"|| month[b]== "sunday")
    //  alert("Its a fun day");


     //Question no 6
    //  var date = new Date();
    //  var b = date.getUTCDate();
    //  if(b < 16)
    //  {
    //     alert("First fifteen days of the month");
    //  }
    //  else 
    //  {
    //    alert("Last days of the month");
    //  }

 //Question no 6
    //  var date = new Date (prompt("Enter the time ","jan 1 , 1970"));
    //  var a = date.getTime();
     
    //  var c = a/(1000*60*60);
    //  document.write("Elapsed milisec since jan 1, 1970"+" "+" " +a+"<br>");
    //  document.write("Elapsed minutes since jan 1, 1970"+" "+c);
    

     //Question no 7
    //  var time = new Date();
    //  var t = time.getTime();
     
    //  if(t <= 12)
    //   {
    //      alert("It's AM");
    //   }
    //   else 
    //   {
    //     alert("It's PM");
    //   }


      //Question no 8
      // var month = 11;
      // var date = 0;
      // var year = 0
      //   var date = new Date(year + 2020 ,month + 12 ,date + 31 );
        
      //   document.write(date);


       //Question no 9
      //  var ramdanDate = new Date( 2015 ,6);
      //  var today = ramdanDate.getDate();
      //  var result = ramdanDate - today;
      //  document.write(result +"days have passed since 1st ramadan , 2015");
        
      
      
      //Question no 10
      
      // var startDate = new Date(2015 , 12 ,0);
      
      // var endDate = new Date(2015, 11 ,5,22,50,16);
      // var milisec = endDate- startDate;
      // var s = Math.ceil( milisec/(1000));
      // var sec = Math.abs(s);
      // document.write("On refrence date "+" "+ endDate +" "+ sec +" " +"seconds had passes since the begenning of 2015")


         //Question no  11
        //  var currentdate = new Date(2020 , 4 , 20 , 23,08 ,16);
        //   var newDate = new Date(2020 , 4 , 20 , 22,08 ,16);
         
        //  document.write("Current date "+" "+ currentdate +" "+"1 hour ago , it was "+" "+newDate)
   
          
        
        //Question no 12
        // var currentdate = new Date(2015 , 11, 05 , 23,09,37);
        //   var newDate = new Date(1915, 11, 05 , 23,09,37);
         
        //  document.write("Current date "+" "+ currentdate +" "+"100 years back, it was "+" "+newDate)
         
        
        
        //Question no 13
        // var age = prompt("enter your age ");
        // var todayDate = new Date();
        // var c = todayDate.getFullYear();
        
        // var dateOfBirth = c - age;
        // document.write("Age"+" "+age+" "+"<br>"+"date of birth: "+" "+dateOfBirth);
           
        
        
        
        //Question no 14
        // var custumerName = "Nimra Riaz";
        // var date = new Date();
        // var currentMonth = date.getMonth();
        // var noUnit = prompt("enter number of units");
        // var chargeUnit = 16;
        // var late = 350;
        // var netAmountPay = noUnit*chargeUnit;
        // var grossAmountPay = netAmountPay+ late;
        // document.write("Coustumer Name"+" "+custumerName+"<br>"+"Current month"+" "+currentMonth+"<br>"
        // +"NUmber of Units"+" "+noUnit+"<br>"+"Charge per unit"+" "+chargeUnit+"<br>"+"<br>"+"<br>"
        // +"Net Amount Pay(within due date)"+" "+netAmountPay+"<br>"+"Late payment sucharges"+" "+late+"<br>"
        // +"Gross Amount payable (after due dates)"+" "+grossAmountPay+"<br>")


                                      //CHAPTER NO 35-38


//  //Question no 1 
//  var date = new Date();
//  document.write(date);


//Question no 2
// function name (firstName, lastName)
// {
//  fullName = firstName+lastName;
//   return fullName;
// } 
// var fullName;
// var firstName = prompt("enter first name");
// var lastName = prompt("enter last name");
// var result = name(firstName,lastName);
// document.write(result);


//Question no 3
// function name (firstNum, secondNum)
// {
//  sum = firstNum + secondNum;
//   return sum;
// } 
// var fullName;
// var firstNum = Number (prompt("enter first number"));
// var secondNum = Number( prompt("enter second number"));
// var result = name(firstNum,secondNum);
// alert(result);



//Question no 4
// function operation (firstNum, secondNum,operator)
// {
//   if (operator== '+'){
//  sum = (firstNum)+(secondNum);
//   return sum;
//   }
//   else if (operator== '-')
//  {sum = (firstNum)-(secondNum);
//   return sum;}

//   else if (operator== '*')
//  {
//    sum = (firstNum)*(secondNum);
//   return sum;
//  }
//   else if (operator== '/')
//  {
//    sum = (firstNum)/(secondNum);
//   return sum;
//  }
//  else if (operator== '%')
//  {
//    sum = (firstNum)%(secondNum);
//   return sum;
//  }
// } 



// var firstNum = Number (prompt("enter first number"));
// var secondNum = Number( prompt("enter second number"));
// var operator = prompt("enter operator");
// var result = name(firstNum,secondNum,operator);
// alert(result);


//Question no 5
// function square (num)
// {
//   var s = num*num;
//   return s;
// }
// var s ;
// var num = Number(prompt("enter any number"));
// var result = square(num);
// alert(result);


//Question no 6
// function factorial (num)
//  { 
//   if(num >0 && num <=1)
//   {
//     return 1;
//   }
//   else {
//     return num * factorial(num-1);
//   }
//  }
 
//  var num = Number(prompt("enter any number"));
//  var result = factorial(num);
//  alert(result);


//Question no 7
// function counting (){
//   for( i=startNum ; i<= endNum ; i++)
//   {
//     document.write(i+"<br>");
//   }
// }
// var i ;
// var startNum = Number (prompt("enter start number"));
// var endNum = Number (prompt("enter end number"));
// counting();


//Question no 8
//  function calculateHypotneus()
//  {

//   function square (num , num1)
//   {
//      var s = num*num;
//      var p = num1*num1;
//      return p;
//      return s;
//    }
//    var sq = square(num);
//  }



//Question no 9
// function area (w,h)
// {
//   var areaOfTriangle = w*h;
//   return areaOfTriangle;
// } 
// var areaOfTriangle;
// var w = 3;
// var h = Number(prompt("enter the height"));
// var result = area(3,h);
// alert("Area of a triangle is :"+" "+result);



//Question no 10
// function palindrome(str)
// {
//   for( i=0 ; i< str.length ; i+=1)
//   {
//     if(str[i]!== str[str.length -1 -i])
//     {
//       var a = "This string is Palindrome"
//       return a;
//     }
//   }
//   var b = "This string is Palindrome"
//   return b;
// }
// var a,b;
// var i;
// var str = prompt("enter any string");
// var g = palindrome(str);
// alert(g);


//Question no 11
// function abc(str1)
// { 

//       var pieces = str1.split(" ");
//       for ( var i = 0; i < pieces.length; i++ )
//       {
//           var j = pieces[i].charAt(0).toUpperCase();
//           pieces[i] = j + pieces[i].substr(1);
//       }
//       return pieces.join(" ");
//   }
 
//  var pieces;
// var str1 = " the quick browm fox";
// var result = abc(str1);
// alert(result);


//Question no 12
// function larger(string)
// {
//   var str = string.split(" ");
//   var largeword = 0;
//   var w = null;
//   for (var i = 0; i < str.length - 1; i++) {
//       if (largeword < str[i].length) {
//           largeword = str[i].length;
//           w = str[i];
//       }
//   }
//   return w;
// } 
// var w,largeword;
// var string = "Web Development Tutorial";
// var result = larger(string)
// document.write("The given string is :"+" "+" "+string +"<br>");
// document.write("larger word is "+" "+" "+result);


//Question no 13
// function occure(string,a)
// {
  
      
//       for ( var i = 0; i < string.length; i++ )
//       {
//       if(string[i] == a)
      
//        var x= Number( ++count);
//       }
//       return x;
  

// } 
// var count=0,p,x;
// var string = prompt("enter any string");
// var a = prompt("enter any character");
// var result = occure(string,a);
// document.write("The given characher"+" "a +" "+"is oocure "+" "+" "+result +" "+"times in a string");


//Question no 14 