"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";

import { FlexColumn, IndustryHeading } from "@/components";
import { NormalText } from "@/components/text";
import { useColors } from "@/hooks";
import { fonts } from "@/hooks/useFont";
import { data } from "@/lib/config/data";
import { useState } from "react";

const MissionVision = () => {
  const { missionVision } = data;
  const { colors } = useColors();
  const [currentItem, setCurrentItem] = useState<any>(null);
  return (
    <Box h="80vh" position="relative">
      <IndustryHeading mb="4rem" />
      <Grid templateColumns="1fr 1fr" gap={6}>
        <FlexColumn>
          {missionVision?.items?.map((item: any, i: number) => (
            <Box py=".5rem" key={i}>
              <NormalText
                color={
                  currentItem?.name === item?.name
                    ? colors?.white
                    : colors?.textBlack
                }
                fontSize={"1rem"}
                transition=".3s"
                display="inline"
                cursor="pointer"
                _hover={{
                  color: colors?.white,
                }}
                onMouseEnter={() => setCurrentItem(item)}
              >
                {item?.name}
              </NormalText>
            </Box>
          ))}
        </FlexColumn>

        <FlexColumn alignItems="flex-end">
          {currentItem && currentItem?.name === "Values" ? (
            currentItem.dataList.map((value: any, i: number) => (
              <Box key={i} mb={2}>
                <Text
                  fontFamily={fonts?.Poppins}
                  fontSize="1rem"
                  color={colors?.white}
                >
                  <strong>{value.boldText}</strong> {value.text}
                </Text>
              </Box>
            ))
          ) : (
            <Box>
              <NormalText mb="1rem">{currentItem?.dataList?.title}</NormalText>
              <Flex maxW="full" maxH="80vh" overflow="hidden">
                <Image
                  w="full"
                  h="auto"
                  objectFit="cover"
                  src={currentItem?.dataList?.image}
                  borderRadius={4}
                  alt="Logo Image"
                />
              </Flex>
            </Box>
          )}
        </FlexColumn>
      </Grid>
    </Box>
  );
};

export default MissionVision;
