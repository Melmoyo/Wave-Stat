import {ClipLoader} from "react-spinners";
const LoadingSpinner=()=>(
    <div className="w-full h-screen flex items-center justify-center"> 
    <ClipLoader color="#fff" size={50}/>
    </div>
)
export default LoadingSpinner