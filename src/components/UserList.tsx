const UserList = ({ isLoading, error, data }) => {
  if (isLoading && !error) {
    return <p>loading...</p>;
  }
  if (error) {
    return <p>Something went wrong...</p>;
  }

  return (
    <div>
      {data.map((item) => (
        <p>{item.name}</p>
      ))}
    </div>
  );
};

export default UserList;
