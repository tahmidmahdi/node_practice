const http = require('http'); 


// creating a server
const server = http.createServer((req, res) => {
    if (req.url==='/') {
    res.write('<html><head><title>From</title></head></html>')
    res.write(
        '<body><form method="post" action="/process"><input name="message" /></form></body>'
    );
    res.end()
    } else if( req.url === '/process' && req.method === "POST"){
        const body = []
        req.on('data', (chunk) => {
            // console.log(chunk.toString());
            body.push(chunk)
        })
        req.on('end', () => {
            console.log('FInished Stream!')
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody)
        })
        res.write('Thank you for submitting!')
        res.end()
    }
    else{
        res.write('Not Found!')
        res.end()
    }
});

const PORT = 9000;
server.listen(PORT, function() {
    console.log(`Listening on port ${PORT}`)
})

// const fs = require('fs');

// const ourReadStream = fs.createReadStream(`${__dirname}/bigdata.txt`);

// ourReadStream.on('data', (chunk) => {
//     console.log(chunk.toString())
// })

// console.log("hello")
