require('dotenv').config()
const express = require('express')
const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
  res.send('Hello world home page')
})

app.get('*', (req, res) => {
  res.render('404 page')
})

app.get('/', (req, res) => {
  res.render('home')
})

app.listen(process.env.PORT)


function home () {
  return (
    <Def>
        <main>
            <h1>HOME</h1>
        </main>
    </Def>
  )
}

