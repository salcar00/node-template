import express, { urlencoded, json } from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()
app.use(
  cors({
    origin(requestOrigin, callback) {
      return requestOrigin
    },
    credentials: true
  })
)

app.use(urlencoded({ extended: false }))
app.use(json())
app.use(cookieParser())

app.listen(3001, () => {
  console.log('App Started on Port 3001')
})
