interface WorkProps {
  item: {
    title: string;
    work: string;
  };
}
const Work = ({ item }: WorkProps) => (
  <article>
    <div className="mb-5">
      <h2 className="text-4xl font-medium">{item.title}</h2>
      <p className="text-lg">{item.work}</p>
    </div>
    {/* <Button
      buttonType="rounded"
      buttonColor="transparent"
      buttonImage="/images/arrow.png"
    /> */}
  </article>
);

export default Work;
