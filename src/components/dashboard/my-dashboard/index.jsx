import Link from "next/link";
import Header from "../../common/header/dashboard/Header";
import SidebarMenu from "../../common/header/dashboard/SidebarMenu";
import Activities from "./Activities";
import AllStatistics from "./AllStatistics";
import StatisticsChart from "./StatisticsChart";
import Cookies from "js-cookie";

const index = () => {
  const userData = JSON.parse(Cookies.get('userData'));
  return (
    <>
      {/* <!-- Main Header Nav --> */}
      <Header userData={userData}/>

      <div className="dashboard_sidebar_menu">
        <div
          className="offcanvas offcanvas-dashboard offcanvas-start"
          tabIndex="-1"
          id="DashboardOffcanvasMenu"
          data-bs-scroll="true"
        >
          <SidebarMenu />
        </div>
      </div>
      {/* End sidebar_menu */}

        <div className="dashboard_navigationbar dn db-1024">
          <div className="dropdown">
            <Link href="/">
              <img height="90px" src="../../assets/images/TCM-LOGO-1.png"/>
            </Link>
            <button
              className="dropbtn"
              data-bs-toggle="offcanvas"
              data-bs-target="#DashboardOffcanvasMenu"
              aria-controls="DashboardOffcanvasMenu"
            >
              <i style={{fontSize: "21px"}} className="fa fa-bars"></i>
            </button>
          </div>
        </div>
      {/* <!-- Our Dashbord --> */}
      <section className="our-dashbord dashbord bgc-f7 pb50">
        <div className="container-fluid ovh">
          <div className="row">
            <div className="col-lg-12 px-4 maxw100flex-992">
              <div className="row">
                <div className="col-lg-12 mb10">
                  <div className="breadcrumb_content style2">
                    <h2 className="breadcrumb_title">Howdy, {userData.name}</h2>
                    <p>We are glad to see you again!</p>
                  </div>
                </div>
              </div>
              {/* End .row */}

              <div className="row">
                <AllStatistics />
              </div>
              {/* End .row Dashboard top statistics */}

              <div className="row">
                <div className="col-xl-7">
                  <div className="application_statics">
                    <h4 className="mb-4">View Statistics</h4>
                    <StatisticsChart />
                  </div>
                </div>
                {/* End statistics chart */}

                <div className="col-xl-5">
                  <div className="recent_job_activity">
                    <h4 className="title mb-4">Recent Activities</h4>
                    <Activities />
                  </div>
                </div>
              </div>
              {/* End .row  */}

              <div className="row mt50">
                <div className="col-lg-12">
                  <div className="copyright-widget text-center">
                    <p>© 2023 TCM. Made with love.</p>
                  </div>
                </div>
              </div>
              {/* End .row */}
            </div>
            {/* End .col */}
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
