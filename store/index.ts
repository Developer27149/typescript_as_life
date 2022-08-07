import { TTheme } from "@/interfaces/theme";
import { atomWithStorage } from "jotai/utils";

export const darkThemeModeAtom = atomWithStorage("is_dark_theme", false);
