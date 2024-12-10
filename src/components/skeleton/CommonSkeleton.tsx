import { Box, BoxProps } from "@chakra-ui/react";
import { FC } from "react";
import { SkeletonText } from "../ui/skeleton";

type CommonSkeletonProps = BoxProps & {};

const CommonSkeleton: FC<CommonSkeletonProps> = ({ ...props }) => {
  return (
    <Box {...props} maxW={"600"}>
      <SkeletonText bg="red" noOfLines={1} gap="4" h="20px" />
    </Box>
  );
};

export default CommonSkeleton;
