import { useSelector } from 'react-redux';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const User = () => {
    const { isLoading, error, user } = useTypedSelector((state) => state.user);
    const { getUserById } = useActions();

    return (
        <div>
            <button onClick={() => getUserById(1)}>Get User</button>
            {isLoading ? (
                <div>LOADING...</div>
            ) : error ? (
                <div>{error}</div>
            ) : user?.name ? (
                <h1>User: {user.name}</h1>
            ) : (
                <h1>USER NOT FOUND</h1>
            )}
        </div>
    );
};

export default User;
