import express from 'express'
import DriverController from '../../../inerfaceAdapters/controllers/driverController.js'

const adminRoute=express.Router()



const driverController=new DriverController()

adminRoute.post('/Register',driverController.signup)

export default adminRoute