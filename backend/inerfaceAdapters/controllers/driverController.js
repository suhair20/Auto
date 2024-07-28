

class DriverController{
    constructor(){

    }

    signup= async(req,res)=>{
        try {
        
             const {email,pasword}=req.body
             console.log(email);
             

        }catch (error) {
            console.log(error);
        }
    }
}

export default DriverController