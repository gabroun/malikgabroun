import React from 'react';

import * as S from './styles';

export const Event = ({ title, subtitle, dates, children, position, logo }) => (
  <S.EventItem className={position === 'left' ? ' col-left' : ' col-right'}>
    <S.EventIcon className="event__icon" />
    <S.EventContent>
      <S.EventDate>{dates}</S.EventDate>
      <S.Title>{title}</S.Title>
      <S.EventLogo>
        <img src={logo} alt={title} />
        {subtitle && <S.SubTitle>{subtitle}</S.SubTitle>}
      </S.EventLogo>
      <div style={{ display: 'flex', flexDirection: 'column' }}>{children}</div>
    </S.EventContent>
  </S.EventItem>
);

export const Timeline = ({ children }) => (
  <S.TimelineContainer>
    <S.TimelineColumn>{children}</S.TimelineColumn>
  </S.TimelineContainer>
);
