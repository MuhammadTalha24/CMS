import { borderRadius } from "@/lib/config/constants";
import { Grid, GridItem, GridProps } from "@chakra-ui/react";
import { FC } from "react";
import { Skeleton, SkeletonText } from "../ui/skeleton";

type ProductCardSkeletonProps = GridProps & {};

const CommonSkeleton: FC<ProductCardSkeletonProps> = ({ ...props }) => {
  const arr = [1, 2, 3, 4];
  return (
    <Grid
      gridTemplateColumns="repeat(2, 1fr)"
      {...props}
      gap={6}
      w="full"
      px="1rem"
      {...props}
    >
      {arr?.map((item: number) => (
        <GridItem key={item}>
          <Skeleton
            borderRadius={borderRadius?.md}
            mb="1rem"
            w="full"
            height="200px"
          />
          <SkeletonText mb=".5rem" noOfLines={1} gap="4" h="12px" w="full" />
          <SkeletonText noOfLines={1} gap="4" h="12px" w="50%" />
        </GridItem>
      ))}
    </Grid>
  );
};

export default CommonSkeleton;
