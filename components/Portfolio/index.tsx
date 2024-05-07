import { Card } from "../";

interface PortfolioProps {
  content: {
    image: string;
  }[];
}

const Portfolio = ({ content }: PortfolioProps) => (
  <article className="mt-24 overflow-x-hidden w-screen">
    <div className="relative w-[1870px] left-[-275px] flex flex-wrap gap-5 overflow-x-hidden">
      <Card contentType={"Portfolio"} content={content} />
    </div>
  </article>
);

export default Portfolio;
