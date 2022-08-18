import { Button, Link } from "@chakra-ui/react";

const ResumeButton: React.FC = () => {
  return (
    <Button
      as={Link}
      href="/Santiago_Vira_Resume.pdf"
      background="rgba(255, 255, 255, 0.08) !important"
      download>
      Download my resume
    </Button>
  );
};

export default ResumeButton;
