import { IUserState, selectUser } from "../redux/features/user/userSlice";
import { useAppSelector } from "../redux/hooks";
import { useGetUsersQuery } from "../services/user";

const Home = () => {
    const user = useAppSelector(selectUser)
    const { data } = useGetUsersQuery(
        { limit: 10, page: 1 }
    )
    const { data: users = [] } = data || {}
    return (
        <div>
            <h1 className="text-red-700">Hello, {user.name}</h1>
            <p>Welcome to React-Boilerplate</p>
            <p>This is a setup is React, ReduxTool Kit, React Router Dom and TailwindCSS</p>
            <p>
                Following data is fetched with RTK Query from <a href="https://reqres.in/">Reqres</a>
            </p>
            {users.map((user: IUserState) => <div key={user.id} className="
                bg-white
                shadow
                hover:shadow-md
                rounded
                px-8
                pt-6
                pb-8
                my-2 ">
                <h1>{user.first_name + user.last_name}</h1>
                <p>{user.email}</p>

            </div>)}
        </div>
    );
};

export default Home;