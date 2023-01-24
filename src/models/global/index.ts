import useUserModel from "./user";
import useMenuModel from "./menu";

export default function useGlobalModel() {
    const { currentUser, loading: fetchCurrentUserLoading, fetchCurrentUser} = useUserModel();
    const { menus, loading: fetchMenuLoading, fetchMenu} = useMenuModel();
    return {
        currentUser,
        fetchCurrentUser,
        fetchCurrentUserLoading,
        menus,
        fetchMenu,
        fetchMenuLoading,
    };
}