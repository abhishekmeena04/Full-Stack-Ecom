import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import morgan from 'morgan';
import helmet from 'helmet'
import cors from "cors";
import connectDB from './config/db.js'
import userRouter from './route/user.route.js'
import categoryRouter from './route/category.route.js'
import uploadRouter from './route/upload.router.js'
import subCategoryRouter from './route/subCategory.route.js'
import productRouter from './route/product.route.js'
import cartRouter from './route/cart.route.js'
import addressRouter from './route/address.route.js'
import orderRouter from './route/order.route.js'

dotenv.config()
connectDB()
const app = express()
app.use(morgan('dev'));
app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));
app.use(express.json())
app.use(express.urlencoded({ extended: true })); // newww
app.use(cookieParser())
app.use(helmet({
    crossOriginResourcePolicy : false
}))

const PORT = 8000 || process.env.PORT 

app.listen(PORT, () => {
    console.log(`server is listening at ${PORT}`);
});

app.use('/api/user',userRouter)
app.use("/api/category",categoryRouter)
app.use("/api/file",uploadRouter)
app.use("/api/subcategory",subCategoryRouter)
app.use("/api/product",productRouter)
app.use("/api/cart",cartRouter)
app.use("/api/address",addressRouter)
app.use('/api/order',orderRouter)


