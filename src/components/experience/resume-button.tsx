import { Button, Link } from "@chakra-ui/react";
import client from "@components/cms/cms-data";
import { useEffect, useState } from "react";

const ResumeButton: React.FC = () => {
  const [file, setFile] = useState();

  useEffect(() => {
    const updateModal = async () => {
      const data = await client.fetch(`*[_type=="fileData"]`);
      setFile(data.filter((file: any) => file.title == "resume"));
    };

    updateModal();
  }, []);

  console.log(file);

  return (
    <Button
      as={Link}
      href="/Santiago_Vira_Resume.pdf"
      background="rgba(255, 255, 255, 0.08) !important"
      download="Santiago_Vira_Resume">
      Download my resume
    </Button>
  );
};

export default ResumeButton;
