import styles from "./Sidebar.module.css";
import SideLink from "./SideLink";
import SmartSVG from "../common/SmartSVG/SmartSVG";
import {ReactComponent as LogoSvg} from "assets/images/logo.svg";

const Sidebar = (props) => {
    let iconColor = 'var(--color2)';
    let icons = {
        'Home': LogoSvg,
        'Message': LogoSvg,
        'Settings': LogoSvg,
    }
    
    return <div className={styles.container}>
        <div className={styles.logoContainer}>
            <SmartSVG color={'var(--color4)'} SvgComponent={LogoSvg}/>
        </div>
        <div className={styles.navigation}>
            {Object.keys(icons).map(el => {
                let iconComponent = <SmartSVG color={iconColor} SvgComponent={icons[el]}/>;
                return <SideLink key={el}
                                 text={el}
                                 href={el.toLowerCase()}
                                 IconComponent={iconComponent}/>
            })}
        </div>
    </div>
}

export default Sidebar;