import { Button, useColorMode } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

export const DarkModeButtons = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { t } = useTranslation();
  return (
    <Button onClick={toggleColorMode}>
      {colorMode === "light"
        ? t("COLOR_MODE_BUTTON_DARK")
        : t("COLOR_MODE_BUTTON_LIGHT")}
    </Button>
  );
};
