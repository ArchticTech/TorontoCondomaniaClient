import Link from "next/link";
import Router, { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { addCity } from "../../../features/properties/propertiesSlice";
import Cookies from 'js-cookie';
import { useEffect, useState } from "react";

const HeaderMenuContent = ({ float = "" }) => {
  const [loginStatus] = useState(Cookies.get('loginStatus') == 'true')
  const route = useRouter();

  const listing = [
    { id: 1, name: "Pre Construction", routerPath: "/properties" },
    { id: 2, name: "Rentals", routerPath: "/rentals" },
    { id: 3, name: "Assignments", routerPath: "/assignments" },
  ];

  const topCities = [
    { id: 1, name: "Toronto", routerPath: "/toronto" },
    { id: 2, name: "Vaughan", routerPath: "/vaughan" },
    { id: 3, name: "Oakville", routerPath: "/oakville" },
    { id: 4, name: "Mississauga", routerPath: "/mississauga" },
    { id: 5, name: "Brampton", routerPath: "/brampton" },
    { id: 6, name: "Pickering", routerPath: "/pickering" },
    { id: 7, name: "Oshawa", routerPath: "/oshawa" },
    { id: 8, name: "Hamilton", routerPath: "/hamilton" },
    { id: 9, name: "Brantford", routerPath: "/brantford" },
    { id: 10, name: "Kitchener", routerPath: "/kitchener" },
    { id: 11, name: "Cambridge", routerPath: "/cambridge" },
    { id: 12, name: "Niagara Falls", routerPath: "/niagara-falls" },
  ];
  const homeLoan = [
    { id: 1, name: "Mortgage process", routerPath: "/mortgage-process" },
    { id: 2, name: "Pre approval", routerPath: "/pre-approval" },
    { id: 3, name: "Mortgage Calculator", routerPath: "/mortgage-calculator" },
  ];

  const dispatch = useDispatch();
  const submitHandler = (city) => {
    dispatch(addCity(city));
    Router.push("/properties");
  };
  return (
    <ul
      id="respMenu"
      className="ace-responsive-menu text-end d-lg-block d-none"
      data-menu-style="horizontal"
    >

      <li className="dropitem">
        <a
          href="#"
          className={
            listing.some((page) => page.routerPath === route.pathname)
              ? "ui-active"
              : undefined
          }
        >
          <span className="title">Listing</span>
          <span className="arrow"></span>
        </a>
        <ul className="sub-menu ">
          {listing.map((item) => (
            <li key={item.id}>
              <Link
                href={item.routerPath}
                className={
                  route.pathname === item.routerPath ? "ui-active" : undefined
                }
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </li>
      {/* End .dropitem */}

      <li className="dropitem">
        <a
          href="#"
          className={
            topCities.some((page) => page.routerPath === route.pathname)
              ? "ui-active"
              : undefined
          }
        >
          <span className="title">Top Cities</span>
          <span className="arrow"></span>
        </a>
        <ul className="sub-menu ">
          {topCities.map((item) => (
            <li key={item.id}>
              <a
                onClick={() => submitHandler(item.name)}
                style={{ cursor:'pointer' }}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </li>

      {/* End .dropitem */}

      <li className="dropitem">
        <a
          href="#"
          className={
            homeLoan.some(
              (page) =>
                page.routerPath === route.pathname ||
                page.routerPath + "/[id]" === route.pathname
            )
              ? "ui-active"
              : undefined
          }
        >
          <span className="title">Mortgage Approval</span>
          <span className="arrow"></span>
        </a>
        <ul className="sub-menu ">
          {homeLoan.map((item) => (
            <li key={item.id}>
              <Link
                href={item.routerPath}
                className={
                  route.pathname === item.routerPath ||
                  item.routerPath + "/[id]" === route.pathname
                    ? "ui-active"
                    : undefined
                }
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </li>
      {/* End .dropitem */}

      <li className="last">
        <Link
          href="http://torontocondomania.ca/blog"
          className={route.pathname === "/articles" ? "ui-active" : undefined}
        >
          Articles
        </Link>
      </li>
      {/* End .dropitem */}

      <li className={`list-inline-item list_s ${float}`}>
        
      </li>
      {/* End .dropitem */}

      <li className={`list-inline-item add_listing ${float}`}>
        {
        loginStatus ? 
          <Link href="/user">
            <span className="flaticon-home"></span>
            <span className="dn-lg mx-1">Dashboard</span>
          </Link>
        : <a
            href="#"
            className="btn flaticon-user"
            data-bs-toggle="modal"
            data-bs-target=".bd-example-modal-lg"
          >
            <span className="dn-lg">Login/Register</span>
          </a>
          }
      </li>
      {/* End .dropitem */}
    </ul>
  );
};

export default HeaderMenuContent;
