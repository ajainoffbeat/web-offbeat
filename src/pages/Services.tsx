import { Outlet, useLocation  } from "react-router-dom";
import ServiceData from "../data.ts/ServiceData";
import Blog from "../components/Blog";

function Services() {
  const headerInfo = {
    title: `Services`,
    subtitle: `What we offer`,
    description: `At Offbeat Software Solutions, we provide cutting-edge technology solutions to help businesses scale efficiently. From development and testing to data management and cloud computing, we ensure high-performance and future-ready applications.`,
  };
  const location = useLocation();
  const isParRoute = location.pathname === "/services";

  return (
    <>
      {isParRoute && <Blog blogData={ServiceData} headerInfo={headerInfo} path="services" />}
      <Outlet />
    </>
  );
}

export default Services;
