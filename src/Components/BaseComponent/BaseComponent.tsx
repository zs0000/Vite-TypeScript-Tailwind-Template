import { useUserContext } from "../../Context/UserContext";
import { useThemeContext } from "../../Context/ThemeContext";
import s from "./BaseComponent.module.css"  

export default function BaseComponent() {
    const {username, setUsername} = useUserContext();
    const {themeColors} = useThemeContext();
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    }
  return (
    <div className={s.container + " " + themeColors.background}>
        <span className={themeColors.primaryText}>
            {username}
        </span>
        <input type="text" className={s.input} value={username} onChange={handleChange} />
    </div>
  )
}
