import { useContext } from "react";
// import { GenericContext } from "../../providers/GenericValueProvider";
import { AiOutlineIdcard } from "react-icons/ai"
import { LiaCalendarTimes } from "react-icons/lia"
import { AiFillCar } from "react-icons/ai"
import { FcEngineering } from "react-icons/fc"
import { GrTransaction } from "react-icons/gr"
import { BsFuelPumpDiesel } from "react-icons/bs"
import { GiFuelTank } from "react-icons/gi"
import { GiWeightLiftingUp } from "react-icons/gi"
import { MdAirlineSeatReclineNormal } from "react-icons/md"
import { ImLifebuoy } from "react-icons/im"
import { FcBiotech } from "react-icons/fc"
import { GiHeartInside } from "react-icons/gi"
import { TbLayoutSidebarRightExpand } from "react-icons/tb"
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import { CartContext } from "../../providers/CartProvider";
// import { EmailContext } from "../../providers/EmailProvider";
import { AuthContext } from "../../providers/AuthProvider";

const DetailsOfButton = () => {
    const navigateHome = useNavigate();
    const { user } = useContext(AuthContext);
    const x = useLocation();
    const [carts] = useContext(CartContext);
    // const [details] = useContext(GenericContext);
    // const [email] = useContext(EmailContext);
    const navigate = useNavigate();
    // console.log(carts, x.state);
    const {
        Year,
        'Vehicle Identification Number (VIN)': VIN,
        'Body Style': bodyStyle,
        Engine,
        Transmission,
        'Fuel Type': fuelType,
        'Fuel Efficiency': fuelEfficiency,
        'Curb Weight': curbWeight,
        'Seating Capacity': seatingCapacity,
        'Safety Features': safetyFeatures,
        'Entertainment and Technology': entertainmentTech,
        'Interior Features': interiorFeatures,
        'Exterior Features': exteriorFeatures,
    } = x.state;

    const hadleAddToCart = () => {
        fetch("https://alpha-motors-server.vercel.app/carts", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ [user.email]: carts })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    navigateHome("/_");
                    toast.success("Insertion Successfull.")
                }
            })
    }


    return (

        <>
            <div className="w-full flex justify-center items-center my-5 drop-shadow-2xl">
                <div className="space-y-2 p-3 flex flex-col items-start justify-center bg-gradient-to-r from-cyan-100 to-blue-100 rounded-md mx-2">
                    <p className="flex items-start gap-1 flex-wrap">
                        <AiOutlineIdcard className="text-2xl text-blue-500"></AiOutlineIdcard>
                        <span className="text-sm font-semibold ">Vehicle Identification Number (VIN) : </span>
                        <span className="pl-7 sm:pl-0">{VIN}</span>
                    </p>
                    <p className="flex items-start gap-1 flex-wrap">
                        <LiaCalendarTimes className="text-2xl text-green-500"></LiaCalendarTimes>
                        <span className="text-sm font-semibold ">Year : </span>
                        <span>{Year}</span>
                    </p>
                    <p className="flex items-start gap-1 flex-wrap">
                        <AiFillCar className="text-2xl text-blue-500"></AiFillCar>
                        <span className="text-sm font-semibold ">Body Style : </span>
                        <span>{bodyStyle}</span>
                    </p>
                    <p className="flex items-start gap-1 flex-wrap">
                        <FcEngineering className="text-2xl text-blue-500"></FcEngineering>
                        <span className="text-sm font-semibold ">Engine : </span>
                        <span>{Engine}</span>
                    </p>
                    <p className="flex items-start gap-1 flex-wrap">
                        <GrTransaction className="text-2xl text-slate-500"></GrTransaction>
                        <span className="text-sm font-semibold ">Transmission : </span>
                        <span>{Transmission}</span>
                    </p>
                    <p className="flex items-start gap-1 flex-wrap">
                        <BsFuelPumpDiesel className="text-2xl text--500"></BsFuelPumpDiesel>
                        <span className="text-sm font-semibold ">Fuel Efficiency : </span>
                        <span className="pl-7 sm:pl-0">{fuelEfficiency}</span>
                    </p>
                    <p className="flex items-start gap-1 flex-wrap">
                        <GiFuelTank className="text-2xl text-blue-500"></GiFuelTank>
                        <span className="text-sm font-semibold ">Fuel Type : </span>
                        <span>{fuelType}</span>
                    </p>
                    <p className="flex items-start gap-1 flex-wrap">
                        <GiWeightLiftingUp className="text-2xl text-slate-500"></GiWeightLiftingUp>
                        <span className="text-sm font-semibold ">Curb Weight : </span>
                        <span>{curbWeight}</span>
                    </p>
                    <p className="flex items-start gap-1 flex-wrap">
                        <MdAirlineSeatReclineNormal className="text-2xl text-blue-500"></MdAirlineSeatReclineNormal>
                        <span className="text-sm font-semibold ">Seating Capacity : </span>
                        <span>{seatingCapacity}</span>
                    </p>
                    <p className="flex items-start gap-1 flex-wrap">
                        <ImLifebuoy className="text-2xl text-violet-500"></ImLifebuoy>
                        <span className="text-sm font-semibold ">Safety Features : </span>
                        <span className="pl-7 sm:pl-0">{safetyFeatures}</span>
                    </p>
                    <p className="flex items-start gap-1 flex-wrap">
                        <FcBiotech className="text-2xl text-blue-500"></FcBiotech>
                        <span className="text-sm font-semibold ">Entertainment and Technology : </span>
                        <span className="pl-7 sm:pl-0">{entertainmentTech}</span>
                    </p>
                    <p className="flex items-start gap-1 flex-wrap">
                        <GiHeartInside className="text-2xl text-green-500"></GiHeartInside>
                        <span className="text-sm font-semibold ">Interior Features : </span>
                        <span className="pl-7 sm:pl-0">{interiorFeatures}</span>
                    </p>
                    <p className="flex items-start gap-1 flex-wrap">
                        <TbLayoutSidebarRightExpand className="text-2xl text-blue-500"></TbLayoutSidebarRightExpand>
                        <span className="text-sm font-semibold ">Exterior Features : </span>
                        <span className="pl-7 sm:pl-0">{exteriorFeatures}</span>
                    </p>
                </div>
            </div>
            <div className="flex flex-row-reverse justify-center items-center my-5 gap-2">
                <Link>
                    <button onClick={hadleAddToCart} className="text-white font-sm font-semibold bg-blue-500 duration-300  hover:bg-blue-700 active:bg-blue-900 rounded-md px-3 py-1">Add to cart</button>
                </Link>
                <span>
                    <button onClick={() => { navigate(-1) }} className="text-white font-sm font-semibold bg-blue-500 duration-300  hover:bg-blue-700 active:bg-blue-900 rounded-md px-3 py-1">Go back</button>
                </span>
            </div>
            <Toaster></Toaster>
        </>
    );
};

export default DetailsOfButton;

