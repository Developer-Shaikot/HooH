import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { toast } from "sonner";
import Loading from "../pages/Loading";

const Admin = ({ children }) => {
	const { user, isLoading, isSuccess } = useAuth();
	console.log(user, isSuccess);

	if (isLoading) return <Loading />;

	if (user?.user_type !== "admin") {
		console.log(user);
		toast.error("Unauthorized access");
		return <Navigate to="/" replace />;
	}

	return children;
};

export default Admin;
