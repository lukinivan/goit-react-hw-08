import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./routes/PrivateRoute";
import { PublicRoute } from "./routes/PublicRoute";
import { Layout } from "./components";
import { easyLazy } from "./helpers/easyLazy";
import { Suspense } from "react";

const Home = easyLazy("HomePage");
const Login = easyLazy("LoginPage");
const Contacts = easyLazy("ContactsPage");
const Registration = easyLazy("RegistrationPage");

const App = () => {
  return (
    <Suspense fallback={<div>Loading....</div>}>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Layout />
            </PrivateRoute>
          }
        >
          <Route index element={<Home />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Registration />
            </PublicRoute>
          }
        />
      </Routes>
    </Suspense>
  );
};

export default App;
