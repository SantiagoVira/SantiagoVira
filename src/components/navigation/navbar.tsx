import { useIsMobile } from "@hooks/useIsMobile";
import { INavigationProps, MobileNavigation, Navigation } from "./navigation";

const Navbar: React.FC<INavigationProps> = ({ selectedTab }) => {
  const isMobile = useIsMobile();
  return isMobile ? (
    <MobileNavigation selectedTab={selectedTab} />
  ) : (
    <Navigation selectedTab={selectedTab} />
  );
};

export default Navbar;
