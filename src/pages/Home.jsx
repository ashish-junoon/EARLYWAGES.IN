import React, { useEffect } from "react";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import ContactSection from "../components/ContactSection";
import WhyChoose from "../components/WhyChoose";
import RatesFees from "../components/RatesFees";
import DocumentsRequired from "../components/DocumentsRequired";
import EligibilityCriteria from "../components/EligibilityCriteria";
import RepresentativeExample from "../components/RepresentativeExample";
import FAQ from "../components/FAQ";
import Counter from "../components/Counter";
import useSEO from "../helper/useSeo";

const Home = () => {
  useEffect(() => {
    if (window.scrollY > 100) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, []);

  useSEO({
    title: "EarlyWages",
    description:
      "Early wages is one of the easiest lending platform focused on young low income professional, students a customer segment that is underserved by traditional lenders.",
    keywords:
      "salary loan, instant salary loan, personal loan for salaried employees, quick salary advance, instant loan India, online loan application, employee loan service, fast loan approval, short term salary loan, digital lending platform, instant cash loan, emergency salary loan, loan for working professionals, quick personal loan India, salary based lending, 24 hour loan approval, fintech loan service, online personal loan India, easy loan for salaried people, quick cash advance India",
  });
  return (
    <>
      <Hero />
      <Counter />
      <AboutSection />
      <RatesFees />
      <EligibilityCriteria />
      <DocumentsRequired />
      <RepresentativeExample />
      <WhyChoose />
      <FAQ />
      <ContactSection />
    </>
  );
};

export default Home;
