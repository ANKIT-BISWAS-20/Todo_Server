import express from "express"
import cors from "cors"

const app = express()
app.use(cors())
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))


import serverStatusRouter from "./src/routes/serverStatus.routes.js"
app.use("/",serverStatusRouter);


import todoRouter from './src/routes/todo.routes.js'
app.use("/tasks", todoRouter)


export { app }