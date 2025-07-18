import dynamic from "next/dynamic";

// const Dashboard = dynamic(() => import('@/component/dashboard/index'));
import Connectus from "@/component/connectus/Connectus";

export default function contact() {
  return <Connectus />;
}
