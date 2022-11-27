const User = require("../models/auth")
const ErrorHandler= require("../utils/errorHandler")
const catchAsyncErrors= require("../middleware/catchAsyncErrors");
//Registrar un nuevo usuario /api/usuario/registro
exports.registroUsuario= catchAsyncErrors(async (req, res, next) =>{
    const {nombre, email, password} = req.body;
    
    const user = await User.create({
        nombre,
        email,
        password,
        avatar:{
            public_id:"cdncreatevista",
            url:"https://cdn.create.vista.com/api/media/small/563741174/stock-vector-profile-avatar-woman-icon-vector"
        }
    })
    res.status(200).json({
        success:true,
        user
    })

})