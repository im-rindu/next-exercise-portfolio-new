import { Hero, Content } from "@/components";
import { about, work, review, portfolio } from "@/config/data";

export default function Home() {
  return (
    <section>
      <Hero />
      <Content contentTitle="About" content={about} />
      <Content contentTitle="Recent Work" content={work} />
      <Content contentTitle="Testimonials" content={review} />
    </section>
  );
}
