import useFetchUsers from "./HookPersonalizado";

const UserList = () => {
    const { users, loading, error } = useFetchUsers();

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <>
            {users.map((user) => (
                <div key={user.id}>{user.login}</div>
            ))}
        </>
    )
}
export default UserList;