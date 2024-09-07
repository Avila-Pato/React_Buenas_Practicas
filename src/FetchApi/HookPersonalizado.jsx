import { useEffect, useState } from "react";

const useFetchUsers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('https://api.github.com/users');
                const data = await response.json();
                console.log(data);
                setUsers(data);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setError(error);
                setLoading(false);
            }
        };
        fetchUsers();
    }, []);

    return { users, loading, error };
};

export default useFetchUsers;