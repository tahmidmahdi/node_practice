// const express = require('express')
const fs = require('fs');
// const EventEmitter = require('events')  
// const emitter = new EventEmitter();

const School = require('./school')
// register a listner for bell ring event

// raise an event


// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })
const school = new School()
school.on('bellRing', ({period, text})=> {
  console.log(`You need to run because ${period} ${text}`)
})
school.startPeriod(); 