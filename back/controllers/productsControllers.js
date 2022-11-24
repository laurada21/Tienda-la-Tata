
const producto=require("../models/productos");

// ver la lista de productos

exports.getProducts=async(req,res,next) =>{
    const products= await producto.find();
    res.status(200).json({
        sucess:true,
        cantidad: products.length,
        products
       
    })
}
//crear nuevo producto 
exports.newProduct=async(req,res,next)=>{
    const product = await producto.create(req.body);

    res.status(201).json({
        success:true,
        message:"Aqui debajo encuentras informacion sobre tu producto",
        product
    })
}

