import { useState } from "react";
import { useEffect } from "react";
import Service from "../Service/Service";


const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/services")
            .then(res => res.json())
            .then(data => {
                const keys = Object.keys(data[0]);
                const values = Object.values(data[0]);

                let arr = [];
                for (let i = 1; i <= 8; i++) {
                    let key = keys[i];
                    let value = values[i];
                    arr.push({ name: key, value })
                }

                setServices(arr);
            })
    }, [])




    return (
        <div className="">
           <div className="text-center my-5">
                <p className="font-semibold text-sm sm:text-base md:text-2xl ">Our Brands</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {
                    services.map((service, index) => <Service key={index} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;