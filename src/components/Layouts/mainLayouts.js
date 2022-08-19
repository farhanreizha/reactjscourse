import { Fragment } from "react";
import NavigationLayout from "./navigationLayout";
import Footer from "./footer";

const MainLayout = ({ children }) => {
  return (
    <Fragment>
      <NavigationLayout />
      {children}
      <Footer />
    </Fragment>
  );
};

export default MainLayout;
