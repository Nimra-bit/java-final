// Task 1
// Task 2

function Usms() {
    alert("Thanks For Purchasing A Phone Form Us");
    }
    
    
    // Task 3
    function deleteRow(btn) {
        var table = btn.parentNode.parentNode.rowIndex;
         document.getElementById("mytab").deleteRow(table);
    }
      
    
    
    
    // Task 4
    function SetNewImage()
    {
    document.getElementById("img1").src="images/muz2.jpg";
    }
    
    function SetOldImage(){
    document.getElementById("img1").src="images/muz1.jpg";
    }
    
    
    
    
    
    //Task 5
    x=0;
    
    function abc()
    {
        x++;
     document.getElementById("change").innerHTML=x;
    }
    
    function abc1()
    {
        x--;
     document.getElementById("change").innerHTML=x;
    }
    