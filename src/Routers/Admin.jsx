import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { toast } from "sonner";
import Loading from "../pages/Loading";

const Admin = ({ children }) => {
	const { user, isLoading } = useAuth();

	if (isLoading) return <Loading />;

	if (user?.user_type !== "admin") {
		toast.error("Unauthorized access");
		return <Navigate to="/" replace />;
	}

	return children;
};

export default Admin;
