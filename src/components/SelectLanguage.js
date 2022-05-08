import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import { useLocation } from "@reach/router"
import { getLangs, getUrlForLang } from 'ptz-i18n';

const SelectLanguage = (props) => {
  
  const location = useLocation()
  const url = location.pathname
  const homeLink = `/${props.lang}/`

  const langsMenu = getLangs(props.langs, props.lang, getUrlForLang(homeLink, url))

  const links = langsMenu.map(lang =>
    {
        if( lang.selected ){
            return <li key={lang.langKey} selected>{lang.langKey}</li>
        } 

        return <li key={lang.langKey}>
                    <Link to={lang.link}>
                        {lang.langKey}
                    </Link>
                </li>
                
    }
  );

  return (
    <div className="has-text-centered">
      <ul className="language-selector">
        {links}
      </ul>
    </div>
  );
};

SelectLanguage.propTypes = {
  langs: PropTypes.array
};

export default SelectLanguage;