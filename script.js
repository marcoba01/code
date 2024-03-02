function validate() {
  // Validate required fields
  if (!document.getElementById("first_name").value) {
    alert("First name is required");
    return false;
  }

  if (!document.getElementById("last_name").value) {
    alert("Last name is required");
    return false;
  }

  // Validate password
  var password = document.getElementById("password").value;
  if (password.length > 8) {
    alert("Password must be 8 characters or less");
    return false;
  }
  if (!password.match(/[A-Z]/)) {
    alert("Password must contain 1 uppercase letter");
    return false;
  }
  if (!password.match(/[^A-Za-z0-9]/)) {
    alert("Password must contain 1 special character");
    return false;
  }
  if (!password.match(/[0-9]/)) {
    alert("Password must contain 1 number");
    return false;
  }

  // Validate ID
  var id = document.getElementById("id").value;
  if (id.length != 5) {
    alert("ID must be 5 digits");
    return false;
  }

  // Validate phone
  var phone = document.getElementById("phone").value;
  var regex = /^\d{10}$|^\d{3}[\s-]\d{3}[\s-]\d{4}$/;
  if (!regex.test(phone)) {
    alert("Invalid phone number format");
    return false;
  }

  // Validate email if checked
  if (document.getElementById("emailConfirm").checked) {
    var email = document.getElementById("email").value;
    if (!email.match(/.+@.+\..{3,6}$/)) {
      alert("Invalid email format");
      return false;
    }
  }

  // If all valid, call verify function
  return verify();
}

function verify() {
  // Mock verification
  var validUsers = [
    {
      firstName: "John",
      lastName: "Doe",
      id: "12345",
      password: "Jd12$2",
      phone: "123-456-7890",
      email: "john@hhh.com"
    },
    {
      firstName: "Jane",
      lastName: "Doe",
      id: "23456",
      password: "Jd23$3",
      phone: "234-567-8901",
      email: "jane@hhh.com"
    },
    {
      firstName: "Alice",
      lastName: "Smith",
      id: "34567",
      password: "As12$4",
      phone: "345-678-9012",
      email: "alice@hhh.com"
    },
    {
      firstName: "Bob",
      lastName: "Johnson",
      id: "45678",
      password: "Bj12$5",
      phone: "456-789-0123",
      email: "bob@hhh.com"
    },
    {
      firstName: "Charlie",
      lastName: "Brown",
      id: "56789",
      password: "Cb12$6",
      phone: "567-890-1234",
      email: "charlie@hhh.com"
    },
    {
      firstName: "David",
      lastName: "Williams",
      id: "67890",
      password: "Dw12$7",
      phone: "678-901-2345",
      email: "david@hhh.com"
    },
    {
      firstName: "Eef{code}ve",
      lastName: "Davis",
      id: "78901",
      password: "Ed12$8",
      phone: "789-012-3456",
      email: "eve@hhh.com"
    },
    {
      firstName: "Frank",
      lastName: "Miller",
      id: "89012",
      password: "Fm12$9",
      phone: "890-123-4567",
      email: "frank@hhh.com"
    },
    {
      firstName: "Grace",
      lastName: "Thomas",
      id: "90123",
      password: "Gt12$10",
      phone: "901-234-5678",
      email: "grace@hhh.com"
    },
    {
      firstName: "Harry",
      lastName: "Anderson",
      id: "01234",
      password: "Ha12$11",
      phone: "123-456-7890",
      email: "harry@hhh.com"
    }
  ];

  var firstName = document.getElementById("first_name").value;
  var lastName = document.getElementById("last_name").value;
  var id = document.getElementById("id").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;

  var userIndex = validUsers.findIndex(
    (user) =>
      user.firstName === firstName &&
      user.lastName === lastName &&
      user.id === id &&
      user.phone === phone &&
      user.email === email
  );

  if (userIndex === -1) {
    alert("User " + firstName + " " + lastName + " not found. Please try again");
    return false;
  }

  let selectedTransaction = document.getElementById("transaction");
  let transactionName = selectedTransaction.options[selectedTransaction.selectedIndex].text;
  let alertMsg = "Welcome " + firstName + " " + lastName + "! Selected: " + transactionName;
  alert(alertMsg);
  return true;
}
