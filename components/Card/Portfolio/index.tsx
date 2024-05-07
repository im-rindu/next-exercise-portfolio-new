import { Image } from "@nextui-org/image";

interface PortfolioProps {
  item: {
    image: string;
  };
}

const Portfolio = ({ item }: PortfolioProps) => (
  <figure className="bg-light-gray w-fit h-fit m-0 p-12">
    <img src={item.image} alt="portfolio" />
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
