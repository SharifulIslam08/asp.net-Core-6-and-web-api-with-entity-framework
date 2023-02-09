//add list
const orderform = document.getElementById("add_producs-form");
//console.log(orderform);
orderform.addEventListener('submit', e=>{
    e.preventDefault();
    const orderformData =new FormData(orderform);
    const orderdata = Object.fromEntries(orderformData);
    console.log(orderdata);
    fetch('https://localhost:7015/api/Orders', {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(orderdata)
    })
    .then(res => res.json())
    .then(data => {
        location.href ="/home.html";
    })
    .catch(err => console.log(err));
})