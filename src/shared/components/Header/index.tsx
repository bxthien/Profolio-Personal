import { Link } from "react-router-dom";
import { menuBar } from "../../utils/constants";
import { Avatar } from "antd";

const Header = () => {
  return (
    <div className="fixed flex h-18 w-full items-center justify-center shadow-lg bg-[#0C0C2B] z-10 bg-opacity-90">
      <div className="flex items-center gap-28 p-2">
        {menuBar.map((item) =>
          item.type === "avatar" ? (
            <Link to={item.link} className="cursor-pointer text-lg text-black">
              <Avatar size={60} src={item.url} alt="avatar" />
            </Link>
          ) : (
            <Link
              to={item.link}
              className="cursor-pointer text-lg text-white font-semibold "
            >
              {item.title}
            </Link>
          )
        )}
      </div>
    </div>
  );
};

export default Header;
