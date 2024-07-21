import dynamic from "next/dynamic";
import Seo from "../../components/common/seo";
import MyDashboard from "../../components/dashboard/my-dashboard";
import DashboardLayout from "./layout";

const Index = () => {
  return (
    <>
      <Seo pageTitle="Dashboard" />
      <DashboardLayout>
        <MyDashboard />
      </DashboardLayout>
    </>
  );
};

export default dynamic(() => Promise.resolve(Index), { ssr: false });
