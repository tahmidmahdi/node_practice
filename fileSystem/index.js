const http = require('http'); 
const fs = require('fs'); 

// creating a server
const server = http.createServer((req, res) => {
   const myReadStream = fs.createReadStream(__dirname + '/bigdata.txt', 'utf8')
   myReadStream.pipe(res)
})
const PORT = 3000;
server.listen(PORT, function() {
    console.log(`Listening on port ${PORT}`)
})