import { Image } from "@nextui-org/image";

const Hero = () => (
  <section className="bg-light-gray h-screen">
    <Image
      src={"/images/the-man.png"}
      alt="hero"
      className="absolute bottom-0 m-auto left-0 right-0 h-9/10"
    />
    <h1 className="">
      Webflow Developer &nbsp; UI/UX Designer &nbsp; Web Designer &nbsp;
    </h1>
  </section>
);

export default Hero;
