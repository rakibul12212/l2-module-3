import UserList from "./UserList";
import useUserData from "../hooks/useUserData";

const UsersContainer = () => {
  const { isLoading, data, error } = useUserData();

  const props = {
    data,
    isLoading,
    error,
  };
  return <UserList {...props} />;
};

export default UsersContainer;
