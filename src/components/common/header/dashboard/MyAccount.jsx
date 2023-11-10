import Link from "next/link";
import { useRouter } from "next/router";
import { isSinglePageActive } from "../../../../utils/daynamicNavigation";
import axios from "axios";
import Cookies from "js-cookie";
import Image from "next/image";

const MyAccount = ({userData = []}) => {
  const profileMenuItems = [
    { id: 1, name: "My Profile", ruterPath: "/user/profile" },
    { id: 2, name: " My Favourite", ruterPath: "/user/favorites" },
  ];
  const route = useRouter();
  
  const logoutUser = async () => {
    const response = await axios.get('/api/logout');
    Cookies.set('loginStatus', false);
    route.push('/');
  }

  return (
    <>
      <div className="user_set_header">
        <Image
          width={27}
          height={27}
          className="float-start"
          src="/assets/images/team/profile-icon.png"
          alt="e1.png"
        />
        <p>
          {userData.name}<br />
          <span className="address">{userData.email}</span>
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
