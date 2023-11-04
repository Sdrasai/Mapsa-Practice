const fs = require("fs");

// (async function getData() {
//   try {
//     const urlFs = fs.readFile("./input.txt", "utf-8", (err, data) => {
//       console.log(data);
//     });
//     const res = await fetch(urlFs);
//     const data = await res.json();
//     const myJSON = JSON.stringify(data);
//     result = "";
//     for (const items of myJSON) {
//       result += `${items}`;
//     }
//     fs.writeFile("userId.txt", result, (err) => {
//       if (err) {
//         console.log("Error: ");
//       } else {
//         console.log("Done!");
//       }
//     });
//   } catch (err) {
//     console.log(err);
//   }
// })();

(async function getData() {
  fs.readFile("./input.txt", "utf-8", (err, url) => {
    if (err) {
      console.log("readFile Error...");
    }
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const myJSON = JSON.stringify(data);
        result = "";
        for (const items of myJSON) {
          result += items;
        }
        fs.writeFile("./userId.txt", result, (err) => {
          if (err) {
            console.log("writFile Erorr...");
          }
          console.log("Done!");
        });
      })
      .catch((err) => {
        console.log(err);
      });
  });
})();
