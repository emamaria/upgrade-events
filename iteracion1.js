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


 //1.3  Pone en el ejercicio que añada un evento input no sé si se refiere a lo mejor a change dejo puesto en chage
 // hasta resolver la duda

 document.querySelector(".value").addEventListener("change", function(event){
    console.log(event.target.value);
   
})

}

