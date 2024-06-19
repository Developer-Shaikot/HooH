import { useEffect, useState } from "react";
import { useLoggedInUserQuery } from "../feature/auth/authSlice";

export function useAuth() {
	const { data, isLoading, isSuccess } = useLoggedInUserQuery();
	const [user, setUser] = useState(data?.user);

	useEffect(() => {
		setUser(data?.user);
	}, [isLoading, data]);

	const resetAuth = () => setUser(undefined);

	return { user, isLoading, resetAuth, isSuccess };
}
