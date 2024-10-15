const express = require('express')

const app = express()

app.get('/',(req,res)=>[
    res.status(200).json({
        status:200,
        message:"ci/cd pipeline was changed"
    })
])

app.listen(3000,()=>{
    console.log('server is running on port 3000')
})