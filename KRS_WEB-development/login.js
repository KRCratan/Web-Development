
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
  }
  
  var submit = document.getElementById("loginButton")
   console.log(submit)
    submit.onclick = function(){
        validateform();
    }
    var usernamelist = ["aditya","malvika"]
    function validate(){
        console.log("W=======================")
        var form = document.getElementById("myform")
        var username = form.username.value;
        var password = form.password.value;

        var usernameErr = true;
        var passwordErr = true;

        if (username == "") {
            printError("usernameErr", "Please enter your username");
          }else{
            if(username.length<5){
                printError("usernameErr", "Please enter a valid username");
            }else if(!usernameErr.include(username)){
                printError("usernameErr", "Please enter a valid username");
            }else{
                printError("usernameErr", "");
                usernameErr = false;
            }
          }
            if (password == "") {
                printError("passwordErr", "Please enter your password");
              }else {
                if(password.length<5){
                    printError("passwordErr", "Please enter a valid password");
                }else{
                    printError("passwordErr", "");
                    passwordErr = false;
                }
              }
              
              console.log(usernameErr,passwordErr)
              if((usernameErr||passwordErr)==true){
                    return false;
              }else{
                var dataPreview = "You have entered the following details: \n"+
                "Username: "+username+"\n"+
                "Password: "+password+"\n";
                // Display input data in a dialog box before submitting the form
                alert(dataPreview);
              }
    