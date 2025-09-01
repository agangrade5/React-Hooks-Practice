import React, { useContext, createContext} from 'react'

const UserContext = createContext();

const GreatGrandChild = () => {
    const user = useContext(UserContext); // get user directly
    return <h3>User: {user.name} {user.age}</h3>;
};

const GrandChild = () => {
    return <GreatGrandChild />;
};

const Child = () => {
    return <GrandChild />;
};

const ParentContext = () => {
    const user = { name: "Amit", age: 25 };

    return (
        <UserContext.Provider value={user}>
            <div>
                <h2>Parent Component</h2>
                <Child />
            </div>
        </UserContext.Provider>
    );
};

export default ParentContext