"use client";
import { FlexImage, Icon, SectionPadding } from "@/components";
import { colors } from "@/hooks/useColors";
import { data } from "@/lib/config/data";
// import { ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Heading } from "@/components";
import { padding } from "@/lib/config/constants";
import { Box, Collapsible, Flex } from "@chakra-ui/react";
import Link from "next/link";
import { FC, useState } from "react";

type HeaderProps = {
  image?: string;
};

const Header: FC<HeaderProps> = () => {
  const { header } = data;

  // State to track active dropdown
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Toggle dropdown visibility
  const handleToggle = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  return (
    <Flex
      py="2rem"
      flexDirection="column"
      bg={colors?.black}
      boxShadow="md"
      position="relative"
    >
      <SectionPadding>
        <Flex alignItems="center">
          <Link href="/">
            <FlexImage maxW="14rem" image={header?.logo} />
          </Link>
          <Flex w="full" justifyContent="center" alignItems="center" h="auto">
            {header?.navItems?.map((item, i: number) => (
              <Box key={i}>
                <Flex
                  alignItems="center"
                  cursor="pointer"
                  onClick={() => item.dropdown && handleToggle(item.name)}
                  px="1rem"
                  _hover={{ color: colors?.textBlack }}
                >
                  <Heading fontSize="1.3rem" mr=".5rem">
                    {item.name}
                  </Heading>

                  {item.dropdown && (
                    <>
                      {activeDropdown === item.name ? (
                        <Icon color={colors?.white} name="arrowUp" />
                      ) : (
                        <Icon color={colors?.white} name="arrowDown" />
                      )}
                    </>
                  )}
                </Flex>
                {item.dropdown && (
                  <Collapsible.Root
                    open={activeDropdown === item.name}
                    unmountOnExit
                  >
                    <Collapsible.Content>
                      <Box
                        position="absolute"
                        w="full"
                        h="80vh"
                        top="100%"
                        left="0"
                        bg={colors?.dark}
                        py={"4rem"}
                        zIndex="10"
                      >
                        <Heading
                          fontSize="1.3rem"
                          color={colors?.white}
                          px={{
                            base: padding.layoutPadding_X_Mobile,
                            lg: padding.layoutPadding_X,
                          }}
                          mb="1.5rem"
                        >
                          {`${item.name} >`}
                        </Heading>
                        <Box
                          style={{
                            columnCount: 3,
                            columnGap: "1rem", // Optional: space between columns
                          }}
                        >
                          {item.dropdown.map((dropdownItem, j: number) => (
                            <SectionPadding key={j} breakInside="avoid">
                              <Link href={dropdownItem.link}>
                                <Box
                                  py="0.5rem"
                                  _hover={{ textDecoration: "underline" }}
                                  color={colors?.white}
                                >
                                  {dropdownItem.name}
                                </Box>
                              </Link>
                            </SectionPadding>
                          ))}
                        </Box>
                      </Box>
                    </Collapsible.Content>
                  </Collapsible.Root>
                )}
              </Box>
            ))}
          </Flex>
        </Flex>
      </SectionPadding>
    </Flex>
  );
};

export default Header;
