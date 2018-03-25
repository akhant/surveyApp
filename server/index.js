import express from 'express'
const app = express()

app.get("/", (req,res)=> {
    res.send({Hello: "world"})
})

const PORT = process.env.PORT || 5000
app.listen(PORT, ()=> {
    console.log("running")
})

//for heroku deploy:
//1.Dinamic Port
//2.Node and Npm version in package.json
//3.Start script in pachage.json
//4.Add .gitignore file