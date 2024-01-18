import React, { useEffect, useState } from "react";

const useUserData = () => {
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const controller = new AbortController();

  const url = "https://jsonplaceholder.typicode.com/users";

  const getUsers = async () => {
    setIsloading(true);
    try {
      const res = await fetch(url, { signal: controller.signal });
      const data = await res.json();
      setIsloading(false);
      setData(data);
    } catch (err) {
      setError(true);
    }
  };

  useEffect(() => {
    getUsers();

    return () => {
      controller.abort();
    };
  }, []);
  return {isLoading, data, error};
};

export default useUserData;
