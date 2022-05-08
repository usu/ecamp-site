
import { useLocation } from "@reach/router"
import { getCurrentLangKey } from 'ptz-i18n';
import useSiteMetadata from "./SiteMetadata";

const usePageLanguage = () => {

  const { languages } = useSiteMetadata();

  // detect language for current page from URL
  const location = useLocation()
  const url = location.pathname
  const { langs, defaultLangKey } = languages;
  const lang = getCurrentLangKey(langs, defaultLangKey, url);

  return { lang, langs, defaultLangKey, url }
}

export default usePageLanguage;

