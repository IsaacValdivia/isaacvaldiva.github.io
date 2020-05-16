import React, { useState } from "react";
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from "reactstrap";

import "./OwnCarousel.css";

const items = [
  {
    id: 1,
    altText: "Slide 1",
    caption: "Slide 1"
  },
  {
    id: 2,
    altText: "Slide 2",
    caption: "Slide 2"
  },
  {
    id: 3,
    altText: "Slide 3",
    caption: "Slide 3"
  }
];

const OwnCarousel = props => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map(item => {
    return (
      <CarouselItem
        className="custom-tag"
        tag="div"
        key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/7QZ6S6tfF78"
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