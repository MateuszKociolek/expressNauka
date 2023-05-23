document.getElementById("newUserForm").addEventListener('submit', function(e){

    var newuser = document.getElementById('newUser');
    var newpass = document.getElementById('newPassword')

    fetch('/createNewAccount', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          newUser: newuser,
          newPassword: newpass
        })
      })
        .then(response => {
          if (response.ok) {
            return response.text(); // Jeśli otrzymasz odpowiedź 2xx, pobierz treść odpowiedzi
          } else {
            throw new Error('Network response was not ok.');
          }
        })
        .then(data => {
          console.log(data); // Wyświetl treść odpowiedzi
        })
        .catch(error => {
          console.log('Error:', error.message);
        });
});