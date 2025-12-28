import { asyncHandlers } from "../utils/asyncHandlers.js";
import {ApiError} from "../utils/ApiError.js"
import { User } from "../models/user.model.js";
import {uploadOncloudinary} from "../utils/cloudinary.js"
import { upload } from "../middlewares/multer.middleware.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { application } from "express";

const registerUser = asyncHandlers(async(req ,res) =>{
    
       //get usewr detsils
       //validation - not empty
       //check if user is already exist
       //check for images avatar
       //upload on clooudinary ,avatar
       //check user object - create entry in db
       //remove passsword and refrsh token field from response
       //check for user creation
       //return result

      const  { fullname ,email, username ,password}  = req.body 
      console.log("email:", email);

      if(
        [fullname ,email,username,password].some((field) => field?.trim() === "")
      ){
        throw new ApiError(400 , "All field are required")
      }

      const existedUser = User.findOne({
        $or :[{username},{email}]
      })
      if(existedUser){
        throw new ApiError(409 , "User with email and username already exist")
      }
      
     const avatarLocalPath =  req.files?.avatar[0]?.path;
     const coverImageLocalPath = req.files?.coverImage[0]?.path;


     if (!avatarLocalPath) {
        throw new ApiError(400 ,"Avatar is required")
     }
    
    const avatar =  await uploadOncloudinary(avatarLocalPath)
   const coverImage = await uploadOncloudinary(coverImageLocalPath)

   if (!avatar) {
     throw new ApiError(400 ,"Avatar is required")
   }

   const user = await User.create({
    fullname,
    avatar : avatar.url,
    coverImage:coverImage?.url || "",
    email,
    password,
    username : username.toLowerCase()
   })
  const createdUser = await  User.findById(user._id).select(
    "-password -refreshToken"
  )

  if(!createdUser){
    throw new ApiError(500 , "Somthing went wrong ehile registering user")
  }
    return res.status(201).json(
        new ApiResponse(200 , createdUser ,"User registered sucessfully")
    )
})


export {
    registerUser,
}