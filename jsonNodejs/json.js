const fs = require('fs');

const bioData = {
    name: "souvik",
    age: 21,
    profession: "coding"
};

// 1. convert to JSON => done
// 2. add to another file => done
// 3. readfile => done
// 4. again covert back the data to js obj => done
// 5. console.log => done

const jsonData = JSON.stringify(bioData);

// fs.writeFile('jsonFile.json', jsonData,  (err) => {
//     console.log("done");
// });

// fs.readFile('jsonFile.json', "UTF-8", (err, data) =>{
//     console.log(err);
//     console.log(data);
// });

fs.readFile("jsonFile.json", "UTF-8", (err, data) =>{
    const orgData = JSON.parse(data);
    console.log(data);
    console.log(orgData);
})


