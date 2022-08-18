import { Button, Link } from "@chakra-ui/react";

const ResumeButton: React.FC = () => {
  return (
    <Button
      as={Link}
      background="whiteAlpha.200 !important"
      backgroundColor="whiteAlpha.200 !important"
      bg="whiteAlpha.200 !important"
      bgColor="whiteAlpha.200 !important"
      href="/Santiago_Vira_Resume.pdf"
      download>
      Download my resume
    </Button>
  );
};

export default ResumeButton;
