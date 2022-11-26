const productos = require("../models/productos");
const producto=require("../models/productos");


// ver la lista de productos

exports.getProducts=async(req,res,next) =>{
    const productos= await producto.find();
    if (!productos){
        return res.status(404).json({
            success: false,
            error: true
        })
    }
        res.status(200).json({
        success:true,
        cantidad:productos.length,
        productos
       
    })
}


// ver producto por ID
exports.getProductById=async(req,res,next)=>{
    const product= await producto.findById(req.params.id) 
    if(!product){
        return res.status(404).json({
            success:false,
            message: 'No encontramos este producto',
            error:true

        })
    }
        res.status(200).json({
        success:true,
        menssage:"Aqui debajo encuentras informacion sobre tu producto",
        product
       
    })
}
//Update un producto
exports.updateProduct=async(req,res,next) =>{
   let product= await producto.findById(req.params.id)//Variable de tipo modificado
    
    
    if(!product){//Verifico que el objeto no existe para finalizar el proceso
        return res.status(404).json({
            success:false,
            message: 'No encontramos este producto'
        })
    }
    // Si el objeto si existia,entonces si ejecuto la actualizacion
     product=await producto.findByIdAndUpdate(req.params.id,req.body,{
        new:true, // valido solo los atributos nuevos o actulizados
        runValidators:true
     });
     // Respondo Ok si el producto si actualizó
     res.status(200).json({
        success: true,
        message:"Producto actualizado correctamente",
        product
     })
    }
    exports.deleteProduct=async(req,res,next) =>{
        const product= await producto.findById(req.params.id)//Variable de tipo modificado
         
         
         if(!product){//Verifico que el objeto no existe para finalizar el proceso
             return res.status(404).json({
                 success:false,
                 message: 'No encontramos este producto',
                 error:true
             })
         }
         await product.remove();
         res.status(200).json({//eliminamos el producto
            success:true,
            message:"Producto eliminado correctamente"
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