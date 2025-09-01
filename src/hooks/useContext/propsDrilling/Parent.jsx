import React from "react";

const GreatGrandChild = ({ user }) => {
  return <h3>User: {user.name}</h3>;
};

const GrandChild = ({ user }) => {
  return <GreatGrandChild user={user} />;
};

const Child = ({ user }) => {
  return <GrandChild user={user} />;
};

const Parent = () => {
    const user = { name: "Amit", age: 25 };

    return (
        <div>
            <h2>Parent Component</h2>
            <Child user={user} />
        </div>
    );
};

export default Parent;
