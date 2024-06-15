import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Button, Tooltip, useColorMode } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

export const DarkModeButtons = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { t } = useTranslation();

  const colorModeButtonLabelMapping = {
    light: t("COLOR_MODE_BUTTON_DARK"),
    dark: t("COLOR_MODE_BUTTON_LIGHT"),
  };

  const colorModeButtonLabel = colorModeButtonLabelMapping[colorMode];

  const iconModeColor = {
    light: <MoonIcon />,
    dark: <SunIcon />,
  };

  const iconMode = iconModeColor[colorMode];

  return (
    <Tooltip label={colorModeButtonLabel} placement="bottom">
      <Button onClick={toggleColorMode}>{iconMode}</Button>
    </Tooltip>
  );
};
