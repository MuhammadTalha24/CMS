"use client";
import {
  IconSection,
  IndustrySection,
  PageLayout,
  SectionPadding,
} from "@/components";
import { useColors } from "@/hooks";
import { data } from "@/lib/config/data";

const Page = () => {
  const { colors } = useColors();
  const { aboutSection, leadershipSection } = data;
  return (
    <PageLayout>
      {/* <SliderWithContent sliderData={data?.hero} /> */}
      <SectionPadding py={"3rem"} bg={colors?.black}>
        <IconSection data={aboutSection} />
      </SectionPadding>
      <SectionPadding py={"3rem"} bg={colors?.black}>
        <IconSection order data={leadershipSection} />
      </SectionPadding>
      <SectionPadding py={"3rem"} bg={colors?.black}>
        <IndustrySection />
      </SectionPadding>
      {/* <SectionPadding py={'3rem'} bg={colors?.black}>
				<IndustrySection />
			</SectionPadding> */}
    </PageLayout>
  );
};

export default Page;
