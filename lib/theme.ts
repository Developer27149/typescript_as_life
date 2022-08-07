import { TTheme } from "@/interfaces/theme";

/**
 * 设置全局的主题色
 * @param  {TTheme} themeMode
 */
export const setThemeVariables = (themeMode: TTheme) => {
  console.log("current theme mode is:", themeMode);

  // 文字颜色和背景色
  const primaryTextColor = `var(--primary-text-color-${themeMode})`;
  const primaryBgColor = `var(--primary-bg-color-${themeMode})`;

  const secondTextColor = `var(--second-text-color-${themeMode})`;
  const secondBgColor = `var(--second-bg-color-${themeMode})`;

  const themeColor = `var(--theme-${themeMode})`;

  // 使用时只需要直接用第一文本颜色、第二文本颜色、第一背景色、第二背景色即可
  document.body.style.setProperty("--primary-text-color", primaryTextColor);
  document.body.style.setProperty("--primary-bg-color", primaryBgColor);
  document.body.style.setProperty("--second-text-color", secondTextColor);
  document.body.style.setProperty("--second-bg-color", secondBgColor);
  document.body.style.setProperty("--theme-color", themeColor);
};
