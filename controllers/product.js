const Product = require("../models/product");


const createProduct = async(req,res,next)=>{
    
    try {
        const { name, price, description, category, brand, quantity } = req.body;
    
       
        const product = new Product({
          name,
          price,
          description,
          category,
          brand,
          quantity,
        });
    
       
        await product.save();
    
        res.status(201).json({data:product , error:false ,  message: 'Product created successfully' });
      } catch (err) {
        next(err);
      }

}



const getProducts = async (req,res,next)=> {
   
    const page = parseInt(req.query.page) || 1; 
    const perPage = parseInt(req.query.perPage) || 10; 

  try {
    const totalProducts = await Product.countDocuments(); 
    const totalPages = Math.ceil(totalProducts / perPage); 

    if (page > totalPages) {
      return res.status(404).json({ error: 'Page not found' });
    }

    const products = await Product.find()
      .skip((page - 1) * perPage) 
      .limit(perPage) 
      .exec();

    res.json({
      data: products,
      currentPage: page,
      totalPages,
      totalProducts,
      error:false
    });
  } catch (err) {
   next(err)
  }

}



module.exports = {createProduct , getProducts }; 