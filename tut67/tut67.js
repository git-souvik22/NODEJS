const http = require('http');
const fs =  require('fs');

const hostname = '127.0.0.1';
const port = 3000;
const home = fs.readFileSync('home.html');
const about = fs.readFileSync('about.html');
const services = fs.readFileSync('services.html');
const contact = fs.readFileSync('contact.html');

const server = http.createServer((req, res)=>{
    console.log(req.url);
    url = req.url;

    const data = fs.readFileSync(`${__dirname}/userapi.json`, "utf-8")
    const objData = JSON.parse(data);

    res.statusCode = 200;
    res.setHeader('Content-type','text/html');
    if(url == '/'){
        res.end(home);
    }
    else if(url =='/ABOUT'){
        res.end(about);
    }
    else if(url =='/SERVICES'){
        res.end(services);
    }
    else if(url =='/CONTACT'){
        res.end(contact);
    }

    else if(url =='/userapi'){
        res.writeHead(200, {"Content-Type": "application/json"});
        res.end(objData[2].firstName);
        }
    
    else{
        res.statusCode = 404;
        res.end("<h1> 404 not Found </h1>");
    }

})

server.listen(port, hostname, ()=>{
    console.log(`Server is running at http://${hostname}:${port}/`);
});