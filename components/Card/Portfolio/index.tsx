import { Image } from "@nextui-org/image";

interface PortfolioProps {
  item: {
    image: string;
  };
}

const Portfolio = ({ item }: PortfolioProps) => (
  <figure className="portfolio">
    <Image src={item.image} alt="portfolio" />
    {/* <Button
      buttonName="Visit the website"
      buttonType="square"
      buttonColor="light"
      buttonSize="regular"
      buttonImage="/images/arrow.png"
    /> */}
  </figure>
);

export default Portfolio;
