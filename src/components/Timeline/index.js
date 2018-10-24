import React from 'react';
import './style.css';

export const Event = ({ title, subtitle, interval, children, position }) => (
  <li
    className={
      position === 'left'
        ? 'timeline__event col-left'
        : 'timeline__event col-right'
    }
  >
    <label className="event__icon" />
    <div className="event__content">
      <p className="event__date">{interval}</p>
      <h3 className="event__title">{title}</h3>
      {subtitle && <h4 className="event__subtitle">{subtitle}</h4>}
      <div className="event__description">{children}</div>
    </div>
  </li>
);

export const Timeline = ({ children }) => (
  <div className="timeline__container">
    <ul className="timeline__list">{children}</ul>
  </div>
);
