import express from 'express'
import { getdata } from './data/getdata'
import { portIsOccupied } from './data/port'

export default server => {
  const app = express()
  app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    res.header('Access-Control-Allow-Metheds', 'PUT, POST, GET, DELETE, OPTIONS')
    res.header('X-Powered-By', 'nodejs')
    res.header('Content-Type', 'application/json;charset=utf-8')
    next()
  })

  app.get('/getdata', (req, res) => {
    getdata(app).then(ele => {
      res.send(ele)
    }).catch(err => {
      res.send(err, '---ree')
    })
  })

  //   app.post('/situatuion/save/saveJsonFiles', (req, res) => {
  //     console.log(res)
  //   })

  portIsOccupied(5657)
    .then(port => {
      app.listen(port, () => {
        console.log(111)
      })
    })
}
