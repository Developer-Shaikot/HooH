import { Navigate } from "react-router-dom";
import { toast } from "sonner";
import { useAuth } from "../hooks/useAuth";
import Loading from "../pages/Loading";

const Protected = ({ children }) => {
	const { user, isLoading } = useAuth();

	if (isLoading) return <Loading />;

	if (user?.user_type) {
		return children;
	}

	toast.error("Login required for this action");
	return <Navigate to="/" replace />;
};

export default Protected;
