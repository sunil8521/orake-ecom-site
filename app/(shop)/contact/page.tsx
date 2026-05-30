import type { Metadata } from "next";
import Faqs from "@/components/Contact/Faqs";
import ContactSection from "@/components/Contact/ContactSection";

export const metadata: Metadata = {
  title: "Contact Orake — Get In Touch",
  description: "Have questions about Orake energy drinks? Reach out for partnerships, bulk orders, or just to talk flavors. We'd love to hear from you.",
};

export default function ContactPage() {
  return (
     <>
     <ContactSection /> 
     <Faqs />
     </>
  );
}
