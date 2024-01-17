import { useEffect, useState } from 'react';
import Loading from './Loading';
import GithubUsers from './GithubUsers';

const UseEffectAPI = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const getUsers = async () => {
        try {
            setLoading(false);
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            setUsers(await response.json());

        } catch (error) {
            setLoading(false);
            console.log(error)
        }
    }


    useEffect(() => {
        getUsers();
    }, []);

    if (loading) {
        return (<Loading />)
    }

    return (
        <GithubUsers users={users} />
    )

}

export default UseEffectAPI
