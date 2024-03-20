import { useLoaderData } from "react-router-dom";
import User from "../use/User";


const Users = () => {
    const users = useLoaderData();
    console.log(users)
    
    return (
        <div>
            <h1 className="text-3xl font-bold text-orange-400">Users: {users.length} </h1>
        <div className="border rounded-2xl shadow-2xl bg-slate-200 grid grid-cols-3 gap-5 mt-10">
            {
                users.map(user => <User user={user}></User>)
            }
        </div>
        </div>
    );
};

export default Users;

