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
              <img src={logo} alt="eCamp" style={{ width: "88px" }} />
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
              <Link className="navbar-item" to={`/${this.props.lang}/about`}>
                <FormattedMessage id="navigation.about" />
              </Link>
              <Link className="navbar-item" to={`/${this.props.lang}/blog`}>
                Blog
              </Link>
              <Link className="navbar-item" to={`/${this.props.lang}/contact`}>
                Contact
              </Link>
              <Link className="navbar-item" to={`/${this.props.lang}/contact/examples`}>
                Form Examples
              </Link>
            </div>

            <SelectLanguage lang={this.props.lang} langs={this.props.langs} />

            <div className="navbar-end has-text-centered">
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
