import { useEffect, useState } from "react";
import { useLoggedInUserQuery } from "../feature/auth/authSlice";

export function useAuth() {
	const { data, isLoading, isSuccess } = useLoggedInUserQuery();
	const [user, setUser] = useState({});

	useEffect(() => {
		setUser(data?.user);
	}, [isLoading, data]);

	const resetAuth = () => setUser({});

	return { user, isLoading, resetAuth, isSuccess };
}
