import Features from "@/components/Features";
import Footer from "@/components/Footer";
import GetinTouch from "@/components/GetinTouch";
import Hero from "@/components/Hero";
import JoinMission from "@/components/JoinMission";
import Mission from "@/components/Mission";
import Navbar from "@/components/Navbar";
import Partners from "@/components/Partners";
import SuccessStories from "@/components/SuccessStories";
export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Mission />
      <Partners />
      <SuccessStories />
      <JoinMission />
      <GetinTouch />
    </>
  );
}
