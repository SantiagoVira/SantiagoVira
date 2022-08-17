import { Button, Link } from "@chakra-ui/react";

const ResumeButton: React.FC = () => {
  return (
    <Button as={Link} href="/Santiago_Vira_Resume.pdf" download>
      Download my resume
    </Button>
  );
};

export default ResumeButton;
