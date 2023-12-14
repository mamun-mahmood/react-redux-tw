import { selectUser } from "../redux/features/user/userSlice";
import { useAppSelector } from "../redux/hooks";

const Home = () => {
    const user = useAppSelector(selectUser)
    return (
        <div>
            <h1>Hello, {user.name}</h1>
            <p>Welcome to React-Boilerplate</p>
            <p>This is a setup is React, ReduxTool Kit, React Router Dom and TailwindCSS</p>
        </div>
    );
};

export default Home;