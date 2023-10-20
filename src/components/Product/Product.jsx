/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GenericContext } from "../../providers/GenericValueProvider";

const Product = ({ product }) => {
    const navigate = useNavigate();
    const [xdetails, setSDetails] = useContext(GenericContext);
    const { brand_name, name, price, rating, type, _id, details } = product;
    // console.log(details)
    setSDetails(details);
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
                                <Link to={`/details/${_id}`}>
                                    <button className="text-sm font-semibold text-white bg-blue-500 hover:bg-blue-700 active:bg-blue-800 rounded-md duration-300 block px-3 py-1">Details</button>
                                </Link>
                                <Link to={`/update/${_id}`}>
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