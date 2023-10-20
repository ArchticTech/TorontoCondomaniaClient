import Link from "next/link";
import { useRouter } from "next/router";
import { isSinglePageActive } from "../../../../utils/daynamicNavigation";
import Image from "next/image";
import axios from "axios";
import Cookies from "js-cookie";

const MyAccount = () => {
  const profileMenuItems = [
    { id: 1, name: "My Profile", ruterPath: "/my-profile" },
    { id: 2, name: " My Favourite", ruterPath: "/favorites" },
  ];
  const route = useRouter();
  
  const logoutUser = async () => {
    console.log('Huzaifa');
    const response = await axios.get('/api/logout');
    Cookies.set('loginStatus', false);
    route.push('/');
  }

  return (
    <>
      <div className="user_set_header">
        <Image
          width={40}
          height={40}
          className="float-start"
          src="/assets/images/team/e1.png"
          alt="e1.png"
        />
        <p>
          Ali Tufan <br />
          <span className="address">alitufan@gmail.com</span>
        </p>
      </div>
      {/* End user_set_header */}

      <div className="user_setting_content">
        {profileMenuItems.map((item) => (
          <Link
            href={item.ruterPath}
            key={item.id}
            className="dropdown-item"
            style={
              isSinglePageActive(`${item.ruterPath}`, route.pathname)
                ? { color: "#ff5a5f" }
                : undefined
            }
          >
            {item.name}
          </Link>
        ))}

          <a href='#' className="dropdown-item" onClick={logoutUser} >
            Logout
          </a>
      </div>
    </>
  );
};

export default MyAccount;
