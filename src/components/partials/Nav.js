import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { setLanguage } from "../../reducers/LocalizationReducer";
import { FormattedMessage } from "react-intl";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }

  /**
   * Handle menu open & close
   *
   * @param {*} event
   * @memberof App
   */
  handleClick = event => {
    event.preventDefault();
    this.setState(oldState => {
      return {
        menuOpen: !oldState.menuOpen
      };
    });
  };

  render() {
    const { lang } = this.props;
    const menu = [
      {
        name: <FormattedMessage id="nav.frontPage" defaultMessage="Etusivu" />,
        link: "/",
        disabled: false
      },
      {
        name: <FormattedMessage id="nav.schedule" defaultMessage="Aikataulu" />,
        link: "/schedule",
        disabled: false
      },
      {
        name: <FormattedMessage id="nav.subjects" defaultMessage="Aineiden esittely" />,
        link: "/subjects",
        disabled: false
      }
    ];

    return (
      <nav>
        <div className="container">
          <NavLink to="/" className="nav-logo">
            <img
              className=""
              src="/logos/potentiaali-black.png"
              alt="Kumpulan Potentiaali"
            />
          </NavLink>
          <a href="#menu" className="mobile-menu" onClick={this.handleClick}>
            <span
              className={
                !this.state.menuOpen
                  ? "fa fa-bars mobile-menu-icon"
                  : "fa fa-close mobile-menu-icon"
              }
            />
          </a>
          {this.state.menuOpen && (
            <div className="mobile-nav-links">
              {menu &&
                menu.map(
                  menuItem =>
                    !menuItem.disabled && (
                      <NavLink
                        exact
                        to={menuItem.link}
                        key={menuItem.name}
                        activeClassName="active-link"
                      >
                        {menuItem.name}
                      </NavLink>
                    )
                )}
              {lang === "en" ? (
                <button
                  className="changeLanguage"
                  onClick={() => this.props.setLanguage("fi")}
                >
                  Suomeksi
                </button>
              ) : (
                <button
                  className="changeLanguage"
                  onClick={() => this.props.setLanguage("en")}
                >
                  In English
                </button>
              )}
            </div>
          )}
          <div className="nav-links">
            {menu &&
              menu.map(
                menuItem =>
                  !menuItem.disabled && (
                    <NavLink
                      exact
                      to={menuItem.link}
                      key={menuItem.name}
                      activeClassName="active-link"
                    >
                      {menuItem.name}
                    </NavLink>
                  )
              )}
            {lang === "en" ? (
              <button
                className="changeLanguage"
                onClick={() => this.props.setLanguage("fi")}
              >
                Suomeksi
              </button>
            ) : (
              <button
                className="changeLanguage"
                onClick={() => this.props.setLanguage("en")}
              >
                In English
              </button>
            )}
          </div>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return {
    lang: state.localization.lang
  };
};

const mapDispatchToProps = {
  setLanguage
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
