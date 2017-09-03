/* This app will do a division of numbers under 100 if more than 100 it will 
 it is more than a 100*/
 //convert var to int
 //if atatment for over 100 to see us hav enter number over 100
 // if under 100 divide with a loop
 //loop of for loop 12

 alert("THis program will divide the number you have entered by 12, 12 times.")
 alert("The number should be under 100")
let division = prompt("Enter the number you want to get divided", "00") //Will let you enter a number and shows an example
division = parseInt(division) //converts let to int

     
if (division <= 100) //If it is smaller than 100 
    for (var i = 1; i <= 12; i++) //Loops 12 times
        {
    {
        
        
            console.log(i + " / "+ division + " = " + (i/division)) // Will show the method and divide
    }
}
else if (division >= 100) //Sees if t is less than 100
    
{
    alert("You have enter a number greater than 100")
    

    
    
}
       