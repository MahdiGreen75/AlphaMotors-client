/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const Service = ({ service }) => {

    return (
        <>
            <Link to={`/service/${service.name}`}>
                <div className="outline-none">
                    <div className="flex flex-col justify-between items-center  p-3 border-2 rounded-md shadow-2xl bg-blue-400 hover:bg-blue-500 active:bg-blue-700 duration-300">
                        <img src={service.value.brand_img} className="w-48 h-48 rounded-lg bg-white" />
                    </div>
                </div>
            </Link>
        </>
    );
};

export default Service;