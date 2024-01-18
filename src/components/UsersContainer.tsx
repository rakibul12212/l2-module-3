import React, { useEffect, useState } from "react";
import UserList from "./UserList";

const UsersContainer = () => {
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  const url = "https://jsonplaceholder.typicode.com/users";

  const getUsers = async () => {
    setIsloading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      setIsloading(false);
      setData(data);
    } catch (err) {
      setError(true);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const props = {
    data,
    isLoading,
    error,
  };
  return <UserList {...props} />;
};

export default UsersContainer;
