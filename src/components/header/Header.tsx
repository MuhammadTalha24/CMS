"use client";
import {
  FlexImage,
  Heading,
  Icon,
  NormalText,
  SectionPadding,
} from "@/components";
import { colors } from "@/hooks/useColors";
import { padding, zIndex } from "@/lib/config/constants";
import { data } from "@/lib/config/data";
import { Box, Collapsible, Flex } from "@chakra-ui/react";
import Link from "next/link";
import { FC, useEffect, useState } from "react";

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

  // Effect to disable scrolling when a dropdown is open
  useEffect(() => {
    if (activeDropdown) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = ""; // Restore scrolling
    }

    // Cleanup on component unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeDropdown]);

  return (
    <Flex
      w="full"
      h="80px"
      flexDirection="column"
      justifyContent="center"
      bg={colors?.black}
      boxShadow="md"
      position="fixed"
      top="0"
      left="0"
      zIndex={zIndex.header}
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
                  <Heading fontSize="1.2rem" mr=".5rem">
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
                        h="70vh"
                        top="100%"
                        left="0"
                        bg={colors?.dark}
                        py={"4rem"}
                        zIndex={zIndex?.headerDropdown}
                      >
                        <Heading
                          fontSize="1.2rem"
                          color={colors?.white}
                          px={{
                            base: padding.layoutPadding_X_Mobile,
                            lg: padding.layoutPadding_X,
                          }}
                          mb="1.5rem"
                        >
                          {`${item.name}`}
                        </Heading>
                        <Box
                          style={{
                            columnCount: 3,
                            columnGap: "1rem", // Optional: space between columns
                          }}
                        >
                          {item.dropdown.map((dropdownItem, j: number) => (
                            <SectionPadding key={j} breakInside="avoid">
                              <Link
                                href={dropdownItem.link}
                                onClick={() => setActiveDropdown(null)}
                              >
                                <NormalText
                                  py="0.5rem"
                                  _hover={{ textDecoration: "underline" }}
                                  color={colors?.white}
                                >
                                  {dropdownItem.name}
                                </NormalText>
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
