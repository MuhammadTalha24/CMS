import { NormalText } from "@/components";
import { colors } from "@/lib/config/colors";
import { Center } from "@chakra-ui/react";

const TEXT = {
  titie: "Oops!",
  shortDescription: "404 - PAGE NOT FOUND",
  description: "The page you are lookinng for might not exist.",
};

const { textBlack, textColor } = colors;

const page = () => {
  return (
    <Center h="100vh" flexDir="column" px="2rem">
      <NormalText
        fontSize={{ base: "4.5rem", md: "6rem" }}
        color={textBlack}
        fontWeight="600"
      >
        {TEXT?.titie}
      </NormalText>
      <NormalText pb="1.2rem" textAlign="center" color={textColor}>
        {TEXT?.shortDescription}
      </NormalText>
      <NormalText
        whiteSpace={{ base: "normal", sm: "pre-line" }}
        textAlign="center"
        color={textColor}
      >
        {TEXT?.description}
      </NormalText>
    </Center>
  );
};

export default page;
