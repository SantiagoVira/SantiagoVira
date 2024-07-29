import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@components/ui/accordion";

import { ExperienceType } from "@utils/client";
import PortableTextLayout from "@utils/portable-text";

const ExperienceItem: React.FC<ExperienceType> = ({
  title,
  position,
  time,
  body,
}) => {
  return (
    <AccordionItem value={title}>
      <AccordionTrigger className="text-2xl font-bold">
        {title}
      </AccordionTrigger>
      <AccordionContent className="text-lg">
        <p className="italic">{position}</p>
        <p className="font-thin mb-6">{time}</p>
        <div className="ml-4">
          <PortableTextLayout text={body} />
        </div>
      </AccordionContent>
    </AccordionItem>
  );
};

export default ExperienceItem;
