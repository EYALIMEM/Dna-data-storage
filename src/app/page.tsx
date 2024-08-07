import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";
import UploadPage from "@/components/UploadPage/UploadPage";

import Link from "next/link";
export const metadata: Metadata = {
  title: "DaaS",
  description: "DNA data storage",
  // other metadata
};

export default function Home() {
  return (
    <>
      <Hero />
      <Features />

      <Video />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Contact />
    </>
  );
}
