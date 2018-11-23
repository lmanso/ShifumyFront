// document.querySelector('.form-content input[type="submit"]').addEventListener('click', () => {
//     const input = document.querySelector('.form-content input[type="text"]');
//     if (input.value !== "") {
//         const value = input.value;
//         input.value = "";
//         console.log(value);

//         // On fait la requete
//         let xhttp = new XMLHttpRequest();
//         xhttp.onreadystatechange = () => {
//             if (this.readyState == 4 && this.status == 200) {
//                 debugger;
//             }
//         };
//         xhttp.open("GET", "http://192.168.33.14:8080", true);
//         xhttp.send();
//         // debugger;
//     }
// })

document.querySelector('.choices').addEventListener('click', (el) => {
    if(el.target.dataset.action !== undefined);
            let xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
              if (this.readyState == 4) {
                  console.log(this.responseText);
              }
          };
         xhttp.open("GET", "http://192.168.33.14:8080/move/" + el.target.dataset.action, true);
          xhttp.send();
          // debugger;
     });
