/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
// import { GenericContext } from "../../providers/GenericValueProvider";
import { CartContext } from "../../providers/CartProvider";
import { AuthContext } from "../../providers/AuthProvider";

const Product = ({ product }) => {
    const {user} = useContext(AuthContext);
    const data = useLocation();
    const [carts, setCarts] = useContext(CartContext);
    const { brand_name, name, price, rating, type, _id, details:singleProduct } = product;
    setCarts({ brand_name, name, price, rating, type, _id});
    
    return (
        <div>
            <Link to=''>
                <div className="outline-none">
                    <div className="flex flex-col justify-between items-center border bg-slate-200 rounded-lg shadow-2xl">
                        <img src={product.image} className="w-full h-60 rounded-t-lg bg-white" />
                        <div className="w-full p-4">
                            <div className="flex flex-col items-start gap-1">
                                <p><span className="text-sm font-bold">Name: </span><span className="font-light">{name}</span></p>
                                <p><span className="text-sm font-bold">Brand Name: </span><span className="font-light">{brand_name}</span></p>
                                <p><span className="text-sm font-bold">Type: </span><span className="font-light">{type}</span></p>
                                <p><span className="text-sm font-bold">Price: </span><span className="font-light">{price}</span></p>
                                <p><span className="text-sm font-bold">Rating: </span><span className="font-light">{rating}</span></p>
                                <Link state={singleProduct} to={user ? `/details/${_id}` : `/login`}>
                                    <button className="text-sm font-semibold text-white bg-blue-500 hover:bg-blue-700 active:bg-blue-800 rounded-md duration-300 block px-3 py-1">Details</button>
                                </Link>
                                <Link to={user ? `/update/${_id}` : `/login`}>
                                    <button className="text-sm font-semibold text-white bg-blue-500 hover:bg-blue-700 active:bg-blue-800 rounded-md duration-300 block px-3 py-1">Update</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Product;