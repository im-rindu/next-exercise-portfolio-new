import { Button } from "@nextui-org/button";

interface ButtonProps {
  buttonName: string;
  buttonType: string;
  buttonColor: string;
  buttonImage: string;
  buttonSize: string;
}
const ButtonNew = ({
  buttonName,
  buttonType,
  buttonColor,
  buttonImage,
  buttonSize,
}) => (
  <Button className={`${buttonType} ${buttonColor} ${buttonSize}`}></Button>
);
