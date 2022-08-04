import Image from "next/image";
import mypic from "./png-clipart-g-blackletter-font-others-miscellaneous-text.png";
const MyImage = (props) => {
  return (
    <Image
      src={mypic}
      alt="Picture of the author"
      width="350px"
      height="300px"
    />
  );
};
export default MyImage;
