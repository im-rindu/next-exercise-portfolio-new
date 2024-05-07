import { Button } from "@/components";

interface WorkProps {
  item: {
    title: string;
    work: string;
  };
}
const Work = ({ item }: WorkProps) => (
  <article className="grid grid-flow-col mb-8">
    <div className="mb-5">
      <h2 className="text-4xl font-medium">{item.title}</h2>
      <p className="text-lg">{item.work}</p>
    </div>
    <Button
      buttonType="rounded"
      buttonColor="transparent"
      buttonImage="/images/arrow.png"
    />
  </article>
);

export default Work;
