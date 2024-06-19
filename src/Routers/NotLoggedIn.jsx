import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import Loading from "../pages/Loading";

const NotLoggedIn = ({ children }) => {
	const { user, isLoading } = useAuth();

	if (isLoading) return <Loading />;

	if (user?.user_type) {
		return <Navigate to="/" replace />;
	}

	return children;
};

export default NotLoggedIn;
