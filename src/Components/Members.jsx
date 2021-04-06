import axios from "axios";
import { useQuery } from 'react-query';

export default function Members() {

    const getUsers = async () => {
        const response = await axios.get('https://reqres.in/api/users')
        return response.data
    }

    const { status, data: users, isLoading, isSuccess, error, isError } = useQuery('members', getUsers)

    console.log(useQuery('members', getUsers), users);


    return (
        <div>
            {isLoading && <article>...Loading user </article>}
            {isError && <article>{error.message}</article>}
            {/* isSuccess && (
                data.data.map(el => {
                    return <article key={el.id}>
                        <p>{el.first_name} {el.last_name}</p>
                    </article>
                })
            ) */}
        </div >
    )
}
