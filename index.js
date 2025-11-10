import express from 'express' // Install and Import kiya

const app = express() 
app.use(express.json()); //Middleware use and convert to json 

 let allUsers =[]   //store on object
 
//Routes 
app.get('/', (req,res)=>{
    res.send(new Date().toString().slice(0, 24)) //3001 kae routes pr jaega thoo date show hoojae gae 
});

//GET
app.get('/users' ,(req,res)=>{
     //console.log(req.body)
     res.send(allUsers)
 })


 app.get ('/users', (req,res)=>{
    //console.log(req.body)
    res.send(allUsers)
 })

 

//POST

app.post('/users',(req,res)=>{
    let newArray = req.body.map((value)=>{
        value.id = Math.round(Math.random()* 9999999)
        return value
    })

    allUsers.push(...newArray) //spread operator
    console.log('allUsers=>' , allUsers) 
    res.send("users added successfully.")    
})


//DELETE
app.delete('/users/:id', (req,res) => {
    const { id } = req.params
    allUsers = allUsers.filter((value)=>{
        return value.id != id
    })
    res.send("user deleted sucessfully...")
})

//PATCH
app.patch('/users/:id' ,(req,res)=>{
    const {id} =req.params
    const user = req.body
    const UpdateUser = allUsers.find(data => {
        return data.id == id
    })

   Object.assign(UpdateUser, {...user, id} )
   res.send ('user updated successfully')
})




app.listen(3001 ,()=>{                     //server is run on 3001
    console.log("Server is listening...")
})




