import "react-pro-sidebar/dist/css/styles.css";
import {
  ProSidebar,
  SidebarHeader,
  SidebarFooter,
  Menu,
  MenuItem,
  SubMenu,
  SidebarContent,
} from "react-pro-sidebar";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

const home = { name: "Home", routerPath: "/" };

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
const MobileMenuContent = () => {
  const route = useRouter();
  return (
    <ProSidebar>
      <SidebarHeader>
        <div className="sidebar-header">
          <Link href="/" className="sidebar-header-inner">
            <Image
              width={40}
              height={45}
              className="nav_logo_img img-fluid mt20"
              src="/assets/images/logo.png"
              alt="header-logo.png"
            />
            <span className="brand-text">TCM</span>
          </Link>
          {/* End .logo */}

          <div
            className="fix-icon"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <span className="flaticon-close"></span>
          </div>
          {/* Mobile Menu close icon */}
        </div>

        {/* End logo */}
      </SidebarHeader>

      <SidebarContent>
        <Menu>
          {/* <SubMenu
              title="Home"
              className={
                home.some((page) => page.routerPath === route.pathname)
                  ? "parent-menu-active"
                  : undefined
              }
            >
              {home.map((val, i) => (
                <MenuItem key={i} active={true}>
                  <Link
                    href={val.routerPath}
                    className={
                      val.routerPath === route.pathname ? "ui-active" : undefined
                    }
                  >
                    {val.name}
                  </Link>
                </MenuItem>
              ))}
            </SubMenu> */}
          {/* End Home Home */}

          {
            <SubMenu
              title="Listing"
              className={
                listing.some((listing) => listing.routerPath === route.pathname)
                  ? "parent-menu-active"
                  : undefined
              }
            >
              {listing.map((val, i) => (
                <MenuItem key={i}>
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
                </MenuItem>
              ))}
            </SubMenu>
          }
          
          {/* end listing */}
          
          {
            <SubMenu
              title="Top Cities"
              className={
                topCities.some((topCities) => topCities.routerPath === route.pathname)
                  ? "parent-menu-active"
                  : undefined
              }
            >
              {topCities.map((val, i) => (
                <MenuItem key={i}>
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
                </MenuItem>
              ))}
            </SubMenu>
          }
          {/* end top cities  */}

          {
            <SubMenu
              title="Home Loan"
              className={
                homeLoan.some((homeLoan) => homeLoan.routerPath === route.pathname)
                  ? "parent-menu-active"
                  : undefined
              }
            >
              {homeLoan.map((val, i) => (
                <MenuItem key={i}>
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
                </MenuItem>
              ))}
            </SubMenu>
          }

          {/* End pages Pages */}

          <MenuItem>
            <Link
              href="/contact"
              className={
                route.pathname === "/contact" ? "ui-active" : undefined
              }
            >
              Contact
            </Link>
          </MenuItem>

          <MenuItem>
            <Link
              href="/login"
              className={route.pathname === "/login" ? "ui-active" : undefined}
            >
              <span className="flaticon-user"></span> Login
            </Link>
          </MenuItem>

          <MenuItem>
            <Link
              href="/register"
              className={
                route.pathname === "/register" ? "ui-active" : undefined
              }
            >
              <span className="flaticon-edit"></span> Register
            </Link>
          </MenuItem>
        </Menu>
      </SidebarContent>

      <SidebarFooter>
        <Link
          href="/create-listing"
          className="btn btn-block btn-lg btn-thm circle"
        >
          <span className="flaticon-plus"></span> Create Listing
        </Link>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default MobileMenuContent;
