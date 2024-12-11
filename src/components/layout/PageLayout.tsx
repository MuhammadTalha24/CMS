import { Footer, Header, SectionPadding } from "@/components";
import { FC } from "react";

import { useColors } from "@/hooks";
import { Box, BoxProps } from "@chakra-ui/react";

type LayoutProps = BoxProps & {};

const PageLayout: FC<LayoutProps> = ({ children, ...props }) => {
  const { colors } = useColors();
  return (
    <Box bg={colors?.black} {...props}>
      <Header />
      <Box minH={"80vh"}>{children}</Box>
      <SectionPadding borderTop={`1px solid ${colors?.borderColor}`} py="3rem">
        <Footer />
      </SectionPadding>
    </Box>
  );
};

export default PageLayout;
