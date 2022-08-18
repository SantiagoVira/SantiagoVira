import { Button, Link } from "@chakra-ui/react";
import client from "@components/cms/cms-data";
import { useGetFiles } from "@components/cms/useGetFiles";
import { useEffect, useState } from "react";

const ResumeButton: React.FC = () => {
  const { files } = useGetFiles();
  const [fileLink, setFileLink] = useState("null");

  useEffect(() => {
    const getResume = async () => {
      const resume = await client.fetch(`*[_type == 'fileData'] {
        title,
        "link": file.asset->url
      }`);
      console.log(resume[0].link);

      setFileLink(resume[0].link);
    };

    getResume();
  }, [files]);

  return (
    <Button
      as={Link}
      href={`${fileLink}?dl=Santiago_Vira_Resume`}
      background="rgba(255, 255, 255, 0.08) !important">
      Download my resume
    </Button>
  );
};

export default ResumeButton;
