import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const MyCart = () => {
    const { user } = useContext(AuthContext);
    const email = user.email;
    const data = useLoaderData();
    // console.log(data, user.email);



    const arr = data.filter(item => {
        let [, key] = Object.keys(item);
        return key === email;
    })

    const finalArr = arr.map(item => (item[email]));


    return (
        <div>
            <h1 className="text-center text-base font-semibold mt-5">Total Items: {finalArr.length}</h1>

            {
                finalArr.map(item => <div key={item._id} className="flex justify-center items-center gap-5 my-5">
                    <div className="p-5 bg-blue-300 rounded-md border-2 flex-col flex gap-1">
                        <p className="text-sm font-semibod">{item.brand_name}</p>
                        <p className="text-sm font-semibod">{item.name}</p>
                        <p className="text-sm font-semibod">{item.price}</p>
                        <p className="text-sm font-semibod">{item.rating}</p>
                        <p className="text-sm font-semibod">{item.type}</p>
                    </div>
                </div>)
            }
        </div>
    );
};

export default MyCart;