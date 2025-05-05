import userModel from "../models/userModel.js";

// add item to user cart
const addToCart = async (req, res) => {
    try {
        let userData = await userModel.findById(req.userId);
        let cartData = await userData.cartData;
        if(!cartData[req.body.itemId]){
            cartData[req.body.itemId] = 1
        } else {
            cartData[req.body.itemId] += 1
        }
        await userModel.findByIdAndUpdate(req.userId,{cartData});
        res.json({success:true, message:"Added To Cart"});
    } catch (error) {
        console.log(error)
        res.json({success:false, message:"Error"})
    }

}

// remove items from user cart
const removeFromCart = async (req, res) => {
    try {
        let userData = await userModel.findById(req.userId);
        let cartData = await userData.cartData;
        const itemId = req.body.itemId;
        if(cartData[itemId]>0){
            cartData[itemId] -= 1;
        }
        await userModel.findByIdAndUpdate(req.userId,{cartData});
        res.json({success:true, message:"Remove From Cart"})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:"Error"})
    }
}

//fetch user cart data
const getCart = async (req, res) => {
    try {
        let userData = await userModel.findById(req.userId)
        let cartData = await userData.cartData;
        res.json({success:true, cartData})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:"Error Get Data"})
    }
}

export {addToCart, removeFromCart, getCart}