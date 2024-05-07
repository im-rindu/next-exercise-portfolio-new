import { Image } from "@nextui-org/image";
interface ReviewProps {
  item: {
    review: string;
    image: string;
    name: string;
    job: string;
  };
}
const Review = ({ item }: ReviewProps) => (
  <article>
    <p>‟{item.review}”</p>
    <div className="mt-4 mb-10 w-fit grid gap-6 grid-cols-[1fr_4fr]">
      <img src={item.image} alt="reviewer" />
      <div className="flex flex-col justify-around ">
        <p>{item.name}</p>
        <p>{item.job}</p>
      </div>
    </div>
  </article>
);

export default Review;
