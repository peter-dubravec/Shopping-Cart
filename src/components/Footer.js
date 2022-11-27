import { useLocation } from "react-router-dom";
const Footer = () => {
  const { pathname } = useLocation();
  return (
    <footer className={pathname === "/shop" && "shop-route-footer"}>
      &copy; Peter Dubravec 2022
    </footer>
  );
};

export default Footer;
