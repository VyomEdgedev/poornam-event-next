import dynamic from "next/dynamic";

// const Dashbord = dynamic(() => import('../component/dashboard/index') )
import Connectus from "@/component/connectus/Connectus";

export default  function () {
  return <Connectus></Connectus>;
}
