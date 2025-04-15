import TopBar from "../TopBar/TopBar"
import s from "./Layout.module.css"
import { useThemeContext } from "../../Context/ThemeContext";

export default function Layout({children}: {children: React.ReactNode}) {
  const {themeColors} = useThemeContext();
  return (
    <div className={s.container + " " + themeColors.background}>
        <div className={s.topBar}>
            <TopBar />
        </div>
        <div className={s.content}>
            {children}
        </div>
    </div>
  )
}
