import { useEffect } from 'react';
import { useLocalStorage } from '../../hook/useLocalStorage';
import styles from './switchThemeButton.module.css';
import sun from '../../accets/icons/sun.svg';
import moon from '../../accets/icons/moon.svg';
import clsx from 'clsx';

export function SwitchThemeButton() {
  const [isDarkTheme, setIsDarkTheme] = useLocalStorage('theme', false);

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-theme',
      isDarkTheme ? 'dark' : 'light'
    );
  }, [isDarkTheme]);

  const switchMode = () => {
    setIsDarkTheme((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      <img
        src={sun}
        alt="Light mode"
        className={clsx(
          styles.switchThemeIcon,
          !isDarkTheme && styles.activeIcon
        )}
      />
      <img
        src={moon}
        alt="Dark mode"
        className={clsx(
          styles.switchThemeIcon,
          isDarkTheme && styles.activeIcon
        )}
      />
      <button
        className={clsx(styles.switchThemeButton, {
          [styles.switchThemeButtonActive]: isDarkTheme
        })}
        onClick={switchMode}
      />
    </div>
  );
}
