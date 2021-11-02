const http = require('http'); 


// creating a server
const server = http.createServer((req, res) => {
    if (req.url==='/') {
    res.write('Hello Programmers!')
    res.end()
    } else if( req.url === '/about'){
        res.write('Hello About US!')
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