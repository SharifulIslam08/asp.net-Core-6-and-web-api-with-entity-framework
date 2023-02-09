// console.log("hello");
// //var table = document.getElementById("display");
// fetch("https://localhost:7015/api/Orders")
// .then(res => res.json())
// .then(data =>{console.log(data)})
// .catch(Error => {console.log(Error)})
// // .then(data => {
// //     data.forEach(order => {
// //         var op = document.createElement("tr");
// //         //console.log(op);
// //         op.innerHTML = `
// //             <td>${order.quantity}</td>
// //             <td>${weather.rate}</td>
// //             <td>${weather.customer_name}</td>
// //             <td>${weather.mode_of_transport}</td>
// //         `;
// //         //console.log(op);
// //         document.getElementById("display").appendChild(op);
// //     });
// // })
// function show()
// {
//     fetch("https://localhost:7015/api/Orders")
//     .then(res => res.json())
//     //.then(data =>{console.log(data)})
//     .then(data => {
//         data.forEach(order => {
//             var op = document.createElement("tr");
//             //console.log(op);
//             op.innerHTML = `
//                 <td>${order.quantity}</td>
//                 <td>${order.rate}</td>
//                 <td>${order.customer_name}</td>
//                 <td>${order.mode_of_transport}</td>
//             `;
//             //console.log(op);
//             document.getElementById("display").appendChild(op);
//         });
//     })
//     .catch(Error => {console.log(Error)})
// }