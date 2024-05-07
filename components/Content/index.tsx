import { Card } from "@/components";

interface ContentProps {
  contentTitle: "About" | "Recent Work" | "Testimonials";
  content: any;
}
const Content = ({ contentTitle, content }: ContentProps) => (
  <section id={contentTitle} className="grid grid-cols-[2fr_4fr] px-24 mt-40">
    <h3 className="text-2xl font-medium">{contentTitle}</h3>
    <div>
      {contentTitle === "About" ? (
        <p>{content}</p>
      ) : (
        <Card contentType={contentTitle} content={content} />
      )}
    </div>
  </section>
);

export default Content;
