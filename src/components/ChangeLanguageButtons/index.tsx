import { Button } from "@chakra-ui/react";
import { useLanguage } from "../../context/I18nProvider";

export const ChangeLanguageButtons = () => {
  const { changeLanguage, language } = useLanguage();
  const newLanguage = language === "es" ? "en" : "es";

  const languageFormat = newLanguage === "es" ? "EN" : "ES";
  return (
    <Button onClick={() => changeLanguage(newLanguage)}>
      {languageFormat}
    </Button>
  );
};
