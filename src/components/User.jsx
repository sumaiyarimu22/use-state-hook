import { useState } from "react";

const User = () => {
  const [user, setUser] = useState([]);

  const handleAddUser = () => {
    const id = user.length;
    const number = Math.floor(Math.random() * 100 + 1);
    setUser([...user, { id: id, number: number }]);
    console.log(user);
  };

  return (
    <div>
      <button onClick={handleAddUser}>add user</button>
      {user.length > 0 &&
        user.map((singleUser) => (
          <h2 key={singleUser.id}>{singleUser.number}</h2>
        ))}
    </div>
  );
};

export default User;

//type of data amon takhle useSate({}) Emty obj hoi  are onkgulo obj takhle [ ] hobe
// const user = {
//   name: shohan,
//   age: 18,
// };

// const user = "Shohan"  amon takhle ----""----hoito
