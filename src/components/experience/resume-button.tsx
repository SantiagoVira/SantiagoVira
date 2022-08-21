import { Button, Link } from "@chakra-ui/react";
import client from "@components/cms/cms-data";
import { useEffect, useState } from "react";

const ResumeButton: React.FC = () => {
  const [fileLink, setFileLink] = useState("");

  useEffect(() => {
    const getResume = async () => {
      const resume = await client.fetch(`*[_type == 'fileData'] {
        title,
        "link": file.asset->url
      }`);

      setFileLink(resume[0].link);
    };

    getResume();
  }, []);

  return (
    <Button
      as={Link}
      href={`${fileLink}?dl=Santiago_Vira_Resume.pdf`}
      bg="#ffffff14">
      Download my resume
    </Button>
  );
};

export default ResumeButton;
