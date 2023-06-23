    // JavaScript code for form validation
	    // Prevent form from submitting
      const submitButton = document.querySelector('button[type="submit"]');

      document.getElementById('myForm').addEventListener('submit', function(event) {
        let name = document.getElementById('inputField').value;
      
        if (name === '') {
          alert('Name is required!');
          event.preventDefault();
        }
      });

      // Retrieve the input field value
      let formInput = document.getElementById('inputField');
      let fieldValue = formInput.value;

      // Regular expression pattern for alphanumeric input
      // Invalid input: display error message
      function validateText() {
        let sureText = document.getElementById('inputField').value;
        let regex = /^[a-zA-Z0-9]*$/;
        if (!regex.test(sureText)) {
          alert('Invalid text format!');
        }
      }

      // Check if the input value matches the pattern

        // Valid input: display confirmation and submit the form
        function textValid() {
          let realText = document.getElementById('inputField').value;
          let regex = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
          if (!regex.test(realText)) {
            alert('Text is correct, form submitted.');
          }
        }
