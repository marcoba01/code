function validate() {

    // Validate required fields
  if(!document.getElementById("first\_name").value) {
      alert("First name is required");
      return false;
    }
  
    if(!document.getElementById("last\_name").value) {
      alert("Last name is required");
      return false;
    }  
  
    // Validate password
    var password = document.getElementById("password").value;
    if(password.length > 8) {
      alert("Password must be 8 characters or less");
      return false;
    }
    if(!password.match(/[A-Z]/)) {
      alert("Password must contain 1 uppercase letter");
      return false;
    }
    if(!password.match(/[^A-Za-z0-9]/)) {
      alert("Password must contain 1 special character");
      return false;
    }
    if(!password.match(/[0-9]/)) {
      alert("Password must contain 1 number");
      return false;
    }
  
    // Validate ID
    var id = document.getElementById("id").value;
    if(id.length != 5) {
      alert("ID must be 5 digits");
      return false;
    }
  
    // Validate phone
    var phone = document.getElementById("phone").value;
    var regex = /^\d{10}$|^\d{3}[\s-]\d{3}[\s-]\d{4}$/;
    if(!regex.test(phone)) {
      alert("Invalid phone number format");
      return false;
    }
  
    // Validate email if checked
    if(document.getElementById("emailConfirm").checked) {
      var email = document.getElementById("email").value;
      if(!email.match(/.+@.+\..{3,6}$/)) {
        alert("Invalid email format");
        return false;
      }
    }
  
    // If all valid, call verify function
    verify();
  
    return false; // Prevent form submit
  }
  
  function verify() {
    
    // Mock verification
    var validUser = [{
        firstName: "John",
        lastName: "Doe",
        id: "12345",
        password: "jd12$2",
        phone: "123-456-7890",
        email: "john@hhh.com"
      },
      {
        firstName: "Jane",
        lastName: "Doe",
        id: "23456",
        password: "jd1*23",
        phone: "234-567-8901",
        email: "jane@hhh.com"
      },
      {
        firstName: "Bob",
        lastName: "Smith",
        id: "34567",
        password: "bs@124",
        phone: "345-678-9012",
        email: "bob@hhh.com"
      },
      {
        firstName: "Sara",
        lastName: "Jones",
        id: "45678",
        password: "s0&25",
        phone: "456-789-0123",
        email: "sara@hhh.com"
      },
      {
        firstName: "Tom",
        lastName: "Baker",
        id: "56789",
        password: "T2@62b",
        phone: "567-890-1234",
        email: "tom@hhh.com"
      },
      {
        firstName: "Karen",
        lastName: "Miller",
        id: "67890",
        password: "k7m92",
        phone: "678-901-2345",
        email: "karen@hhh.com"
      },
      {
        firstName: "Mark",
        lastName: "Davis",
        id: "78901",
        password: "md12$8",
        phone: "789-012-3456",
        email: "mark@hhh.com" 
      },
      {
        firstName: "Lisa",
        lastName: "Garcia",
        id: "89012",
        password: "lg12$9",
        phone: "890-123-4567",
        email: "lisa@hhh.com"
      },
      {
        firstName: "Chris",
        lastName: "Rodriguez",
        id: "90123",
        password: "c$r121",
        phone: "901-234-5678",
        email: "chris@hhh.com"
      },
      {
        firstName: "Laura",
        lastName: "Martinez",
        id: "01234",
        password: "lm12$1",
        phone: "012-345-6789",
        email: "laura@hhh.com"
      }
    ];
  
    var firstName = document.getElementById("first_name").value;
    var lastName = document.getElementById("last_name").value;
    var id = document.getElementById("id").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
  
    if(firstName !== validUser.firstName || 
       lastName !== validUser.lastName ||
       id !== validUser.id ||
       phone !== validUser.phone ||
       email !== validUser.email) {
      alert("User " + firstName + " " + lastName + " not found. Please try again");
      return false;
    }
  
    let selectedTransaction = document.getElementById("transaction");
    let transactionName = selectedTransaction.options[selectedTransaction.selectedIndex].text;
    let alertMsg = "Welcome " + firstName + " " + lastName + "! Selected:" + transactionName;
    alert(alertMsg);
    return true;
  }
  