import Review from "./Review";
import Work from "./Work";
import Portfolio from "./Portfolio";

interface CardProps {
  contentType: string;
  content: any[];
}

const Card = ({ contentType, content }: CardProps) =>
  content.map(
    (item: any) =>
      ({
        Testimonials: <Review item={item} key={item} />,
        "Recent Work": <Work item={item} key={item} />,
        Portfolio: <Portfolio item={item} key={item} />,
      }[contentType])
  );

export default Card;
