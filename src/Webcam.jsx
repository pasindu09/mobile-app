import Webcam from "react-webcam";
import { useRef } from "react"; // import useRef

const CustomWebcam = () => {
  const webcamRef = useRef(null); // create a webcam reference

  return (
    <div className="container bg-black">
      <Webcam height={600} width={400} ref={webcamRef} />
    </div>
  );
};

export default CustomWebcam;