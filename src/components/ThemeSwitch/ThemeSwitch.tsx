import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useWindowDimensions } from '../../utils/grabber';

export const ThemeSwitch = () => {
  const { toggleColorMode } = useColorMode();
  const { width } = useWindowDimensions();
  const themeBtnIcon = useColorModeValue(<MoonIcon />, <SunIcon />);
  const themeBtnColor = useColorModeValue('purple', 'yellow');

  return (
    <IconButton
      aria-label="Toggle theme"
      colorScheme={themeBtnColor}
      icon={themeBtnIcon}
      onClick={toggleColorMode}
      size={width && width < 768 ? 'md' : 'lg'}
    ></IconButton>
  );
};
