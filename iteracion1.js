window.onload = function() {

//1.1
    let button = document.querySelector(".click")
    button.setAttribute("id", "btnToClick");
    button.setAttribute("type", "button");
  
    
    button.addEventListener("click", function(event){
        console.log(event);
    })


//1.2

 document.querySelector(".focus").addEventListener("focus", function(event){
       console.log(event.target.value);
      
 })




 document.querySelector(".value").addEventListener("input", function(event){
    console.log(event.target.value);
   
})

}

