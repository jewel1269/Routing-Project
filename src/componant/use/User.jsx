

const User = ({user}) => {
    
    return (
        <div className="border bg-pink-300 rounded-3xl shadow-2xl gap-5 mt-3 h-32 p-5">
            <h1>Company name: {user.company.name}</h1>
            <h2>Name:  {user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            
        </div>
    );
};

export default User;