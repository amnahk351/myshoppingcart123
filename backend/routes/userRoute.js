import express from 'express'
import asyncHandler from 'express-async-handler' 
const router = express.Router()
import Product from '../models/productModel.js'
import { authUser, registerUser, getUserProfile, updateUserProfile, getUsers, deleteUser, getUserById, updateUser  } from '../controllers/userController.js'
import { protect, admin } from '../middleware/authMiddleware.js'
//  Fetch all products..GET /api/products
// router.get('/', asyncHandler( async (req, res) => {
//     const products = await Product.find({})
//     res.send(products)
// }))
router.route('/').post(registerUser).get(protect,admin, getUsers)
router.post('/login', authUser)
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile)

router.route('/:id').delete(protect, admin, deleteUser).get(protect, admin, getUserById).put(protect, admin, updateUser)
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

