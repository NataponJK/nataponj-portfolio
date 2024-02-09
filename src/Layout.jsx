import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="sm:w-[640px] w-screen ml-auto mr-auto pt-[20px] px-3">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
