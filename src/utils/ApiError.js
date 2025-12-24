class ApiError extends Error {
   constructor(
    statusCode ,
    message = "Somthing Went Wrong ",
    errors = [],
    stack = ""

   ){
    super(message)
    this.statusCode = statusCode
    this.data = null
    this.suceess =false
    this.errors = errors
f
    if(stack) {
        this.stack = stack
    }else{
        Error.captureStackTrace(this, this.constructor)
    }
   }
    
}

export {ApiError}