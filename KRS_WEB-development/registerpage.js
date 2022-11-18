function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
  }
  var submit=document.getElementById("loginButton")
  submit.onclick= function(){
    validateForm();
  }
  function validateForm() {

    var form=document.getElementById("myform")
    var name = form.name.value;
    var email = form.email.value;
    var mobile =form.mobile.value;
    var gender =form.gender.value;
    var country = form.country.value;
    var qual = form.qualification.value;
    var course = form.course.value;
    var terms = form.conditions.value;
    var comments = form.comments.value;
    
  
  
  
    // Defining error variables with a default value
    var nameErr = true;
    var emailErr = true;
    var mobileErr = true;
    var countryErr = true;
    var genderErr = true;
    var qualErr = true;
    var courseErr = true;
    var termsErr = true;
    var commentsErr = true;

  
   // name
    if (name == "") {
      printError("nameErr", "Please enter your name");
    } else {
      var regex = /^[a-zA-Z\s]+$/;
      if (regex.test(name) === false) {
        printError("nameErr", "Please enter a valid name");
      } else {
        printError("nameErr", "");
        nameErr = false;
      }
    }
  
    // email
    if (email == "") {
      printError("emailErr", "Please enter your email address");
    } else {
      // Regular expression for basic email validation
      if (!email.includes("@")) {
        printError("emailErr", "Please enter a valid email address");
      } else {
        printError("emailErr", "");
        emailErr = false;
      }
    }
  
    // Validate mobile number
    if (mobile == "") {
      printError("mobileErr", "Please enter your mobile number");
    } else {
      var regex = /^[1-9]\d{9}$/;
      if (regex.test(mobile) === false) {
        printError("mobileErr", "Please enter a valid 10 digit mobile number");
      } else {
        printError("mobileErr", "");
        mobileErr = false;
      }
    }
  
    // Validate country
    if (country == "Select") {
      printError("countryErr", "Please select your country");
    } else {
      printError("countryErr", "");
      countryErr = false;
    }
  
    // Validate gender
    if (gender == "") {
      printError("genderErr", "Please select your gender");
    } else {
      printError("genderErr", "");
      genderErr = false;
    }

    if(qual == ""){
      printError("qualErr", "Please select your qualification");
    } else {
      printError("qualErr", "");
      qualErr = false;
    }

    // Validate course
    if (course == "") {
      printError("courseErr", "Please select your course");
    } else {
      printError("courseErr", "");
      courseErr = false;
    }

    // Validate terms
    if (terms == "") {
      printError("termsErr", "Please accept the terms and conditions");
    } else {
      printError("termsErr", "");
      termsErr = false;
    }

    // Validate comments
    if (comments == "") {
      printError("commentsErr", "Please enter your comments");
    } else {
      printError("commentsErr", "");
      commentsErr = false;
    }

  
    // Prevent the form from being submitted if there are any errors
    if ((nameErr || emailErr || mobileErr || countryErr || genderErr || qualErr || courseErr || termsErr || commentsErr) == true) {
      
      return false;
    } else {
      // Creating a string from input data for preview
      var dataPreview =
        "You've entered the following details: \n" +
        "Full Name: " +
        name +
        "\n" +
        "Email Address: " +
        email +
        "\n" +
        "Mobile Number: " +
        mobile +
        "\n" +
        "Country: " +
        country +
        "\n" +
        "Gender: " +
        gender +
        "\n" +
        "Qualification: " +
        qual +
        "\n" +
        "Course: " +
        course +
        "\n" +
        "Terms and Conditions: " +
        terms +
        "\n" +
        "Comments: " +
        comments;

      alert(dataPreview);
    }
  }
  