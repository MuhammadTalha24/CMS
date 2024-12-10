import { Skeleton, SkeletonCircle } from "@/components/ui/skeleton";
import { Center, CenterProps } from "@chakra-ui/react";
import { FC } from "react";

type ProfileSkeletonProps = CenterProps & {};

const ProfileSkeleton: FC<ProfileSkeletonProps> = ({ ...props }) => {
  return (
    <Center {...props} gap={4} m="100px auto" flexDir="column" maxW="300px">
      <SkeletonCircle size="32" />
      <Skeleton height="4" w="200px" />
      <Skeleton height="4" w="300px" />
    </Center>
  );
};

export default ProfileSkeleton;
