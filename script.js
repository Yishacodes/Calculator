//display function

function display(sub) {
    document.getElementById("result").value += sub

}


// solve function

function solve(){
   let x = document.getElementById("result").value 
   let y = eval(x)

   document.getElementById("result").value = y
    
}

// clear function

function clearScreen(){
    document.getElementById("result").value =" "
}