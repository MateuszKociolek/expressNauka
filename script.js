document.getElementById("myForm").addEventListener('submit', function(e) {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    console.log(`Username: ${username}, Password: ${password}`)
    fetch(`http://localhost:3000/login/${username}/${password}`)
    .then(function(res){
        if(res.ok) {
            console.log("Wszystko ok")
            return res.json()
        }else{
            throw new Error("Wystąpił błąd sieciowy.")
        }
    })
    .then(function(data) {
        console.log(data)
    })
    .catch(function(error) {
        console.log(error)
    })
});