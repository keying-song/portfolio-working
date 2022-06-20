
(function(){

    function Start()
    {
        console.log("app started!");
        //use AJAX to read JSON file
        let XHR = new XMLHttpRequest();
        //create the request
        XHR.open("GET","../data/data.json");
        //send the request
        XHR.send();
        //create an event listener/handler
        XHR.addEventListener("readystatechange",function()
        {
            if (XHR.readyState == 4 && XHR.status == 200)
            {
                console.log("JSON DATE:");
                console.log("==============");
                console.log(XHR.responseText);
            }

        });
        
    }
    window.addEventListener("load", Start);
})();
//email validation
function EmailValidate(){
    let emailInput = document.getElementById("email").value;
    let error = document.getElementById("error");
    let emailReg =/^\w+@\w+\.\w+.*$/;
    if(! emailReg.test(emailInput)){
    
    error.innerHTML = "invalid email";
  
    }else{
      error.innerHTML = " ";
    }
  }
  //reset
  function ResetF(){
      let error = document.getElementById("error");
      error.innerHTML = " ";
  }
//set cookies of contact page
function CreateCookies(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;
    document.cookie = "name="+encodeURIComponent(name)+";";
    document.cookie = "email="+encodeURIComponent(email)+";";
    document.cookie = "phone="+encodeURIComponent(phone)+";";
    document.cookie = "message="+encodeURIComponent(message)+";";

}
