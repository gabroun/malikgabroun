import styled from 'styled-components';

export const CarouselWrapper = styled.div`
  margin: 80px auto;
  max-width: 500px;
  position: relative;
  .progress-bar {
    list-style: none;
    margin: 0;
    list-style: none;
    width: 335px;
    display: flex;
    margin: auto;
    justify-content: space-evenly;
    @media (max-width: 767px) {
      width: 150px;
    }
  }
  .item {
    border: solid 1px #f47c48;
    border-radius: 50%;
    width: 14px;
    height: 14px;
    position: relative;
    background-color: #fff;
    display: none;
    &.active {
      border: solid 1px #f47c48;
      background-color: #f47c48;
      display: block;
      &:before {
        background-color: #f47c48;
      }

      ~ .item {
        border: solid 1px #dfdfdf;
        &:before {
          background-color: #dfdfdf;
        }
      }

      &:last-of-type:after {
        background-color: #f47c48;
      }
    }

    &.show {
      display: block;
    }

    &:before {
      content: '';
      height: 2px;
      width: 130px;
      display: block;
      top: 50%;
      box-sizing: border-box;
      position: absolute;
      right: 0;
      z-index: -1;
      background-color: #f47c48;
      @media (max-width: 767px) {
        width: 65px;
      }
    }

    &:not(:nth-of-type(1)):before {
      width: 130px;
      @media (max-width: 767px) {
        width: 65px;
      }
    }

    &:after {
      content: '';
      height: 2px;
      width: 130px;
      background-color: #dfdfdf;
      top: 50%;
      position: absolute;
      z-index: -1;
      @media (max-width: 767px) {
        width: 65px;
      }
    }

    span {
      background-color: #393939;
      width: max-content;
      display: flex;
      color: white;
      text-align: center;
      padding: 7px 15px;
      position: relative;
      left: -50px;
      top: -55px;
    }
  }
`;

export const Carousel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 767px) {
    justify-content: center;
  }
  svg {
    vertical-align: middle;
  }

  .content {
    margin-right: 20px;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin-top: 60px;
  }

  .title {
    font-size: 1.25em;
    font-weight: 700;
  }

  .brand {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 36px;
    img {
      width: 80px;
      height: 80px;
      margin-bottom: 0px;
      margin-right: 10px;
    }

    p {
      margin: 0;
      font-size: 1.2em;
    }
  }

  .left-arrow,
  .right-arrow {
    border: solid 4px;
    border-radius: 50%;
    padding: 14px;
    top: -24px;
    position: absolute;
  }

  .left-arrow {
    left: -5px;
    @media (max-width: 767px) {
      left: -10px;
    }
  }

  .right-arrow {
    right: -5px;
    @media (max-width: 767px) {
      right: -10px;
    }
  }
`;
