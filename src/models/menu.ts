import { useState, useCallback } from "react";

export default function useMenuModel() {
    const [ menu, setMenu ] = useState([]);
  
    const fetchMenu = useCallback(() => {
        setMenu([]);
    }, []);
  
    return {
      menu,
      fetchMenu,
    };
  }