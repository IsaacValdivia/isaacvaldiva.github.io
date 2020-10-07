import React, { useState } from "react";
import $ from "jquery";
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from "reactstrap";

import "./OwnCarousel.css";

const OwnCarousel = props => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === props.data.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? props.data.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  let slides = null;

  if (props.video) {
    slides = props.data.map(item => {
      return (
        <CarouselItem
          className="custom-tag-video"
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
  } else {
    slides = props.data.map(item => {
      return (
        <CarouselItem
          className="custom-tag-text"
          tag="div"
          key={item.id}
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
        >
          {item.body}
        </CarouselItem>
      );
    });
  }

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