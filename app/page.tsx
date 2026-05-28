import { Footer } from "@/components/personal/Footer";
import { Header } from "@/components/personal/Header";
import { Hero } from "@/components/personal/Hero";
import { Method } from "@/components/personal/Method";
import { Metrics } from "@/components/personal/Metrics";
import { Philosophy } from "@/components/personal/Philosophy";
import { Services } from "@/components/personal/Services";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Metrics />
      <Services />
      <Method />
      <Philosophy />
      <Footer />
    </main>
  );
}
