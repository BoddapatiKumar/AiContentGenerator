import Header from "./_Components/Header";
import SideNav from "./_Components/SideNav";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <div className="md:w-64 hidden md:block fixed">
        <SideNav />
      </div>
      <div className="md:ml-64">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default layout;
