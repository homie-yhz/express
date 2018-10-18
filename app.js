const express = require('express')
const multipart = require('connect-multiparty')
const app = express()

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.header('X-Powered-By', ' 3.2.1')
  res.header('Content-Type', 'application/json;charset=utf-8')
  next()
})

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/getData/:num', (req, res) => {
  console.log(req.params.num)
  res.json({ a: 1 })
})

app.post('/postData', multipart(), (req, res) => {
  console.log('post接受队形', req.body)
  res.json({ post: 'post请求成功！' })
})
app.listen(3000, () => console.log('Example app listening on port 3000!'))
