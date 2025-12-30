import {v2 as cloudinary} from "cloudinary"
import fs, { unlink, unlinkSync } from "fs"
//import fs from "fs"

 cloudinary.config({ 
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
        api_key: process.env.CLOUD_API_KEY, 
        api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
    });

const uploadOncloudinary = async (localFilePath)=>{
   try {
    if(!localFilePath) return null
    //upload the file on cloudinary
   const response = await  cloudinary.uploader.upload(localFilePath,{
        resource_type : "auto"
    })
    //file has been uploaded
    //console.log("file is upload on cloudinary" ,response.url);
   // fs.unlinkSync(localFilePath)
    if (fs.existsSync(localFilePath)) fs.unlinkSync(localFilePath);
    return response
    
   } catch (error) {
  if (localFilePath && fs.existsSync(localFilePath)) {
    fs.unlinkSync(localFilePath);
  }
  return null;
}
}

export {uploadOncloudinary}


