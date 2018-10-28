import React from 'react';
import './style.css';

export const Event = ({ title, subtitle, dates, children, position, logo }) => (
  <li
    className={
      position === 'left'
        ? 'timeline__event col-left'
        : 'timeline__event col-right'
    }
  >
    <label className="event__icon" />
    <div className="event__content">
      <p className="event__date">{dates}</p>
      <h3 className="event__title">{title}</h3>
      <div className="event__subtitle-container">
        <img src={logo} />
        {subtitle && <h4 className="event__subtitle">{subtitle}</h4>}
      </div>
      <div className="event__description">{children}</div>
    </div>
  </li>
);

export const Timeline = ({ children }) => (
  <div className="timeline__container">
    <ul className="timeline__list">{children}</ul>
  </div>
);
