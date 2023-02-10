import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Courses from './components/courses/Courses';
import Home from './components/Home/Home';
import Footer from './components/layout/Footer/Footer';
import Header from './components/layout/Header/Header';
import { Login } from './components/Auth/login/Login';
import { Register } from './components/Auth/register/Register';
import ForgetPassword from './components/Auth/ForgetPassword/ForgetPassword';
import ResetPassword from './components/Auth/ResetPassword/ResetPassword';
import Contact from './components/contact/Contact';
import RequestCourse from './components/request/RequestCourse';
import About from './components/About/About';
import Subscribe from './components/payment/Subscribe';
import NotFound from './components/layout/notFound/NotFound';
import PaymentSuccess from './components/payment/PaymentSuccess';
import PaymentFail from './components/payment/PaymentFail';
import CoursePage from './components/CoursePage/CoursePage';
import Profile from './components/Profile/Profile';
import ChangePassword from './components/Profile/ChangePassword';
import UpdateProfile from './components/Profile/UpdateProfile';
import Dashboard from './components/Admin/Dashboard/Dashboard';
import AdminCourses from './components/Admin/AdminCourese/AdminCourses';
import User from './components/Admin/User/User';
import CreateCourses from './components/Admin/createCourses/CreateCourses';
import Sidebar from './components/Admin/Sidebar';
import { useSelector, useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from 'react';
import { myProfile } from './redux/actions/user';
import { ProtectedRoute } from 'protected-route-react';
function App() {
  window.addEventListener('contextmenu', e => {
    e.preventDefault();
  });
  const { isAuthenticated, user, message, error } = useSelector(
    state => state.user 
    );
    console.log("🚀 ~ file: App.js:36 ~ App ~ isAuthenticated", isAuthenticated)
  const dispatch = useDispatch();
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }

    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
  }, [dispatch, error, message]);

  useEffect(() => {
    dispatch(myProfile());
  }, [dispatch]);
  return (
    <Router>
      <Header isAuthenticated={isAuthenticated} user={user} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Profile />
            </ProtectedRoute>
          }
        />
        
        <Route path="/changePassword" element={<ChangePassword />} />
        <Route path="/updateProfile" element={<UpdateProfile />} />
        <Route path="/request" element={<RequestCourse />} />
        <Route
          path="/login"
          element={
            <ProtectedRoute
              isAuthenticated={!isAuthenticated}
              redirect="/profile"
            >
              <Login />
            </ProtectedRoute>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/Subscribe" element={<Subscribe />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/paymentSuccess" element={<PaymentSuccess />} />
        <Route path="/paymentFail" element={<PaymentFail />} />
        <Route path="/course/:id" element={<CoursePage />} />

        {/**Admin Update**/}

        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/sidebar" element={<Sidebar />} />
        <Route path="/admin/createCourse" element={<CreateCourses />} />
        <Route path="/admin/courses" element={<AdminCourses />} />
        <Route path="/admin/users" element={<User />} />
      </Routes>
      <Footer />
      <Toaster />
    </Router>
  );
}

export default App;
