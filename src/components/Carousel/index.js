import * as S from './styles';

import LeftArrow from './LeftArrow';
import React from 'react';
import RightArrow from './RightArrow';
import le from '@static/about/leicester.jpg';
import rb from '@static/about/redbox.jpg';
import su from '@static/about/surrey.png';
import ur from '@static/about/unirazak1.png';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: [
        {
          dates: '2016 - present',
          title: 'Front End Developer',
          subtitle: 'Redbox Digital',
          imgUrl: rb,
        },
        {
          dates: '2015 - 2016',
          title: 'MSc Software Engineering',
          subtitle: 'University of Leciester',
          imgUrl: le,
        },
        {
          dates: '2014 - 2015',
          title: 'MSc International Business Management',
          subtitle: 'University of Surrey',
          imgUrl: su,
        },
        {
          dates: '2010 - 2013',
          title: 'BSc Information Technology',
          subtitle: 'University Tun Abdul Razak',
          imgUrl: ur,
        },
      ],
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

    this.setState({
      currentSlide: index,
    });
  }
  nextSlide() {
    const lastIndex = this.state.content.length - 1;
    const currentIndex = this.state.currentSlide;
    const shouldResetIndex = currentIndex === lastIndex;
    const index = shouldResetIndex ? lastIndex : currentIndex + 1;

    this.setState({
      currentSlide: index,
    });
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
