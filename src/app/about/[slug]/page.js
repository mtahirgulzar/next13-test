import React from "react";
import { adminPath } from "@/utils/constants";
import { FaqCards } from "@/components/faq";

const Projects = async () => {
  try {
    const res = await fetch(`${adminPath}/projects?populate=deep`);
    return res.json();
  } catch (error) {
    console.log("err>>>>>>", error);
  }
};

async function getData(slug) {
  const res = await fetch(`${adminPath}/projects/${slug}?populate=deep`);
  if (!res.ok) {
    console.log(res);
  }
  return res.json();
}

export default async function Index({ params: { slug } }) {
  const slugdata = await getData(slug);
  const postdata = slugdata?.data?.attributes;
  const projectsData = await Projects();

  console.log("slugs data>>>>", postdata);

  return (
    <>
      {/* <Hero data={postdata?.projectPages[0]} /> */}
      {/* <MuslimCommunitySuicide
        data={postdata && postdata?.projectPages && postdata?.projectPages[1]}
      /> */}
      {/* <UniqueChallengesCards
        data={postdata?.projectPages[2]}
        projectsData={projectsData}
      /> */}
      {/* <SupportSuicide data={postdata?.projectPages[3]} /> */}
      {/* <AppointmentCta data={postdata?.projectPages[4]} /> */}
      <FaqCards data={postdata?.projectPages[5]} />
      {/* <SurveyForm data={postdata?.projectPages[6]} /> */}
      {/* <Testimonial data={postdata?.Testimonial} /> */}
      {/* <MMHIUCBerkeley data={postdata?.projectPages[7]} /> */}
    </>
  );
}
