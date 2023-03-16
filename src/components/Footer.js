import { useLocation } from "react-router-dom";
const Footer = () => {
  const { pathname } = useLocation();
  return (
    <footer className={pathname === "/shop" && "shop-route-footer"}>
      <a href="https://github.com/peter-dubravec/Shopping-Cart">GitHub Repo</a>
    </footer>
  );
};

export default Footer;
