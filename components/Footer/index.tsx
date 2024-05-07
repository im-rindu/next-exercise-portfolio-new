import { navList } from "@/config/nav";
import { Image } from "@nextui-org/image";
import NavMenu from "../NavMenu";

const Footer = () => (
  <footer className="text-white h-fit bg-black px-24 pt-20 pb-8 mt-40 flex flex-col justify-between">
    <div className="text-5xl mb-36 font-bold">
      Have something in mind?
      <div className="man-photo flex flex-row align-middle mt-3">
        <Image src="/images/the-man-circle.png" alt="the-man" />
        <span className="m-3">let’s build together.</span>
      </div>
    </div>
    {/* <Button
        buttonName="Get in touch"
        buttonType="square"
        buttonColor="light"
        buttonSize="large"
      /> */}
    <NavMenu
      leftSide="Build with 💖 by Brightscout & Ayush "
      rightSide={navList}
    />
  </footer>
);

export default Footer;
