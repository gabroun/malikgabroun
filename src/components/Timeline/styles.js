import styled from 'styled-components';

export const TimelineContainer = styled.section`
  letter-spacing: 0.05em;
`;

export const TimelineColumn = styled.ul`
  position: relative;
  max-width: 95%;
  list-style: none;
  &:before {
    background-color: ${props => props.theme.black};
    content: '';
    margin-left: -1px;
    position: absolute;
    top: 0;
    left: 50%;
    width: 2px;
    height: 100%;
  }
  @media (max-width: 767px) {
    &:before {
      left: 0;
    }
  }
`;

export const EventItem = styled.li`
  position: relative;
  &.col-right {
    left: 50%;
    width: 50%;

    .event__icon {
      left: 0;
    }
  }
  &.col-left {
    width: 50%;
    .event__icon {
      left: 100%;
    }
  }
  @media (max-width: 767px) {
    &.col-right {
      left: 0;
      width: 100%;
    }
    &.col-left {
      width: 100%;
      .event__icon {
        left: 0;
      }
    }
  }
`;

export const EventIcon = styled.label`
  transform: rotate(45deg);
  background-color: ${props => props.theme.black};
  outline: 10px solid ${props => props.theme.white};
  display: block;
  margin: 0.5em 0.5em 0.5em -0.5em;
  position: absolute;
  top: 0;
  left: 2em;
  width: 1em;
  height: 1em;
`;

export const EventContent = styled.div`
  padding: 2em 2em 0 2em;
  position: relative;
  top: -1.875em;
  left: 2em;
  width: 95%;
  @media (max-width: 767px) {
    left: 0;
  }
`;

export const EventDate = styled.p`
  color: ${props => props.theme.white};
  background-color: ${props => props.theme.black};
  box-shadow: inset 0 0 0 0em #ef795a;
  display: inline-block;
  margin-bottom: 1.2em;
  padding: 0.25em 1em 0.2em 1em;
`;

export const EventLogo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  img {
    width: 80px;
    height: 80px;
    margin-bottom: 0;
    margin-right: 10px;
  }
`;

export const Title = styled.h3`
  font-size: 1.75em;
`;

export const SubTitle = styled.h4`
  font-size: 1.2em;
  margin-bottom: 1.2em;
  @media (max-width: 767px) {
    font-size: 1em;
  }
`;
