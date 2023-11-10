import Link from "next/link";
import { useRouter } from "next/router";
import {
  isSinglePageActive,
} from "../../../../utils/daynamicNavigation";
import Image from "next/image";
import axios from "axios";
import Cookies from "js-cookie";

const SidebarMenu = () => {
  const route = useRouter();

  const myProperties = [
    { id: 1, name: "General Elements", route: "/my-properties" },
    { id: 2, name: "Advanced Elements", route: "/my-properties" },
    { id: 3, name: "Editors", route: "/my-properties" },
  ];
  const reviews = [
    { id: 1, name: "My Reviews", route: "/my-review" },
    { id: 2, name: "Visitor Reviews", route: "/my-review" },
  ];
  const manageAccount = [
    {
      id: 1,
      name: "My Profile",
      route: "/user/profile",
      icon: "flaticon-user",
    },
    {
      id: 2,
      name: "Reserved Floor Plans",
      route: "/user/reserved-floor-plans",
      icon: "flaticon-box",
    },
  ];
  
  const logoutUser = async () => {
    const response = await axios.get('/api/logout');
    Cookies.set('loginStatus', false);
    route.push('/');
  }

  return (
    <>
      <ul className="sidebar-menu">
        <li className="sidebar_header header">
          <Link href="/">
          <Image
              width={100}
              height={80}
              className="logo1 img-fluid contain"
              src="/assets/images/TCM-LOGO-2.png"
              alt="header-logo.png"
            />
          </Link>
        </li>
        {/* End header */}

        <li className="title">
          <span>Main</span>
          <ul>
            <li
              className={`treeview ${
                isSinglePageActive("/dashboard", route.pathname)
                  ? "active"
                  : ""
              }`}
            >
              <Link href="/user">
                <i className="flaticon-layers"></i>
                <span> Dashboard</span>
              </Link>
            </li>
            {/* <li
              className={`treeview ${
                isSinglePageActive("/create-listing", route.pathname)
                  ? "active"
                  : ""
              }`}
            >
              <Link href="/create-listing">
                <i className="flaticon-plus"></i>
                <span> Create Listing</span>
              </Link>
            </li> */}
            {/* <li
              className={`treeview ${
                isSinglePageActive("/my-message", route.pathname)
                  ? "active"
                  : ""
              }`}
            >
              <Link href="/my-message">
                <i className="flaticon-envelope"></i>
                <span> Message</span>
              </Link>
            </li> */}
          </ul>
        </li>
        {/* End Main */}

        <li className="title">
          <span>Manage Listings</span>
          <ul>
            {/* <li
              className={`treeview ${
                isParentPageActive(myProperties, route.pathname) ? "active" : ""
              }`}
            >
              <a data-bs-toggle="collapse" href="#my-property">
                <i className="flaticon-home"></i> <span>My Properties</span>
                <i className="fa fa-angle-down pull-right"></i>
              </a>
              <ul className="treeview-menu collapse" id="my-property">
                {myProperties.map((item) => (
                  <li key={item.id}>
                    <Link href={item.route}>
                      <i className="fa fa-circle"></i> {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li> */}
            {/* end properties */}

            {/* <li
              className={`treeview ${
                isParentPageActive(reviews, route.pathname) ? "active" : ""
              }`}
            >
              <a data-bs-toggle="collapse" href="#review">
                <i className="flaticon-chat"></i>
                <span>Reviews</span>
                <i className="fa fa-angle-down pull-right"></i>
              </a>
              <ul className="treeview-menu collapse" id="review">
                {reviews.map((item) => (
                  <li key={item.id}>
                    <Link href={item.route}>
                      <i className="fa fa-circle"></i> {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li> */}
            {/* End Review */}

            <li
              className={`treeview ${
                isSinglePageActive("/favorites", route.pathname)
                  ? "active"
                  : ""
              }`}
            >
              <Link href="/user/favorites">
                <i className="flaticon-heart"></i>
                <span> My Favorites</span>
              </Link>
            </li>
            {/* <li
              className={`treeview ${
                isSinglePageActive("/my-saved-search", route.pathname)
                  ? "active"
                  : ""
              }`}
            >
              <Link href="/my-saved-search">
                <i className="flaticon-magnifying-glass"></i>
                <span> Saved Search</span>
              </Link>
            </li>
            <li
              className={`treeview ${
                isSinglePageActive("/my-saved-search", route.pathname)
                  ? "active"
                  : ""
              }`}
            >
              <Link href="/my-saved-search">
                <i className="flaticon-envelope"></i>
                <span> Reviews</span>
              </Link>
            </li> */}
          </ul>
        </li>
        {/* End manage listing */}

        <li className="title">
          <span>Profile</span>
          <ul>
            {/* {manageAccount.map((item) => (
              <li
                className={
                  isSinglePageActive(item.route, route.pathname) ? "active" : ""
                }
                key={item.id}
              >
                <Link href={item.route}>
                  <i className={item.icon}></i> <span>{item.name}</span>
                </Link>
              </li>
            ))} */}
            <li onClick={logoutUser} >
              <a href='#' className="dropdown-item" >
                <i className='flaticon-logout'></i> <span>Logout</span>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
};

export default SidebarMenu;
