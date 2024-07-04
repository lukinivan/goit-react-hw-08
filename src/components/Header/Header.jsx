import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { logoutThunk } from "../../redux/auth/operations";

export const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <header className="px-8 py-4 font-bold text-white bg-slate-800 flex justify-between items-center  ">
      <h2>{user.email}</h2>
      <ul className="flex gap-5 items-center">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/contacts">Contacts</NavLink>
        </li>
        {!isLoggedIn && (
          <>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/register">Register</NavLink>
            </li>
          </>
        )}
        {isLoggedIn && (
          <li>
            <button
              onClick={() => dispatch(logoutThunk())}
              className="btn btn-primary"
            >
              Logout
            </button>
          </li>
        )}
      </ul>
    </header>
  );
};
