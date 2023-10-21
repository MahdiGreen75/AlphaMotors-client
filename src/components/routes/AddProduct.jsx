// import { useEffect } from "react";
import { useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

const Update = () => {
    // const navigate = useNavigate();
    // const { id } = useParams();
    const [selectedValue, setSelectedValue] = useState('Sedan'); // Initial selected value
    const [selectedBrand, setSelectedBrand] = useState('Ford'); // Initial selected value




    const handleSelectChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const handleSelectBrand = (e) => {
        setSelectedBrand(e.target.value);
    }

    const hadleForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const productImg = form.productImg.value;
        const productName = form.productName.value;
        const brandName = selectedBrand;
        const typeName = selectedValue;
        const productPrice = form.productPrice.value;
        const productRating = form.rating.value;

        const updatedUser = { productImg, productName, brandName, typeName, productPrice, productRating };

        fetch(`https://alpha-motors-server.vercel.app/addProduct`, {
            method: 'POST',
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(updatedUser)
        }).then(res => res.json())
            .then(data => {
                console.log(data);
            })

        // console.log(updatedUser);

    }


    return (
        <div>
            <div className="md:w-[30%] mx-auto p-5 bg-white border rounded-md shadow-2xl my-10 space-y-5">
                <h1 className="text-center font-semibold text-xl">Add New Car</h1>
                <form className="space-y-3" onSubmit={hadleForm}>
                    <div>
                        <label htmlFor="prodImg">
                            <p className="text-sx font-semibold text-gray-800">Car Image</p>
                            <input type="text" name="productImg" id="prodImg" placeholder="Input Product Image" className="outline-none w-full p-2 rounded-md placeholder:text-gray-300 placeholder:text-sm text-sm required border-2" />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="name">
                            <p className="text-sx font-semibold text-gray-800">Car Name</p>
                            <input type="text" name="productName" id="name" placeholder="Input Name" className="outline-none w-full p-2 rounded-md placeholder:text-gray-300 placeholder:text-sm text-sm required border-2" />
                        </label>
                    </div>
                    <div className="my-2 ">
                        <label htmlFor="fruitSelect" className="text-sx font-semibold text-gray-800 mr-2">Car Brand</label>
                        <select className="outline-none bg-blue-200 rounded-sm px-2 py-1" id="fruitSelect" value={selectedBrand} onChange={handleSelectBrand}>
                            <option value="Ford">Ford</option>
                            <option value="BMW">BMW</option>
                            <option value="Nissan">Nissan</option>
                            <option value="Honda">Honda</option>
                            <option value="Jeep">Jeep</option>
                            <option value="mercedesBenz">Mercedes-Benz</option>
                            <option value="Tesla">Tesla</option>
                            <option value="Toyota">Toyota</option>
                        </select>
                    </div>
                    <div className="my-2">
                        <label htmlFor="fruitSelect" className="text-sx font-semibold text-gray-800 mr-2">Car Type</label>
                        <select className="outline-none bg-blue-200 rounded-sm px-2 py-1" id="fruitSelect" value={selectedValue} onChange={handleSelectChange}>
                            <option value="Sedan">Sedan</option>
                            <option value="Hatchback">Hatchback</option>
                            <option value="Crossover">Crossover</option>
                            <option value="Coupe">Coupe</option>
                            <option value="Sports Car">Sports Car</option>
                            <option value="Hybrid Car">Hybrid Car</option>
                            <option value="Truck">Truck</option>
                            <option value="Minivan">Minivan</option>
                            <option value="Luxury Car">Luxury Car</option>
                            <option value="Classic Car">Classic Car</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="prodPrice">
                            <p className="text-sx font-semibold text-gray-800">Car Price</p>
                            <input type="text" name="productPrice" id="prodPrice" placeholder="Input Produt Price" className="outline-none w-full p-2 rounded-md placeholder:text-gray-300 placeholder:text-sm text-sm required border-2" />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="rating">
                            <p className="text-sx font-semibold text-gray-800">Car Rating</p>
                            <input type="text" name="rating" id="rating" placeholder="Input Rating Out Of Five" className="outline-none w-full p-2 rounded-md placeholder:text-gray-300 placeholder:text-sm text-sm required border-2" />
                        </label>
                    </div>
                    <input type="submit" value="Add Car" className="px-4 py-2 
                bg-blue-500 hover:bg-blue-700 
                active:bg-blue-900 duration-500 rounded 
                text-white outline-none w-full mt-5"/>
                </form>


            </div>
            <Toaster></Toaster>p
        </div>
    );
};

export default Update;