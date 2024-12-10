import { colors } from "@/lib/config/colors";
import { Box, BoxProps, Flex } from "@chakra-ui/react";
import { FC } from "react";
import { Skeleton } from "../ui/skeleton";

type SingleProductSkeletonProps = BoxProps & {};

const SingleProductSkeleton: FC<SingleProductSkeletonProps> = ({
  ...props
}) => {
  return (
    <Box
      {...props}
      maxW={"600px"}
      m="100px auto"
      p="2rem"
      borderRadius="24px"
      border={`1px solid ${colors?.borderColor}`}
    >
      <Skeleton h="300px" w="full" mb="1rem" />
      <Flex justifyContent="space-between" mb="2rem">
        <Skeleton h="12px" w="100px" />
        <Skeleton h="12px" w="100px" />
      </Flex>
      <Flex justifyContent="space-between" mb="2rem">
        <Skeleton h="12px" w="100px" />
        <Skeleton h="12px" w="100px" />
      </Flex>
      <Box w="full" border={`1px solid ${colors?.borderColor}`}></Box>
      <Flex py="3rem" justifyContent="space-between" mb="2rem">
        <Skeleton h="12px" w="100px" />
        <Skeleton h="12px" w="100px" />
      </Flex>
      <Box textAlign="center" mx="auto">
        <Skeleton h="32px" w="full" />
      </Box>
    </Box>
  );
};

export default SingleProductSkeleton;
