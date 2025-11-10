import express from 'express' // Install and Import kiya

const app = express() 
//const PORT = 5000
app.use(express.json()); //Middleware use and convert to json 

 let allUsers =[]   //store on object
 
//Routes 
app.get('/', (req,res)=>{
    res.send(new Date().toString().slice(0, 24)) //3001 kae routes pr jaega thoo date show hoojae gae 
});

app.get('/users' ,(req,res)=>{
     //console.log(req.body)
     res.send(allUsers)
 })



app.post('/users',(req,res)=>{
    let newArray = req.body.map((value)=>{
        value.id = Math.round(Math.random()* 9999999)
        return value
    })

    allUsers.push(...newArray)
    console.log('allUsers=>' , allUsers) 
    res.send("users added successfully.")
})




app.listen(3001 ,()=>{
    console.log("Server is listening...")
})




