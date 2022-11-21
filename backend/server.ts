import  express from "express";
require("dotenv").config();
import AuthRoute from "./routes/AuthRoute"
const Port = 5000 || process.env.PORT
import {connection} from "./db/db_connect"
import { errorHandlerMiddleware } from "./middleware/errorHandler";
import helmet from "helmet";
import ExpressMongoSanitize from "express-mongo-sanitize";



const app =express();
app.use(helmet())
connection()
app.use(express.json())

//middleware
app.use(errorHandlerMiddleware)
app.use(ExpressMongoSanitize())

//routes
app.use("/userAuthentication",AuthRoute)
app.listen(Port,()=>{
    console.log(`server started on Port ${Port}`)
})

