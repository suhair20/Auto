

import express from 'express'
import bodyParser from 'body-parser';

import dotenv from 'dotenv';
import adminRoute from './infrastructure/express/adminRoute.js';
import userRoute from './infrastructure/express/userRoute.js';
import driverRoute from './infrastructure/express/driverRoute.js'
import connectDB from './infrastructure/database/mongoConfig/mongoConnect.js';

dotenv.config()

connectDB()

const app=express()
const port =500

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/user',userRoute)
app.use('/admin',adminRoute)
app.use('/driver',driverRoute)


app.listen(port,()=>console.log(`server started on port ${port}`) )

