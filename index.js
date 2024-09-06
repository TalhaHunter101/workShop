const fs = require("fs");

function demoTest() {
  console.log("test");
  const obj = {
    name: "GIthub 101",
    mode: "online",
    purpose: " learning",
    price: 0,
  };

  const jsonString = JSON.stringify(obj, null, 2);
    fs.writeFileSync("demo.json", jsonString);
    

    
}

demoTest();
