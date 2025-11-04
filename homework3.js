 /*
 Name: Axel Solano
 Course: MIS 3371
 File name: homework3.js
 Date created: 10/26/25
 Date updated:11/03/25
 Description: This is the JS document that provides the scripting for
 the date, range slider, error messages, field validations, and field input review for my homework3.html document.
 */
let error_flag = 0;

window.onload = function() {
  const dateElement = document.getElementById("today");
  const today = new Date();
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = today.toLocaleDateString('en-US', options);
  dateElement.textContent = formattedDate;
};

function returnInput() {
  var formcontents = document.getElementById("mainForm");
  var formoutput;
  var datatype;
  var i;
  formoutput = "<table class='output'><th>Dataname</th><th>Type</th><th>Value</th>";
    for (i = 0; i < formcontents.length; i++) {
      console.log("item: "+i+" "+formcontents.elements[i].name+" = "+formcontents.elements[i].value);
        {
          datatype = formcontents.elements[i].type;
          switch (datatype) {
            case "checkbox":
              if (formcontents.elements[i].checked) {
                formoutput = formoutput + "<tr><td align='right'>"+formcontents.elements[i].name+"</td>";
                formoutput = formoutput +"<td align='right'>"+ datatype + "</td>";
                formoutput = formoutput +"<td class='outputdata'>Checked</td></tr>";
                }
              break;
              case "radio":
                if (formcontents.elements[i].checked) {
                  formoutput = formoutput + "<tr><td align='right'>"+formcontents.elements[i].name+"</td>";
                  formoutput = formoutput +"<td align='right'>"+ datatype + "</td>";
                  formoutput = formoutput +"<td class='outputdata'>"+ formcontents.elements[i].value+"</td></tr>";
                  }
              break;
              case "button": case "submit": case "reset":
              break;
              default:
              let value = formcontents.elements[i].value;
              if (formcontents.elements[i].name === "uID") {
                value = value.toLowerCase();
                formcontents.elements[i].value = value;
                }
                formoutput = formoutput + "<tr><td align='right'>"+formcontents.elements[i].name+"</td>";
                formoutput = formoutput +"<td align='right'>"+ datatype + "</td>";
                formoutput = formoutput +"<td class='outputdata'>"+ formcontents.elements[i].value+"</td></tr>";
                }
    }
      }

       if (formoutput.length>0) { 
         formoutput = formoutput + "</table>";
         document.getElementById("inputValues").innerHTML = formoutput;
         }
    }

function fNameValidation() {
    x = document.getElementById("fname").value;
    if( x.length<2) { 
      document.getElementById("fname_message").innerHTML = "Invalid first name... too short.";  
      error_flag = 1;
      }
        else {
            if (x.match(/[a-zA-Z3-5'-]+$/)) {
              document.getElementById("fname_message").innerHTML = "";  
            }
            else  {
              document.getElementById("fname_message").innerHTML = "Invalid characters in first name.";
              error_flag = 1;
              }
        }
    }

function lNameValidation() {
        x = document.getElementById("lname").value;
        if( x.length<2) { 
              document.getElementById("lname_message").innerHTML = "Invalid last name... too short.";
              error_flag = 1;  
        }
        else {
            if (x.match(/[a-zA-Z3-5'-]+$/)) {
              document.getElementById("lname_message").innerHTML = "";  
            }
            else  {
              document.getElementById("lname_message").innerHTML = "Invalid characters in last name.";
              error_flag = 1;
              }
        }
    }

function miValidation() {
  x = document.getElementById("mi").value;
    if( x.length>0) { 
        if (x.match(/[a-zA-Z ]/)) {
          document.getElementById("mi_message").innerHTML = "";  
          }
          else {
            document.getElementById("mi_message").innerHTML = "Invalid middle initial.";
            error_flag = 1;
            }
        }
    }

function uIdValidator() {
  var x = document.getElementById("uID").value;
  var message = "";

    if (x.length === 0) {
      message = "User ID is required.";
      error_flag = 1;
     }

  else if (/^[0-9]/.test(x)) {
    message = "User ID cannot start with a number.";
    error_flag = 1;
  }
  
  else if (x.length < 5 || x.length > 20) {
    message = "User ID must be between 5 and 20 characters.";
    error_flag = 1;
  }
  
  else if (!/^[A-Za-z][A-Za-z0-9_-]*$/.test(x)) {
    message = "Only letters, numbers, dash, and underscore allowed.";
    error_flag = 1;
  }
  
  else {
    message = "";
  }
  document.getElementById("uID_message1").innerHTML = message; 
  }

function emailValidator() {
  var x = document.getElementById("email").value;
  var message = "";

  if (x.length === 0) {
    message = "Email is required.";
    error_flag = 1;
  }
  
  else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,20}$/.test(x)) {
    message = "Invalid email format. Use name@domain.tld";
    error_flag = 1;
  }

  else {
    message = "";
  }

  document.getElementById("email_message1").innerHTML = message;
}

function pwordValidator() {
  var passwordoutput;
  var passwordinput = document.getElementById("pword").value;
  var userid = document.getElementById("uID").value;
  console.log(passwordinput);
    
    if(passwordinput.search(/[a-z]/) < 0 ) {
      passwordoutput = "Enter at least 1 lower case letter.";
      error_flag = 1;
    } else {
      passwordoutput = "";
    }
    document.getElementById("password_message1").innerHTML = passwordoutput;
    
    if(passwordinput.search(/[A-Z]/)< 0)  {  
      passwordoutput = "Enter at least 1 upper case letter.";
      error_flag = 1;
    } else {
      passwordoutput = "";
    }
    document.getElementById("password_message2").innerHTML = passwordoutput;
  
   if(passwordinput.search(/[0-9]/)<0 ) {   
    passwordoutput = "Enter at least 1 number.";
    error_flag = 1;
    } else {
    passwordoutput = "";
    }
    document.getElementById("password_message3").innerHTML = passwordoutput;
    
   if(passwordinput.search(/[!\@#\$%&*\-_\\.+\(\)]/)<0 ) {   
    passwordoutput = "Enter at least 1 special character.";
    error_flag = 1;
    } else {
    passwordoutput = "";
    }
    document.getElementById("password_message4").innerHTML = passwordoutput;
  
  if(passwordinput.length < 8) {
      passwordoutput = "Enter a Minimum 8 characters.";
      error_flag = 1;
  } else {
      passwordoutput = "";
  }
    document.getElementById("password_message5").innerHTML = passwordoutput;

  if (passwordinput.toLowerCase() === userid.toLowerCase() && userid !== "") {
    passwordoutput = "Password cannot be the same as your User ID.";
    error_flag = 1;
    } else {
      passwordoutput = "";
    }
    document.getElementById("password_message6").innerHTML = passwordoutput;
  }

function cpwordValidator() {
  x=document.getElementById("pword").value;
  y=document.getElementById("cpword").value;
    if ( x==y ) 
    {
      document.getElementById("cpword_msg").innerHTML = "";
    } else  
      {
         document.getElementById("cpword_msg").innerHTML = "Passwords DO NOT match!";
         error_flag = 1;
      }
    }

function genderValidator() {
  const genderOptions = document.getElementsByName("sex");
  const genderMessage = document.getElementById("gender_msg");
  let selected = false;

  for (let i = 0; i < genderOptions.length; i++) {
    if (genderOptions[i].checked) {
      selected = true;
      break;
     }
    }
  
  if (!selected) {
        genderMessage.innerHTML = "Please select a gender option.";
        error_flag = 1;
    } else {
        genderMessage.innerHTML = "";
    }
}

function bDayValidation() {
  const birthdateInput = document.getElementById("bday");
  var bdayValue = birthdateInput.value;
  const today = new Date();
  const maxDate = today.toISOString().split('T')[0];
  
  const minDateLimit = new Date();
  minDateLimit.setFullYear(today.getFullYear() - 120);
  const minDate = minDateLimit.toISOString().split('T')[0];

  birthdateInput.setAttribute('max', maxDate);
  birthdateInput.setAttribute('min', minDate);

  const messageElement = document.getElementById("bday_message");
  var message = "";

  if (bdayValue.length === 0) {
    message = "Birthday is required.";
    error_flag = 1;
  } 
  else {
    var enteredDate = new Date(bdayValue);

    if (enteredDate > today) {
      message = "Birthday cannot be in the future.";
      error_flag = 1;
    } 
    else if (enteredDate < minDateLimit) {
      message = "Birthday cannot be more than 120 years ago.";
      error_flag = 1;
    } 
    else {
      message = "";
    }
  }

  messageElement.innerHTML = message;
}

function ssnValidation() {
  const ssnInput = document.getElementById("ssn");
  const message = document.getElementById("ssn_message");
  let digits = ssnInput.value.replace(/\D/g, "");

    if (digits.length > 3 && digits.length <= 5) {
    ssnInput.value = digits.slice(0, 3) + "-" + digits.slice(3);
  } else if (digits.length > 5) {
    ssnInput.value = digits.slice(0, 3) + "-" + digits.slice(3, 5) + "-" + digits.slice(5, 9);
  } else {
    ssnInput.value = digits;
  }

  if (digits.length === 0) {
    message.textContent = "";
  } else if (!/^\d+$/.test(digits)) {
    message.textContent = "SSN must contain only numbers.";
    error_flag = 1;
  } else if (digits.length !== 9) {
    message.textContent = "SSN must be exactly 9 digits.";
    error_flag = 1;
  } else {
    message.textContent = "";
  }

  return !error_flag;
}

function ad1Validation() {
x = document.getElementById("ad1").value;
console.log(x.value);
console.log(x.length);
  if (x.length < 2 ) {  
      document.getElementById("ad1_message").innerHTML = "Address line 1 must be at least 2 characters.";  
      error_flag = 1; 
      console.log(error_flag);
      }
      else { 
          document.getElementById("ad1_message").innerHTML = "";  
      }
      console.log(document.getElementById("ad1_message").innerHTML);
}

function ad2Validation() {
x = document.getElementById("ad2").value;
  if (x.length === 0) {
    document.getElementById("ad2_message").innerHTML = "";
  } 
  else if (x.length < 2) {
    document.getElementById("ad2_message").innerHTML = "Address line 2 must be at least 2 characters if entered.";
    error_flag = 1;
  } 
  else {
    document.getElementById("ad2_message").innerHTML = "";
  }
}

function cityValidator() {
  var x = document.getElementById("city").value;

  if (x.length < 2) {
    document.getElementById("city_msg").innerHTML = "City name must be at least 2 characters.";
    error_flag = 1;
  } 
  else if (!x.match(/^[ a-zA-Z3-5'-]+$/)) {
    document.getElementById("city_msg").innerHTML = "Invalid characters in City name.";
    error_flag = 1;
  } 
  else {
    document.getElementById("city_msg").innerHTML = "";
  }
}

function stateValidator() {
  x=document.getElementById("state").value;
        if(x=="") { 
              document.getElementById("state_msg").innerHTML = "Please choose a state.";  
              error_flag = 1;
        }
        else {
          document.getElementById("state_msg").innerHTML = ""; 
        }
}

function zipValidator() {
  var zip = document.getElementById("zip").value;
  var message = "";

  if (zip.length === 0) {
    message = "Zip Code is required.";
    error_flag = 1;
  } 
  else if (!/^\d{5}$/.test(zip)) {
    message = "Zip Code must be exactly 5 digits.";
    error_flag = 1;
  } 
  else {
    message = "";
  }
  document.getElementById("zip_msg").innerHTML = message;
}

function phoneValidator() {
  var phoneInput = document.getElementById("phone");
  var messageElement = document.getElementById("phone_message");
  var x = phoneInput.value.replace(/\D/g, "");
  var message = "";

  if (x.length > 0) {
    if (x.length <= 3) {
      phoneInput.value = "(" + x;
    } else if (x.length <= 6) {
      phoneInput.value = "(" + x.substring(0, 3) + ") " + x.substring(3);
    } else if (x.length <= 10) {
      phoneInput.value = "(" + x.substring(0, 3) + ") " + x.substring(3, 6) + "-" + x.substring(6);
    } else {
      phoneInput.value = "(" + x.substring(0, 3) + ") " + x.substring(3, 6) + "-" + x.substring(6, 10);
    }
  }

  if (x.length < 10) {
    message = "Please enter a valid phone number.";
    error_flag = 1;
  } else {
    message = "";
  }
  messageElement.innerHTML = message;
}

function selectInscValidator() {
  const insuranceOptions = document.getElementsByName("haveInsurance");
  const insuranceMessage = document.getElementById("insurance_msg");
  let selected = false;

  for (let i = 0; i < insuranceOptions.length; i++) {
    if (insuranceOptions[i].checked) {
      selected = true;
      break;
     }
    }
  
  if (!selected) {
        insuranceMessage.innerHTML = "Please choose if you have insurance or not.";
        error_flag = 1;
    } else {
        insuranceMessage.innerHTML = "";
    }
}

function mainFormValidator() {
  error_flag = 0;
  const emailField = document.getElementById("email");
  emailField.value = emailField.value.toLowerCase();
  fNameValidation();
  lNameValidation();
  miValidation();
  uIdValidator();
  emailValidator();
  pwordValidator();
  cpwordValidator();
  genderValidator();
  bDayValidation();
  ssnValidation();
  ad1Validation();
  ad2Validation();
  cityValidator();
  stateValidator();
  zipValidator();
  phoneValidator();
  selectInscValidator();

  const errorMsgs = document.querySelectorAll("td[id$='_message'], td[id$='_msg']");
    errorMsgs.forEach(msg => {
        if (msg.textContent.trim() !== "") {
            error_flag = 1;
        }
    });
  const submitBtn = document.getElementById("sub");
  if (error_flag === 0) {
        submitBtn.disabled = false;
        alert("All fields validated successfully! You may now submit the form.");
    } else {
        submitBtn.disabled = true;
        alert("Some fields contain errors. Please correct them before submitting.");
    }
}

document.addEventListener("DOMContentLoaded", function() {
  const slider = document.getElementById("severity");
  const output = document.getElementById("rangedisplay");

  if (slider && output) {
    output.textContent = slider.value;
    slider.addEventListener("input", function() {
      output.textContent = this.value;
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  fetch("states.xml")
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to load states.xml");
      }
      return response.text();
    })
    .then(data => {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(data, "application/xml");
      const states = xmlDoc.getElementsByTagName("state");
      const stateSelect = document.getElementById("state");

      for (let i = 0; i < states.length; i++) {
        const code = states[i].getAttribute("code");
        const name = states[i].textContent;
        const option = document.createElement("option");
        option.value = code;
        option.textContent = name;
        stateSelect.appendChild(option);
      }
    })
    .catch(error => console.error("Error loading states:", error));
});