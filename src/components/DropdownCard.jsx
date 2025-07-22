import React from 'react';
import './DropdownCard.css';

function DropdownCard({ title, description, link }) {
  return (
    <a href={link} className="dropdown-card-link">
      <div className="dropdown-card">
        <h3 className="dropdown-card-title">{title}</h3>
        <p className="dropdown-card-description">{description}</p>
      </div>
    </a>
  );
}

export default DropdownCard;