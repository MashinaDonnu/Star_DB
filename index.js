const express = require('express')
const path = require('path')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

function start() {
    if (process.env.NODE_ENV === 'production') {
        app.use('/', express.static(path.join(__dirname, 'star_db', 'build')))

        const PORT = process.env.PORT || 5000
        app.listen(PORT, () => {
            console.log(`Star wars app started on port ${PORT}`)
        })
    }
}

start()

