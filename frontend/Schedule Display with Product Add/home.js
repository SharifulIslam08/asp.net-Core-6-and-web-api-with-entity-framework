fetch("https://localhost:7015/api/Orders")
  .then((response) => response.json())
  .then((person1) => {
    console.log(person1);

    // work with fetched json data

    loop();
    function loop() {
      var i = 0;
      var k = 5;
      var p = 0;
      slide(i, k, p);
      function slide(j, x, p) {
        if (p > 4) {
          p = 0;
        } else {
          p = p + 1;
        }
        var q = 0;
        for (j; j < x; j++) {
          var id = document.getElementById("id" + q);
          id.innerHTML = person1[j].customer_name;
          document.getElementById("name" + q).innerHTML = person1[j].mode_of_transport;
          var did = document.getElementById("email" + q).innerHTML = person1[j].delivery_date;
          document.getElementById("phone" + q).innerHTML = person1[j].order_staus;
          document.getElementById("address" + q).innerHTML =
            person1[j].destination_country;

          // ------- Date Checker ------------

          const today = new Date();
          let tomorrow = new Date();
          tomorrow.setDate(today.getDate() + 1);

          //  -------------  Date based Color Changer

          if (today.toDateString() === new Date(did).toDateString()) {
            console;
            // document.getElementById("row" + q).style.color = "white";
            document.getElementById("id" + q).style.background = "red";
            document.getElementById("name" + q).style.background = "red";
            document.getElementById("email" + q).style.background = "red";
            document.getElementById("phone" + q).style.background = "red";
            document.getElementById("address" + q).style.background = "red";
            document.getElementById("id" + q).style.color = "white";
            document.getElementById("name" + q).style.color = "white";
            document.getElementById("email" + q).style.color = "white";
            document.getElementById("phone" + q).style.color = "white";
            document.getElementById("address" + q).style.color = "white";
          } else if (tomorrow.toDateString() === new Date(did).toDateString()) {
            // document.getElementById("row" + q).style.color = "black";
            document.getElementById("id" + q).style.background = "yellow";
            document.getElementById("name" + q).style.background = "yellow";
            document.getElementById("email" + q).style.background = "yellow";
            document.getElementById("phone" + q).style.background = "yellow";
            document.getElementById("address" + q).style.background = "yellow";
            document.getElementById("id" + q).style.color = "black";
            document.getElementById("name" + q).style.color = "black";
            document.getElementById("email" + q).style.color = "black";
            document.getElementById("phone" + q).style.color = "black";
            document.getElementById("address" + q).style.color = "black";
          } else {
            // document.getElementById("row" + j).style.color = "white";
            // document.getElementById("row" + q).style.color = "red";
            // console.log("row" + q);
            document.getElementById("id" + q).style.background = "black";
            document.getElementById("name" + q).style.background = "black";
            document.getElementById("email" + q).style.background = "black";
            document.getElementById("phone" + q).style.background = "black";
            document.getElementById("address" + q).style.background = "black";
            document.getElementById("id" + q).style.color = "white";
            document.getElementById("name" + q).style.color = "white";
            document.getElementById("email" + q).style.color = "white";
            document.getElementById("phone" + q).style.color = "white";
            document.getElementById("address" + q).style.color = "white";
          }
          q++;
          //console.log(q);
        }

        // console.log(person1.length);
        if (person1.length <= x) {
          j = 0;
          x = 5;
          p = 0;

          setTimeout(function () {
            slide(j, x, p);
          }, 3000);
        } else {
          j = p + 0;
          x = p + 5;

          setTimeout(function () {
            slide(j, x, p);
          }, 3000);
        }
      }
    }
  });
// console.log(person1[0]);

// date check

// function isToday(date) {
//   const today = new Date();

//   // 👇️ Today's date
//   // console.log(today);

//   if (today.toDateString() === date.toDateString()) {
//     // document.getElementById("id" + i).style.color = "red";
//     document.getElementById("id0").style.color = "red";
//     return true;
//   }

//   return false;
// }

// // console.log(isToday(new Date())); // 👉️ true
// console.log(isToday(new Date("2023-02-06"))); //
// // console.log(isToday(new Date(person1[0].id))); //
