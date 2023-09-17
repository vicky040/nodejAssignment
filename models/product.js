const mongoose  = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
      },
      price: {
        type: Number,
        required: true
      },
      description: String, 
      category: String,
      brand: String, 
      quantity: {
        type: Number,
        default: 1
      },

    
  }, {
    
        timestamps: { createdAt: 'created_at', updatedAt: 'last_updated' }
      
  });
  
  const Product = mongoose.model('Product', productSchema);


  module.exports = Product ; 