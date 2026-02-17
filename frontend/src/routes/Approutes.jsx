import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import React from "react";
import { Suspense } from "react"; // fallback ui (loading spinners, etc)
import { useAuth } from "../store/context/AuthContext";
import Privateroutes from "./Privateroutes"; // route_guard
import Navbar from "../components/Common/Navbar";
import Footer from "../components/Common/Footer";
const AuthPage = React.lazy(() => import("../pages/authentication/Login"));
const Home = React.lazy(() => import("../pages/users/Home"));
const About = React.lazy(() => import("../pages/users/AboutUs"));
const Contact = React.lazy(() => import("../pages/users/Contact"));
const Blog = React.lazy(() => import("../pages/users/Blog"));
const Shop = React.lazy(() => import("../pages/users/Shop"));
const PrivacyPolicy = React.lazy(
  () => import("../components/Common/PrivacyPolicy"),
);
const TermsAndConditions = React.lazy(
  () => import("../components/Common/TermsAndConditions"),
);
const Cart = React.lazy(() => import("../components/Common/Cart"));
const Orders = React.lazy(() => import("../components/Common/Orders"));
const PageNotFound = React.lazy(
  () => import("../components/Common/PageNotFound"),
);
const Unauthorized = React.lazy(
  () => import("../components/Common/Unauthorized"),
);
const AdminDashboard = React.lazy(
  () => import("../layouts/admin/AdminDashboard"),
);
const VendorDashboard = React.lazy(
  () => import("../layouts/vendor/VendorDashboard"),
);

const Approutes = () => {
  // access the context of user like authentiacted and role
  let { isAuthenticated, role } = useAuth();

  // location hook to access current url path
  let location = useLocation();
  //console.log(url);

  let hideLayout = ["/auth", "/admin", "/vendor"];

  let shouldHideLayout = hideLayout.some(path =>
  location.pathname.startsWith(path)
);


  return (
    <>
      {!shouldHideLayout && <Navbar />}
      <Suspense
        fallback={
          <div className="spinner-border">
            <span className="visually-hidden">Loading...</span>
          </div>
        }
      >
        <Routes>
          {/* public routes */}
          <Route path="/" element={<Navigate to={"/shop"} replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            element={
              <Privateroutes allowedUser={["public", "admin", "vendor"]} />
            }
          >
            <Route path="/shop" element={<Shop />} />
          </Route>

          <Route path="/blog" element={<Blog />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/termsandconditions" element={<TermsAndConditions />} />
          <Route path="/becomedealer" element={<AuthPage />} />


          {/* auth routes (for role based access) */}
          {/* after authentication, paths will be like localhost:5173/admin (or) localhost:5173/vendor (or) localhost:5173/shop */}
          <Route
            path="/auth"
            element={
              isAuthenticated ? (
                <Navigate
                  to={`/${
                    role === "vendor"
                      ? "vendor"
                      : role === "admin"
                        ? "admin"
                        : "shop"
                  }`}
                  replace
                />
              ) : (
                <AuthPage />
              )
            }
          ></Route>
          {/* protected route (denial of access to pages for all users before login) */}
          <Route
            element={
              <Privateroutes allowedUser={["public", "admin", "vendor"]} />
            }
          >
            <Route path="/cart" element={<Cart />} />
          </Route>
          {/* admin routes */}
          <Route element={<Privateroutes allowedUser={["admin"]} />}>
            <Route path="/admin" element={<AdminDashboard />} />
          </Route>

          {/* vendor routes */}
          <Route element={<Privateroutes allowedUser={["vendor"]} />}>
            <Route path="/vendor" element={<VendorDashboard />} />
          </Route>
          {/* fallback routes */}
          <Route path="*" element={<PageNotFound />} />
          <Route path="/unauthorized" element={<Unauthorized />} />
        </Routes>
      </Suspense>
      {!shouldHideLayout && <Footer />}
    </>
  );
};

export default Approutes;
