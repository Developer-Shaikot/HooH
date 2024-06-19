import { useEffect, useState } from "react";
import { useLoggedInUserQuery } from "../feature/auth/authSlice";
import { useNavigate } from "react-router-dom";

export function useAuth() {
	const { data, isSuccess, isError } = useLoggedInUserQuery();
	const [user, setUser] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const navigate = useNavigate();

	useEffect(() => {
		if (isSuccess && data?.user) {
			setUser(data.user);
			setIsLoading(false);
		}

		if (isError) {
			setIsLoading(false);
		}
	}, [data, isSuccess, isError]);

	const resetAuth = () => {
		setUser({});
		navigate("/");
	};

	return { user, isLoading, resetAuth };
}
