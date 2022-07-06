import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

import studnetDetailsRoutes from "./routes/student.js";
import subjectDetailsRoutes from "./routes/subject.js";

const app = express()

app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(cors())

app.use('/api/student', studnetDetailsRoutes)
app.use('/api/subject', subjectDetailsRoutes)

const CONNECTION_URL = 'mongodb+srv://dasitha:dasitha123@cluster0.nv0ju.mongodb.net/?retryWrites=true&w=majority'

const PORT = process.PORT || 5000

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`server running on port ${PORT}`)))
    .catch((error) => console.log(error))

