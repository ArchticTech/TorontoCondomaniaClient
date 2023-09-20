import Link from "next/link";
import { useRouter } from "next/router";
// import Firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/firestore'; 

const HeaderMenuContent = ({ float = "" }) => {
  
  const route = useRouter();

  // const home = [
  //   {
  //     id: 1,
  //     name: "Home 1",
  //     routerPath: "/",
  //   },
  //   { id: 2, name: "Home 2", routerPath: "/home-2" },
  //   {
  //     id: 3,
  //     name: "Home 3",
  //     routerPath: "/home-3",
  //   },
  //   { id: 4, name: "Home 4", routerPath: "/home-4" },
  //   { id: 5, name: "Home 5", routerPath: "/home-5" },
  //   { id: 6, name: "Home 6", routerPath: "/home-6" },
  //   { id: 7, name: "Home 7", routerPath: "/home-7" },
  //   { id: 8, name: "Home 8", routerPath: "/home-8" },
  //   { id: 9, name: "Home 9", routerPath: "/home-9" },
  //   { id: 10, name: "Home 10", routerPath: "/home-10" },
  // ];

  const home = { name: "Home", routerPath: "/" };

  // const listing = [
  //   {
  //     id: 1,
  //     title: "Listing Grid",
  //     items: [
  //       {
  //         name: "Grid v1",
  //         routerPath: "/listing-grid-v1",
  //       },
  //       {
  //         name: "Grid v2",
  //         routerPath: "/listing-grid-v2",
  //       },
  //       {
  //         name: "Grid v3",
  //         routerPath: "/listing-grid-v3",
  //       },
  //       {
  //         name: "Grid v4",
  //         routerPath: "/listing-grid-v4",
  //       },
  //       {
  //         name: "Grid v5",
  //         routerPath: "/listing-grid-v5",
  //       },
  //       {
  //         name: "Grid v6",
  //         routerPath: "/listing-grid-v6",
  //       },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     title: "Listing List",
  //     items: [
  //       {
  //         name: "List V1",
  //         routerPath: "/listing-list-v1",
  //       },
  //     ],
  //   },
  //   {
  //     id: 3,
  //     title: "Listing Style",
  //     items: [
  //       {
  //         name: "Parallax Style",
  //         routerPath: "/parallax-style",
  //       },
  //       {
  //         name: "Slider Style",
  //         routerPath: "/slider-style",
  //       },
  //       {
  //         name: "Map Header",
  //         routerPath: "/map-header",
  //       },
  //     ],
  //   },
  //   {
  //     id: 4,
  //     title: "Listing Half",
  //     items: [
  //       {
  //         name: "Map V1",
  //         routerPath: "/listing-map-v1",
  //       },
  //       {
  //         name: "Map V2",
  //         routerPath: "/listing-map-v2",
  //       },
  //       {
  //         name: "Map V3",
  //         routerPath: "/listing-map-v3",
  //       },
  //       {
  //         name: "Map V4",
  //         routerPath: "/listing-map-v4",
  //       },
  //     ],
  //   },
  //   {
  //     id: 5,
  //     title: "Agent View",
  //     items: [
  //       {
  //         name: "Agent V1",
  //         routerPath: "/agent-v1",
  //       },
  //       {
  //         name: "Agent V2",
  //         routerPath: "/agent-v2",
  //       },
  //       {
  //         name: "Agent Details",
  //         routerPath: "/agent-details",
  //       },
  //     ],
  //   },
  //   {
  //     id: 6,
  //     title: "Agencies View",
  //     items: [
  //       {
  //         name: "Agencies V1",
  //         routerPath: "/agency-v1",
  //       },
  //       {
  //         name: "Agencies V2",
  //         routerPath: "/agency-v2",
  //       },
  //       {
  //         name: "Agencies Details",
  //         routerPath: "/agency-details",
  //       },
  //     ],
  //   },
  // ];

  // const topCities = [
  //   {
  //     id: 1,
  //     title: "User Admin",
  //     items: [
  //       {
  //         name: "Dashboard",
  //         routerPath: "/my-dashboard",
  //       },
  //       {
  //         name: "My Properties",
  //         routerPath: "/my-properties",
  //       },
  //       {
  //         name: "My Message",
  //         routerPath: "/my-message",
  //       },
  //       {
  //         name: "My Review",
  //         routerPath: "/my-review",
  //       },
  //       {
  //         name: "My Favourites",
  //         routerPath: "/my-favourites",
  //       },
  //       {
  //         name: "My Profile",
  //         routerPath: "/my-profile",
  //       },
  //       {
  //         name: "My Package",
  //         routerPath: "/my-package",
  //       },
  //       {
  //         name: "My Saved Search",
  //         routerPath: "/my-saved-search",
  //       },
  //       {
  //         name: "Add Property",
  //         routerPath: "/create-listing",
  //       },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     title: "Listing Single",
  //     items: [
  //       {
  //         name: "Single V1",
  //         routerPath: "/listing-details-v1",
  //       },
  //       {
  //         name: "Single V2",
  //         routerPath: "/listing-details-v2",
  //       },
  //       {
  //         name: "Single V3",
  //         routerPath: "/listing-details-v3",
  //       },
  //       {
  //         name: "Single V4",
  //         routerPath: "/listing-details-v4",
  //       },
  //     ],
  //   },
  // ];

  // const handleCreateListingClick = () => {
  //   // Check if the user is authenticated
  //   const user = auth.currentUser; // Assuming you use Firebase Authentication

  //   if (user) {
  //     // User is authenticated, allow them to create a listing
  //     router.push('/create-listing'); // Redirect to the create listing page
  //   } else {
  //     // User is not authenticated, redirect to the login page
  //     router.push('/login'); // Redirect to the login page
  //   }
  // };

  const listing = [
    { id: 1, name: "Pre Construction", routerPath: "/pre-construction" },
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

  return (
    <ul
      id="respMenu"
      className="ace-responsive-menu text-end d-lg-block d-none"
      data-menu-style="horizontal"
    >
      {/* <li className="dropitem">
        <Link
          href={home.routerPath}
          className={
            (home.routerPath === route.pathname)
              ? "ui-active"
              : undefined
          }
        >
          <span className="title">{home.name}</span>
        </Link>
      </li> */}
      {/* End .dropitem */}

      {/* <li className="dropitem">
        <a
          href="#"
          className={
            listing.some((parent) => {
              return parent.items.some(
                (page) => page.routerPath === route.pathname
              );
            })
              ? "ui-active"
              : undefined
          }
        >
          <span className="title">Listing</span>
          <span className="arrow"></span>
        </a> */}
      {/* <!-- Level Two--> */}
      {/* <ul className="sub-menu">
          {listing.map((item) => (
            <li className="dropitem arrow" key={item.id}>
              <a
                href="#"
                className={
                  item.items.some((page) => page.routerPath === route.pathname)
                    ? "ui-active"
                    : undefined
                }
              >
                {item.title}
              </a> */}
      {/* <!-- Level Three--> */}
      {/* <ul className="sub-menu ">
                {item.items.map((val, i) => (
                  <li key={i}>
                    <Link
                      href={val.routerPath}
                      className={
                        route.pathname === val.routerPath
                          ? "ui-active"
                          : undefined
                      }
                    >
                      {val.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </li> */}

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

      {/* <div className="custom-dropdown">
        <div
          className={`custom-dropdown-toggle ${isOpen ? "open" : ""}`}
          onClick={toggleDropdown}
        >
          <span className="title">Top Cities</span>
          <span className={`arrow ${isOpen ? "open" : ""}`}></span>
        </div>
        <ul className={`custom-dropdown-content ${isOpen ? "open" : ""}`}>
          {topCities.map((item) => (
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
      </div> */}

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
      {/* <li className={`dropitem ${isOpen ? 'active' : ''}`}>
      <a href="#" onClick={toggleDropdown}>
        <span className="title">Top Cities</span>
        <span className={`arrow ${isOpen ? 'open' : ''}`}></span>
      </a>
      <ul className={`sub-menu ${isOpen ? 'open' : ''}`}>
        {topCities.map((item) => (
          <li key={item.id}>
            <Link href={item.routerPath}>
              <Link className={route.pathname === item.routerPath ? 'ui-active' : ''}>
                {item.name}
              </Link>
            </Link>
          </li>
        ))}
      </ul>
    </li> */}
      {/* End .dropitem */}

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
          <span className="title">Home Loan</span>
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
          href="/articles"
          className={route.pathname === "/articles" ? "ui-active" : undefined}
        >
          Articles
        </Link>
      </li>
      {/* End .dropitem */}

      <li className={`list-inline-item list_s ${float}`}>
        <a
          href="#"
          className="btn flaticon-user"
          data-bs-toggle="modal"
          data-bs-target=".bd-example-modal-lg"
        >
          <span className="dn-lg">Login/Register</span>
        </a>
      </li>
      {/* End .dropitem */}

      {/* <li className={`list-inline-item add_listing ${float}`}>
      <button onClick={handleCreateListingClick}>
        <span className="flaticon-plus"></span>
        <span className="dn-lg"> Create Listing</span>
      </button>
    </li> */}
      <li className={`list-inline-item add_listing ${float}`}>
        <Link href="/create-listing">
          <span className="flaticon-plus"></span>
          <span className="dn-lg mx-1">Create Listing</span>
        </Link>
      </li>
      {/* End .dropitem */}
    </ul>
  );
};

export default HeaderMenuContent;
