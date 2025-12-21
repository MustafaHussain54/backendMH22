class ApiError extends Error {
   constructor(
    statusCode ,
    message = "Somthing Went Wrong ",
    errors = [],
    statck = ""

   ){
    super(message)
    this.statusCode = statusCode
    this.data = null
    this.suceess =false
    this.errors = errors

    if(stack) {
        this.stack = statck
    }else{
        Error.captureStackTrace(this, this.constructor)
    }
   }
    
}

export {ApiError}