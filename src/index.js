const express= require("express");
const app= express();
const noteRouter = require("./routes/noteRoutes");
const userRouter = require("./routes/userRoutes");
const dotenv =require("dotenv");
const cors =require("cors");

dotenv.config();

const mongoose= require("mongoose");

app.use(express.json());

app.use(cors());

app.use("/users",userRouter)
app.use("/notes",noteRouter)

app.get("/",(req,res)=>{
    res.send("hello Pranat")
});
const PORT=process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    app.listen(PORT, ()=>{
        console.log("server started on port "+PORT);
    }); 
})

.catch((error)=>{
    console.log(error);
})
