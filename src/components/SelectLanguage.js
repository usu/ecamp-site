import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { FormattedMessage } from 'react-intl';

import { useLocation } from "@reach/router"
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';

const SelectLanguage = (props) => {

  const location = useLocation()
  const url = location.pathname
  const homeLink = `/${props.lang}/`

  const langsMenu = getLangs(props.langs, props.lang, getUrlForLang(homeLink, url))

  console.log(langsMenu)

  const links = langsMenu.map(lang =>
    {
        if( lang.selected ){
            return <li selected>{lang.langKey}</li>
        } 

        return <li>
                    <Link to={lang.link} key={lang.langKey}>
                        {lang.langKey}
                    </Link>
                </li>
                
    }
  );

  return (
    <div class="has-text-centered">
      <ul class="language-selector">
        {links}
      </ul>
    </div>
  );
};

SelectLanguage.propTypes = {
  langs: PropTypes.array
};

export default SelectLanguage;