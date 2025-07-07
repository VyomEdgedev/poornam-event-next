import dynamic from "next/dynamic";

// const Dashbord = dynamic(() => import('../component/dashboard/index') )
import Home from "../component/home/home";

export default  function () {
  return <Home></Home>;
}


