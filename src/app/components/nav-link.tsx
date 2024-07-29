import { useRouter } from "next/navigation";
import UnderlineHover from "@components/ui/underline-hover";

const NavLink: React.FC<React.PropsWithChildren<{ id: string }>> = ({
  id,
  children,
}) => {
  const router = useRouter();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/#${id}`);
    }
  };

  return (
    <UnderlineHover>
      <button className="" onClick={() => scrollTo(id)}>
        {children}
      </button>
    </UnderlineHover>
  );
};

export default NavLink;
