import { Search } from "lucide-react";

const Header = () => {
  return (
    <div className="p-5 shadow-sm border-b-2 flex justify-between items-center bg-white">
      <div className="flex gap-2 items-center p-2 border rounded-md max-w-md bg-white">
        <Search />
        <input type="text" placeholder="Enter..." className="outline-none" />
      </div>
      <div className="bg-violet-700 p-1 rounded-full text-xs text-white px-2">
        <h2>🔥Join membership just for $2/month</h2>
      </div>
    </div>
  );
};

export default Header;
