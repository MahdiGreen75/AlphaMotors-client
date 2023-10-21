import { Link } from "react-router-dom";

const SuccessMessage = () => {
    return (
        <div className="flex flex-col items-center justify-center mt-10 gap-5">
            <h1 className="text-blue-600 font-bold text-xl text-center">Cart Insertion Successful.</h1>
            <Link to={"/"}>
                <button className="text-white font-bold bg-blue-600 hover:bg-blue-800 active:bg-blue-900 px-3 py-1 rounded-md">Home</button>
            </Link>
        </div>
    );
};

export default SuccessMessage;