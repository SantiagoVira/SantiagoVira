import { useEffect, useState } from "react";
import client from "./cms-data";

export const useGetFiles = () => {
  const [files, setFiles] = useState<any[]>([]);

  useEffect(() => {
    const updateModal = async () => {
      const data = await client.fetch(`*[_type=="fileData"]`);
      setFiles(data);
    };

    updateModal();
  }, []);

  return { files };
};
