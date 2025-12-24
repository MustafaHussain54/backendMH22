import { asyncHandlers } from "../utils/asyncHandlers.js";

const registerUser = asyncHandlers(async(req ,res) =>{
    res.status(500).json({
        message : "mustafa hussain"
    })
})


export {
    registerUser,
}