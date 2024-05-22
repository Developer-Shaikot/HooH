import { useEffect, useState } from "react";
import { useGetLoggedInUserQuery } from "../feature/auth/authSlice";

export function useAuth() {
    const { data, isLoading, isSuccess } = useGetLoggedInUserQuery();
    const [user, setUser] = useState(data?.user);

    useEffect(() => {
        setUser(data?.user);
    }, [isLoading, data]);

    return { user, isLoading, isSuccess };
}
