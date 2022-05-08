import * as React from "react";
import { Helmet } from "react-helmet";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "./all.sass";
import useSiteMetadata from "./SiteMetadata";
import { withPrefix } from "gatsby";
import { IntlProvider } from 'react-intl';
import { useLocation } from "@reach/router"
import { getCurrentLangKey } from 'ptz-i18n';
import flatten from "flat";

import enMessages from '../data/messages/en';
import deMessages from '../data/messages/de';

const TemplateWrapper = ({ children, i18nMessages }) => {
  const { title, description, languages } = useSiteMetadata();

  // detect language for current page from URL
  const location = useLocation()
  const url = location.pathname
  const { langs, defaultLangKey } = languages;
  const langKey = getCurrentLangKey(langs, defaultLangKey, url);

  // load translation messages
  const messages = {
    en: flatten(enMessages),
    de: flatten(deMessages)
  }

  return (
    <IntlProvider
            locale={langKey}
            messages={messages[langKey]}
          >
      <div>
        <Helmet>
          <html lang={langKey} />
          <title>{title}</title>
          <meta name="description" content={description} />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href={`${withPrefix("/")}img/apple-touch-icon.png`}
          />
          <link
            rel="icon"
            type="image/png"
            href={`${withPrefix("/")}img/favicon-32x32.png`}
            sizes="32x32"
          />
          <link
            rel="icon"
            type="image/png"
            href={`${withPrefix("/")}img/favicon-16x16.png`}
            sizes="16x16"
          />

          <link
            rel="mask-icon"
            href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
            color="#ff4400"
          />
          <meta name="theme-color" content="#fff" />

          <meta property="og:type" content="business.business" />
          <meta property="og:title" content={title} />
          <meta property="og:url" content="/" />
          <meta
            property="og:image"
            content={`${withPrefix("/")}img/og-image.jpg`}
          />
        </Helmet>
        <Navbar lang={langKey} />
        <div>{children}</div>
        <Footer lang={langKey} />
      </div>
    </IntlProvider>
  );
};

export default TemplateWrapper;
