import { FlexColumn, Heading } from "@/components";

import { data } from "@/lib/config/data";
import { FlexProps } from "@chakra-ui/react";
import { FC } from "react";

type IndustryHeadingProps = FlexProps & {};
const IndustryHeading: FC<IndustryHeadingProps> = ({ ...props }) => {
  const { missionVision } = data;
  return (
    <FlexColumn alignItems="left" {...props}>
      <Heading fontSize={{ base: "1rem", lg: "1.75rem" }} fontWeight="700">
        {missionVision?.heading?.title}
      </Heading>
    </FlexColumn>
  );
};

export default IndustryHeading;
