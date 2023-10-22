import { useSelector, useDispatch } from 'react-redux';
import { getUserEmail } from 'redux/auth/authSelectors';
import { logout } from 'redux/auth/authOperations';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userEmail = useSelector(getUserEmail);

  return (
    <div>
      <p>{userEmail}</p>
      <button
        type="button"
        onClick={() => dispatch(logout())}
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;