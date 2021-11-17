import React, { useEffect } from "react";
import {
  StackedCarousel,
  ResponsiveContainer
} from "react-stacked-center-carousel";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import "./Slide.css";
import { Slide } from "./Slide";

const data = [
  {
    image: "https://picsum.photos/200/300/?random=1",
    text: "hello"
  },
  {
    image: "https://picsum.photos/200/300/?random=12",
    text: "lel"
  },
  {
    image: "https://picsum.photos/200/300/?random=13",
    text: "kak"
  },
  {
    image: "https://picsum.photos/200/300/?random=15",
    text: "kk"
  },
  {
    image: "https://picsum.photos/200/300/?random=10",
    text: "away"
  }
];

const CardExample = () => {
  const ref = React.useRef(StackedCarousel);
  //   function onNext(){
  //      ref.current?.goBack(), 5000;
  // }

  useEffect(() => {
    setInterval(stuff, 100000);
    console.log("i fire once");
  }, []);

  function stuff() {
    ref.current?.goNext();
  }

  return (
    <div className="card">
      <div style={{ width: "100%", position: "relative" }}>
        <ResponsiveContainer
          carouselRef={ref}
          render={(width, carouselRef) => {
            return (
              <StackedCarousel
                ref={carouselRef}
                slideComponent={Slide}
                slideWidth={450}
                carouselWidth={width}
                data={data}
                maxVisibleSlide={5}
                disableSwipe
                customScales={[1, 0.85, 0.7, 0.55]}
                transitionTime={450}
              />
            );
          }}
        />
        <Fab
          className="card-button left"
          size="small"
          onClick={() => ref.current?.goBack()}
        >
          <KeyboardArrowLeftIcon style={{ fontSize: 30 }} />
        </Fab>
        <Fab className="card-button right" size="small" onClick={stuff}>
          <KeyboardArrowRightIcon style={{ fontSize: 30 }} />
        </Fab>
      </div>
    </div>
  );
};

export default CardExample;
