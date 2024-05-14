import { useState } from "react";

const useNav = () => {
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsMenuVisible(!isMenuVisible);
  };

  return {
    isMenuVisible,
    toggleMenu,
  };
};

export default useNav;
