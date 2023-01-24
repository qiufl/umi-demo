import { useState, useCallback } from "react";
import { useRequest } from "umi";
import { curr } from "@/services/users";

export default function useUserModel() {

    const [ currentUser, setCurrentUser ] = useState({});
    const [ loading, setLoading ] = useState(false);

    const fetchCurrentUser = useCallback(() => {
        setLoading(true);
        curr().then((resp) => {
            setCurrentUser(resp);
        }).finally(() => setLoading(false));
    }, []);

    return {
        loading,
        currentUser,
        fetchCurrentUser,
    };
}