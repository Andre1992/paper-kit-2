function sendEmail(event) {
    // Prevent the form from being submitted normally
    event.preventDefault();

    // Get the form from the button's form property
    var form = event.target.form;

    // Get the form data
    var formData = new FormData(form);

    // Send a POST request to the server
    fetch('http://localhost:3000/send-email', {
        method: 'POST',
        body: JSON.stringify({
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message')
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => {
        // Handle the response
        console.log(response);
    }).catch(error => {
        // Handle the error
        console.error(error);
    });
}

document.getElementById('emailForm').addEventListener('submit', sendEmail);