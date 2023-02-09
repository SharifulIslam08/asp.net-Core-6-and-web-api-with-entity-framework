//search
function searchbyid()
{
    const id = document.getElementById("id-key").value;
    //console.log(id);
    // fetch('https://localhost:7099/api/Contacts/${id}')
    // .then(res => res.json())
    // .then(data => console.log(data))
    // .catch(err => console.log(err));
    fetch(`https://localhost:7015/api/Orders/${id}`)
  .then(response => {
    if (!response.ok) {
      console.log("Network response was not ok");
    }
    return response.json();
  })
  .then(data => {
    // Do something with the data
    console.log(data);
    for (const [fieldName, fieldValue] of Object.entries(data)) {
        const inputField = document.getElementById(fieldName);
        //console.log(fieldValue);
        console.log(fieldName);
        if (inputField) {
          inputField.value = fieldValue;
          //console.log(fieldValue);
        }
      }
  })
  .catch(error => {
    console.log("There was a problem with the fetch operation:", error);
  });
}

//update list
const putform = document.getElementById("update_order-form");
putform.addEventListener('submit', function(event){
    event.preventDefault();
    const editformData =new FormData(putform);
    const editdata = Object.fromEntries(editformData);
    console.log(editdata);
    fetch(`https://localhost:7015/api/Orders/${editdata.orderid}`, {
        method: "PUT",
        headers:{
            'content-Type': 'application/json'
        },
        body: JSON.stringify(editdata)
    })
    .then(res => res.json())
    .then(data => {
      location.href ="/home.html";
    })
    .catch(err => console.log(err));
})

//delete
function deletebyid()
{
    const id = document.getElementById("id-key").value;
    //console.log(id);
    // fetch('https://localhost:7099/api/Contacts/${id}')
    // .then(res => res.json())
    // .then(data => console.log(data))
    // .catch(err => console.log(err));
    fetch(`https://localhost:7015/api/Orders/${id}`,{
        method:"DELETE"
    })
  .then(response => {
    if (!response.ok) {
      console.log("Network response was not ok");
    }
    return response.json();
  })
  .then(data => {
    // Do something with the data
    console.log("success",data);
    // for (const [fieldName, fieldValue] of Object.entries(data)) {
    //     const inputField = document.getElementById(fieldName);
    //     //console.log(fieldValue);
    //     //console.log(fieldName);
    //     if (inputField) {
    //       inputField.value = fieldValue;
    //       //console.log(fieldValue);
    //     }
    //   }
  })
  .catch(error => {
    console.log("There was a problem with the fetch operation:", error);
  });
}