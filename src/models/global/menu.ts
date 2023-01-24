import { useState, useEffect, useCallback } from "react";
import { useRequest } from "umi";
import { getMenus } from "@/services/menu";

export default function useMenuModel() {
    const [ menus, setMenus ] = useState<API.Menu[]>([]);
    const [ loading, setLoading ] = useState<boolean>(false);
    const fetchMenu = useCallback(() => {
        setLoading(true);
        getMenus().then((resp) => {
            setMenus(resp);
        }).finally(() => setLoading(false));
    }, []);
    // useEffect(fetchMenu, [1]);
    return {
        menus,
        loading,
        fetchMenu,
    };
}