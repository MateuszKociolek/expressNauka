function showData(){
    fetch("http://localhost:3000/allusers")
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
    .catch(err =>{
        console("Error:",err);
    })
}