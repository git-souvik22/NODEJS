const http = require('http');
const fs = require('fs');

const port = 8000;
const hostname = "127.0.0.1";

const server = http.createServer();

server.on("request", (req, res) =>{
    // fs.readFile('input.txt', (err, data) =>{
    //     if(err) return console.error(err);
    //     res.end(data);
    // });
        // 2nd way
    // const rstream = fs.createReadStream('input.txt');
    // rstream.on("data", (chunkdata)=>{
    //     res.write(chunkdata);
    // })
    // rstream.on("end", () =>{
    //     res.end();
    // })
    // rstream.on("error", (err) =>{
    //     console.log(err);
    //     res.end("File not Found");
    // })
    // 3rd way 
    const rstream = fs.createReadStream('input.txt');
    rstream.pipe(res);

    })

server.listen(port, hostname, () => {
    console.log(`The server is running at ${hostname}:${port}`);
});