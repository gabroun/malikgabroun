import * as S from "./styles";

import React, { useEffect, useState } from "react";

import Content from "@components/Content";
import ArrowIcon from "./ArrowIcon";

const Carousel = () => {
  const [content, setContent] = useState(Content);
  const [currentSlide, setCurrentSlide] = useState(0);
  const currentIndex = currentSlide;

  useEffect(() => {
    if (currentIndex !== 0) {
      document
        .querySelector(`.item[data-index="${currentIndex}"]`)
        ?.classList.add("show");
    }
  }, [currentIndex]);

  const previousSlide = () => {
    const lastIndex = content.length - 1;

    const shouldResetIndex = currentIndex === 0;
    const index = shouldResetIndex ? currentIndex : currentIndex - 1;

    if (document.querySelectorAll(".item.show").length && currentIndex !== 0) {
      document.querySelector(".item.show")?.classList.remove("show");
    }

    setCurrentSlide(index);
  };

  const nextSlide = () => {
    const lastIndex = content.length - 1;

    const shouldResetIndex = currentIndex === lastIndex;
    const index = shouldResetIndex ? lastIndex : currentIndex + 1;

    if (document.querySelectorAll(".item.show").length) {
      document.querySelector(".item.show")?.classList.remove("show");
    }

    if (currentIndex + 1 !== lastIndex && currentIndex !== lastIndex) {
      document
        .querySelector(`.item[data-index="${currentIndex + 1}"]`)
        ?.nextElementSibling?.classList.add("show");
    }

    setCurrentSlide(index);
  };

  useEffect(() => {
    document
      .querySelector(".item.active")
      ?.nextElementSibling?.classList.add("show");
  }, []);

  return (
    <>
      <S.CarouselWrapper className="carousel-wrapper">
        <ul className="progress-bar">
          {content.map((item, index) => {
            return (
              <li
                className={currentSlide === index ? "item active" : "item"}
                key={index}
                data-index={index}
              >
                {currentSlide === index && (
                  <span>{content[currentSlide].dates}</span>
                )}
              </li>
            );
          })}
        </ul>
        <S.Carousel className="carousel">
          <div
            className="left-arrow"
            onClick={previousSlide}
            style={{
              borderColor: currentSlide > 0 ? "#F47C48" : "#DFDFDF",
            }}
          >
            <ArrowIcon>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.1064 21.4818C12.2519 21.3366 12.3673 21.1642 12.4461 20.9744C12.5249 20.7845 12.5654 20.581 12.5654 20.3755C12.5654 20.17 12.5249 19.9665 12.4461 19.7767C12.3673 19.5868 12.2519 19.4144 12.1064 19.2693L3.83448 11.0005L12.1064 2.73176C12.2516 2.58648 12.3669 2.41402 12.4455 2.22421C12.5241 2.0344 12.5646 1.83096 12.5646 1.62551C12.5646 1.42006 12.5241 1.21662 12.4455 1.02681C12.3669 0.837 12.2516 0.664534 12.1064 0.519259C11.9611 0.373984 11.7886 0.258746 11.5988 0.180124C11.409 0.101502 11.2056 0.0610352 11.0001 0.0610352C10.7947 0.0610352 10.5912 0.101502 10.4014 0.180124C10.2116 0.258746 10.0391 0.373984 9.89386 0.519259L0.518857 9.89426C0.373347 10.0394 0.2579 10.2118 0.17913 10.4017C0.100359 10.5915 0.0598145 10.795 0.0598145 11.0005C0.0598145 11.206 0.100359 11.4095 0.17913 11.5994C0.2579 11.7892 0.373347 11.9616 0.518857 12.1068L9.89386 21.4818C10.039 21.6273 10.2114 21.7427 10.4013 21.8215C10.5911 21.9003 10.7946 21.9408 11.0001 21.9408C11.2056 21.9408 11.4091 21.9003 11.599 21.8215C11.7888 21.7427 11.9612 21.6273 12.1064 21.4818Z"
                fill={currentSlide > 0 ? "#F47C48" : "#DFDFDF"}
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.9375 11C21.9375 10.5856 21.7729 10.1882 21.4799 9.89515C21.1868 9.60212 20.7894 9.4375 20.375 9.4375H4.75C4.3356 9.4375 3.93817 9.60212 3.64515 9.89515C3.35212 10.1882 3.1875 10.5856 3.1875 11C3.1875 11.4144 3.35212 11.8118 3.64515 12.1049C3.93817 12.3979 4.3356 12.5625 4.75 12.5625H20.375C20.7894 12.5625 21.1868 12.3979 21.4799 12.1049C21.7729 11.8118 21.9375 11.4144 21.9375 11Z"
                fill={currentSlide > 0 ? "#F47C48" : "#DFDFDF"}
              />
            </ArrowIcon>
          </div>
          <div className="Content">
            <div className="title">{content[currentSlide].title}</div>
            <div className="brand">
              <img src={content[currentSlide].imgUrl} />
              <p>{content[currentSlide].subtitle}</p>
            </div>
          </div>
          <div
            className="right-arrow"
            onClick={nextSlide}
            style={{
              borderColor:
                currentSlide < content.length - 1 ? "#F47C48" : "#DFDFDF",
            }}
          >
            <ArrowIcon>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.89373 21.4818C9.74822 21.3366 9.63278 21.1642 9.55401 20.9744C9.47524 20.7845 9.43469 20.581 9.43469 20.3755C9.43469 20.17 9.47524 19.9665 9.55401 19.7767C9.63278 19.5868 9.74822 19.4144 9.89373 19.2693L18.1656 11.0005L9.89373 2.73176C9.74846 2.58648 9.63322 2.41402 9.5546 2.22421C9.47598 2.0344 9.43551 1.83096 9.43551 1.62551C9.43551 1.42006 9.47598 1.21662 9.5546 1.02681C9.63322 0.837 9.74846 0.664534 9.89373 0.519259C10.039 0.373984 10.2115 0.258746 10.4013 0.180124C10.5911 0.101502 10.7945 0.0610352 11 0.0610352C11.2054 0.0610352 11.4089 0.101502 11.5987 0.180124C11.7885 0.258746 11.961 0.373984 12.1062 0.519259L21.4812 9.89426C21.6267 10.0394 21.7422 10.2118 21.821 10.4017C21.8997 10.5915 21.9403 10.795 21.9403 11.0005C21.9403 11.206 21.8997 11.4095 21.821 11.5994C21.7422 11.7892 21.6267 11.9616 21.4812 12.1068L12.1062 21.4818C11.9611 21.6273 11.7887 21.7427 11.5988 21.8215C11.409 21.9003 11.2055 21.9408 11 21.9408C10.7945 21.9408 10.591 21.9003 10.4011 21.8215C10.2113 21.7427 10.0389 21.6273 9.89373 21.4818Z"
                fill={currentSlide < content.length - 1 ? "#F47C48" : "#DFDFDF"}
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.0625 11C0.0625 10.5856 0.22712 10.1882 0.520146 9.89515C0.813172 9.60212 1.2106 9.4375 1.625 9.4375H17.25C17.6644 9.4375 18.0618 9.60212 18.3549 9.89515C18.6479 10.1882 18.8125 10.5856 18.8125 11C18.8125 11.4144 18.6479 11.8118 18.3549 12.1049C18.0618 12.3979 17.6644 12.5625 17.25 12.5625H1.625C1.2106 12.5625 0.813172 12.3979 0.520146 12.1049C0.22712 11.8118 0.0625 11.4144 0.0625 11Z"
                fill={currentSlide < content.length - 1 ? "#F47C48" : "#DFDFDF"}
              />
            </ArrowIcon>
          </div>
        </S.Carousel>
      </S.CarouselWrapper>
    </>
  );
};

export default Carousel;
