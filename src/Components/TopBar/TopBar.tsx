import s from "./TopBar.module.css"
import { useThemeContext } from "../../Context/ThemeContext"
export default function TopBar() {
  const {toggleTheme, themeColors} = useThemeContext();
  return (
    <div className={s.container + " " + themeColors.background}>
        <span className={s.text + " " + themeColors.primaryText}>
            TheBarText
        </span>
        <div className={s.links}>
            <a className={s.link} href="#">Link1</a>
            <a className={s.link} href="#">Link2</a>
            <a className={s.link} href="#">Link3</a>
        </div>
        <div>
            <button className={s.button + " " + themeColors.primaryButton} onClick={toggleTheme}>
              Toggle Theme  
            </button>        
        </div>
    </div>
  )
}
