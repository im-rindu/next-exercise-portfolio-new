import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import "./index.css";

interface ButtonProps {
  buttonName?: string;
  buttonType: string;
  buttonColor?: string;
  buttonImage?: string;
  buttonSize?: string;
}
const ButtonNew = ({
  buttonName,
  buttonType,
  buttonColor,
  buttonImage,
  buttonSize,
}: ButtonProps) => (
  <Button className={`${buttonType} ${buttonColor} ${buttonSize}`}>
    {buttonName ? <span>{buttonName}</span> : null}
    {buttonImage ? <img src={buttonImage} alt={buttonType} /> : null}
  </Button>
);

export default ButtonNew;
