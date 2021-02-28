import * as S from './styles';

import LeftArrow from './LeftArrow';
import React from 'react';
import RightArrow from './RightArrow';
import content from '@components/content';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content,
      currentSlide: 0,
    };

    this.previousSlide = this.previousSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
  }
  previousSlide() {
    const lastIndex = this.state.content.length - 1;
    const currentIndex = this.state.currentSlide;
    const shouldResetIndex = currentIndex === 0;
    const index = shouldResetIndex ? currentIndex : currentIndex - 1;

    if (document.querySelectorAll('.item.show').length && currentIndex !== 0) {
      document.querySelector('.item.show').classList.remove('show');
    }

    this.setState(
      {
        currentSlide: index,
      },
      () => {
        if (currentIndex !== 0) {
          document
            .querySelector(`.item[data-index="${currentIndex}"]`)
            .classList.add('show');
        }
      }
    );
  }
  nextSlide() {
    const lastIndex = this.state.content.length - 1;
    const currentIndex = this.state.currentSlide;
    const shouldResetIndex = currentIndex === lastIndex;
    const index = shouldResetIndex ? lastIndex : currentIndex + 1;

    if (document.querySelectorAll('.item.show').length) {
      document.querySelector('.item.show').classList.remove('show');
    }
    if (currentIndex + 1 !== lastIndex && currentIndex !== lastIndex) {
      document
        .querySelector(`.item[data-index="${currentIndex + 1}"]`)
        .nextElementSibling.classList.add('show');
    }

    this.setState({
      currentSlide: index,
    });
  }
  componentDidMount() {
    document
      .querySelector('.item.active')
      .nextElementSibling.classList.add('show');
  }
  render() {
    return (
      <>
        <S.CarouselWrapper className="carousel-wrapper">
          <ul className="progress-bar">
            {this.state.content.map((item, index) => {
              return (
                <li
                  className={
                    this.state.currentSlide === index ? 'item active' : 'item'
                  }
                  key={index}
                  data-index={index}
                >
                  {this.state.currentSlide === index && (
                    <span>
                      {this.state.content[this.state.currentSlide].dates}
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
          <S.Carousel className="carousel">
            <div
              className="left-arrow"
              onClick={this.previousSlide}
              style={{
                borderColor:
                  this.state.currentSlide > 0 ? '#F47C48' : '#DFDFDF',
              }}
            >
              <LeftArrow
                fill={this.state.currentSlide > 0 ? '#F47C48' : '#DFDFDF'}
              />
            </div>
            <div className="content">
              <div className="title">
                {this.state.content[this.state.currentSlide].title}
              </div>
              <div className="brand">
                <img src={this.state.content[this.state.currentSlide].imgUrl} />
                <p>{this.state.content[this.state.currentSlide].subtitle}</p>
              </div>
            </div>
            <div
              className="right-arrow"
              onClick={this.nextSlide}
              style={{
                borderColor:
                  this.state.currentSlide < this.state.content.length - 1
                    ? '#F47C48'
                    : '#DFDFDF',
              }}
            >
              <RightArrow
                fill={
                  this.state.currentSlide < this.state.content.length - 1
                    ? '#F47C48'
                    : '#DFDFDF'
                }
              />
            </div>
          </S.Carousel>
        </S.CarouselWrapper>
      </>
    );
  }
}

export default Carousel;
