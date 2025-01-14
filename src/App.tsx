import useUsers from "./hooks/useUsers";
import userService, { User } from "./services/user-service";

function App() {
  const { users, error, isLoading, setUsers, setError } = useUsers();

  const deleteUser = (user: User) => {
    const OriginalUsers = [...users];
    setUsers(users.filter((u) => u.id != user.id));

    userService.delete(user.id).catch((err) => {
      setError(err.message);
      setUsers(OriginalUsers);
    });
  };

  const updateUser = (user: User) => {
    const OriginalUsers = [...users];
    const updatedUser = { ...user, name: user.name + " Updated" };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));
    userService.update(updatedUser).catch((err) => {
      setError(err.message);
      setUsers(OriginalUsers);
    });
  };

  const addUser = () => {
    const OriginalUsers = [...users];
    const newUSer = { id: 0, name: "Rado Lala" };
    setUsers([newUSer, ...users]);
    userService
      .create(newUSer)
      .then(({ data: savedUser }) => setUsers([savedUser, ...users]))
      .catch((err) => {
        setError(err.message);
        setUsers(OriginalUsers);
      });
  };

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-boarder"></div>}
      <button className="btn btn-primary mb-3" onClick={addUser}>
        Add
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item d-flex justify-content-between"
          >
            {user.name}
            <div>
              <button
                className="btn btn-outline-secondary mx-1"
                onClick={() => updateUser(user)}
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(user)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>{" "}
    </>
  );
}

export default App;
