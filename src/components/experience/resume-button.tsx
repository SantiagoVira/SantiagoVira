import client from "@components/cms/cms-data";
import LinkButton from "@components/link-button";
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
    <LinkButton href={`${fileLink}?dl=Santiago_Vira_Resume.pdf`}>
      Download my resume
    </LinkButton>
  );
};

export default ResumeButton;
