import { useRef, useState, useEffect } from "react";
import "@tensorflow/tfjs-core";
import "@tensorflow/tfjs-converter";
import "@tensorflow/tfjs-backend-webgl";
import * as bodyPix from "@tensorflow-models/body-pix";
import Webcam from "react-webcam";
import styles from "./test.scss";

function WebcamComponent() {
  const canvasRef = useRef(null);
  const webcamRef = useRef(null);
  const [bodypixnet, setBodypixnet] = useState();
  let animationId = null;

  useEffect(() => {
    let isUnmounted = false;

    bodyPix.load().then((net) => {
      if (isUnmounted) return;
      setBodypixnet(net);
    });

    return () => {
      // isUnmounted.current = true;
      if (bodypixnet) {
        bodypixnet.dispose(); // Dispose of the TensorFlow model
      }
      setBodypixnet(null);

      if (webcamRef.current) {
        // stop the webcam
        webcamRef.current.video.pause();
      }
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  const drawimage = async (webcam, context, canvas) => {
    // create tempCanvas
    if (
      !webcam ||
      !canvas ||
      webcam.videoWidth === 0 ||
      webcam.videoHeight === 0 ||
      canvas.width === 0 ||
      canvas.height === 0
    ) {
      return; // Exit the function
    }

    const tempCanvas = document.createElement("canvas");
    tempCanvas.width = webcam.videoWidth;
    tempCanvas.height = webcam.videoHeight;
    const tempCtx = tempCanvas.getContext("2d");
    (async function drawMask() {
      animationId = requestAnimationFrame(drawMask);

      if (
        webcam.readyState === 4 &&
        webcam.videoWidth !== 0 &&
        webcam.videoHeight !== 0
      ) {
        const segmentation = await bodypixnet.segmentPerson(webcam);
        const mask = bodyPix.toMask(segmentation);
        tempCtx.putImageData(mask, 0, 0);

        // draw original image
        context.drawImage(webcam, 0, 0, canvas.width, canvas.height);
        // use destination-out, then only masked area will be removed
        context.save();
        context.globalCompositeOperation = "destination-out";
        context.drawImage(tempCanvas, 0, 0, canvas.width, canvas.height);
        context.restore();
      }
    })();
  };

  const onPlaying = async () => {
    const webcam = webcamRef.current.video;
    const canvas = canvasRef.current;
    webcam.width = canvas.width = webcam.videoWidth;

    webcam.height = canvas.height = webcam.videoHeight;
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
    if (bodypixnet) {
      drawimage(webcam, context, canvas);
    }
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div>
          <Webcam
            audio={false}
            ref={webcamRef}
            className={styles.video}
            onPlaying={onPlaying}
            style={{
              zIndex: -1000,
              opacity: 0,
              position: "fixed",
            }}
          />
        </div>
        <div className={styles.videoContainer}>
          <canvas
            ref={canvasRef}
            className={styles.canvas}
            style={{
              width: "1300px",
            }}
          />
        </div>
      </main>
    </div>
  );
}

export default WebcamComponent;
