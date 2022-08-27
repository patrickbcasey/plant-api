const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const plants = {
    "coneflower": {
        "genus": "echinaecea",
        "family": "asteraceae",
        "minZone": 3,
        "maxZone": 9
    },
    "hosta": {
        "genus": "hosta",
        "family": "asparagaceae",
        "minZone": 3,
        "maxZone": 8
    },
    "cherry": {
        "genus": "prunus avium",
        "family": "rosaceae",
        "minZone": 4,
        "maxZone": 8
    },
    "elderflower": {
        "genus": "sambucus",
        "family": "viburnaceae",
        "minZone": 5,
        "maxZone": 7
    },
    
    "unknown": {
        "genus": "unknown",
        "family": "unknown",
        "minZone": 0,
        "maxZone": 0
    }
}

app.get('/' , (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name' , (req, res) => {
    const plantName = req.params.name.toLowerCase()
    if(plants[plantName]) {
        res.json(plants[plantName])
    }
    else {
        res.json(plants['unknown'])
    }
    

})


app.listen( process.env.PORT || PORT, () => {
    console.log(`The server is now running on port ${PORT}`)
})