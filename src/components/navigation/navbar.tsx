import { useIsMobile } from "@hooks/useIsMobile";
import { MobileNavigation, Navigation } from "./navigation";

const Navbar: React.FC = () => {
  const isMobile = useIsMobile();
  return isMobile ? <MobileNavigation /> : <Navigation />;
};

export default Navbar;
