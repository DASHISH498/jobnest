import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import TrustedCompanies from "../components/home/TrustedCompanies";
import FeaturedJobs from "../components/home/FeaturedJobs";
import Categories from "../components/home/Categories";
import Stats from "../components/home/Stats";
import WhyChooseUs from "../components/home/WhyChooseUs";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustedCompanies />
      <Stats />
      <FeaturedJobs />
      <Categories />
      <WhyChooseUs />
    </>
  );
}