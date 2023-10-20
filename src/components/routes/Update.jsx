import { useState } from "react";

const Update = () => {
    const [selectedValue, setSelectedValue] = useState('apple'); // Initial selected value
    const [selectedBrand, setSelectedBrand] = useState('Ford'); // Initial selected value

    const handleSelectChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const handleSelectBrand = (e) => {
        setSelectedBrand(e.target.value);
    }

    const hadleForm = (e) => {
        const form = e.target;
    }

    return (
        <div>
            <div className="md:w-[30%] mx-auto p-5 bg-white border rounded-md shadow-2xl my-10 space-y-5">
                <h1 className="text-center font-semibold text-xl">Update The Product</h1>
                <form className="space-y-3" onSubmit={hadleForm}>
                    <div>
                        <label htmlFor="prodImg">
                            <p className="text-sx font-semibold text-gray-800">Product Image</p>
                            <input type="text" name="productImg" id="prodImg" placeholder="Input Product Image" className="outline-none w-full p-2 rounded-md placeholder:text-gray-300 placeholder:text-sm text-sm required border-2" />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="name">
                            <p className="text-sx font-semibold text-gray-800">Product Name</p>
                            <input type="text" name="productName" id="name" placeholder="Input Name" className="outline-none w-full p-2 rounded-md placeholder:text-gray-300 placeholder:text-sm text-sm required border-2" />
                        </label>
                    </div>
                    <div className="my-2 ">
                        <label htmlFor="fruitSelect" className="text-sx font-semibold text-gray-800 mr-2">Choose a brand</label>
                        <select className="outline-none bg-blue-200 rounded-sm px-2 py-1" id="fruitSelect" value={selectedBrand} onChange={handleSelectBrand}>
                            <option value="Ford">Ford</option>
                            <option value="BMW">BMW</option>
                            <option value="Nissan">Nissan</option>
                            <option value="Honda">Honda</option>
                            <option value="Jeep">Jeep</option>
                            <option value="Mercedes-Benz">Mercedes-Benz</option>
                            <option value="Tesla">Tesla</option>
                            <option value="Toyota">Toyota</option>
                        </select>
                    </div>
                    <div className="my-2">
                        <label htmlFor="fruitSelect" className="text-sx font-semibold text-gray-800 mr-2">Choose a type</label>
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
                            <p className="text-sx font-semibold text-gray-800">Product Price</p>
                            <input type="text" name="productPrice" id="prodPrice" placeholder="Input Produt Price" className="outline-none w-full p-2 rounded-md placeholder:text-gray-300 placeholder:text-sm text-sm required border-2" />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="rating">
                            <p className="text-sx font-semibold text-gray-800">Product Rating</p>
                            <input type="text" name="rating" id="rating" placeholder="Input Rating Out Of Five" className="outline-none w-full p-2 rounded-md placeholder:text-gray-300 placeholder:text-sm text-sm required border-2" />
                        </label>
                    </div>
                    <input type="submit" value="Update" className="px-4 py-2 
                bg-blue-500 hover:bg-blue-700 
                active:bg-blue-900 duration-500 rounded 
                text-white outline-none w-full mt-5"/>
                </form>


            </div>
        </div>
    );
};

export default Update;