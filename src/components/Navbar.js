import React from "react";
import { Link } from "gatsby";
import github from "../img/github-icon.svg";
import logo from "../img/eCampLogo.svg";
import { FormattedMessage } from 'react-intl';
import SelectLanguage from './SelectLanguage';



const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

  toggleHamburger() {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      }
    );
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to={`/${this.props.lang}/`} className="navbar-item" title="Logo">
              <img src={logo} alt="eCamp" style={{ width: "40px" }} />
              eCamp
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              role="menuitem"
              tabIndex={0}
              onKeyPress={() => this.toggleHamburger()}
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to={`/${this.props.lang}/team`}>
                <FormattedMessage id="navigation.team" />
              </Link>
              <Link className="navbar-item" to={`/${this.props.lang}/blog`}>
                <FormattedMessage id="navigation.blog" />
              </Link>
              <Link className="navbar-item" to={`/${this.props.lang}/roadmap`}>
                <FormattedMessage id="navigation.roadmap" />
              </Link>
              <Link className="navbar-item" to={`/${this.props.lang}/contact`}>
                <FormattedMessage id="navigation.contact" />
              </Link>
              <Link className="navbar-item button has-background-primary-light my-2 mx-4" to="https://dev.ecamp3.ch">
                <FormattedMessage id="navigation.login" />
              </Link>
            </div>

            <div className="navbar-end has-text-centered">
              <div className="navbar-item">
                <SelectLanguage className="navbar-item" lang={this.props.lang} langs={this.props.langs} />
              </div>
              <a
                className="navbar-item"
                href="https://github.com/ecamp/ecamp3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={github} alt="Github" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
