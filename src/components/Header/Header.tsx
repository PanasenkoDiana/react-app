import React from "react";
import "./Header.css";

export function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <div className="header-home">
            <i className="home-icon"></i>
            <span>Home</span>
          </div>
          <div className="header-search">
            <i className="search-icon"></i>
            <input
              type="text"
              placeholder="search"
              className="search-input"
            />
          </div>
        </div>

        <div className="header-profile">
          <i className="profile-icon"></i>
        </div>
      </div>
    </header>
  );
}
