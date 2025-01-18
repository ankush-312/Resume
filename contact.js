emailjs.init("920z3Ac3W7GjqukBe"); // Use the Public Key here


document.getElementById('msg').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Send the form using EmailJS
    emailjs.sendForm('service_z2e22cv', 'template_aibis2o', this)
      .then(function() {
        alert('Email sent successfully!');
      }, function(error) {
        alert('Failed to send email: ' + JSON.stringify(error));
      });
  });
  