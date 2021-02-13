import express from 'express'
import asyncHandler from 'express-async-handler' 
const router = express.Router()
import Product from '../models/productModel.js'
import { 
    getProductById, 
    getProducts, 
    createProductReview, 
    getTopProducts,
    deleteProduct,
    createProduct,
    updateProduct
    
} from '../controllers/productController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

//  Fetch all products..GET /api/products
// router.get('/', asyncHandler( async (req, res) => {
//     const products = await Product.find({})
//     res.send(products)
// }))

router.route('/').get(getProducts).post(protect, admin, createProduct)
router.route('/:id/reviews').post(protect, createProductReview)
router.get('/top', getTopProducts)
router.route('/:id').get(getProductById).delete(protect, admin, deleteProduct).
put(protect, admin, updateProduct)


// Fetch a single product
// router.get('/:id', asyncHandler (async (req, res) => {
//     const product = await Product.findById(req.params.id)
//     if(product){
//         res.json(product)
//     }else{
//         res.status(404).json({message: 'Product not found'})
//     }
    
// }))



export default router

