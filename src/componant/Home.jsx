import { Outlet } from "react-router-dom";
import Header from "./Header/Header";


const Home = () => {
    return (
        <div>
              <Header></Header>
            <h2 className="text-4xl font-semibold text-pink-500 mt-5">this is home component</h2>

            <Outlet></Outlet>
        </div>
    );
};

export default Home;