import React, { useState } from "react";
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from "reactstrap";

import "./OwnCarousel.css";

const OwnCarousel = props => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === props.videodata.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? props.videodata.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = props.videodata.map(item => {
    return (
      <CarouselItem
        className="custom-tag"
        tag="div"
        key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <iframe
          altText={item.altText}
          width="560"
          height="315"
          src={item.link}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen="true"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
        ></iframe>
      </CarouselItem>
    );
  });

  return (
    <div>
      <Carousel interval={false} activeIndex={activeIndex} next={next} previous={previous}>
        {slides}
        <CarouselControl className="buttonCar" direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl className="buttonCar" direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    </div>
  );
};

export default OwnCarousel;