    // Showing the password text when clicked
    function reveal()
        {
            if(document.getElementById('box').checked) {
                document.getElementById("password").type='text';
            }
            else {
                document.getElementById("password").type='password';
            }
        }