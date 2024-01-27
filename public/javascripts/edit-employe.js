document.getElementById("myForm").addEventListener("submit", function(event) {
    var isValid = true;
  
    // Validate name
    var name = document.getElementById("name").value;
    var nameError = document.getElementById("nameError");
    if (name === "") {
      nameError.textContent = "Name is required";
      isValid = false;
    } else {
      nameError.textContent = "";
    }
  
  // Validate email
    var email = document.getElementById("email").value;
    var emailError = document.getElementById("emailError");
    if (email === "") {
      emailError.textContent = "Email is required";
      isValid = false;
    } else {
      emailError.textContent = "";
    }
  
  // Validate phone
  var phone = document.getElementById("phone").value;
    var phoneError = document.getElementById("phoneError");
    if (phone === "") {
      phoneError.textContent = "Phone No is required";
      isValid = false;
    } else {
      phoneError.textContent = "";
    }
    
    // Validate designation
    var designation = document.getElementById("designation").value;
    var designationError = document.getElementById("designationError");
    if (designation === "") {
      designationError.textContent = "Designation is required";
      isValid = false;
    } else {
      designationError.textContent = "";
    }
  
    // Validate dob
    var dob = document.getElementById("dob").value;
    var dobError = document.getElementById("dobError");
    if (dob === "") {
      dobError.textContent = "dob is required";
      isValid = false;
    } else {
      dobError.textContent = "";
    }
 
  if (!isValid) {
      event.preventDefault(); // Prevent form submission if there are validation errors
    }
  });