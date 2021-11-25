import {createGlobalStyle} from "styled-components";
import {Route, Routes} from "react-router-dom";
import Messages from "components/Messages/Messages";
import styles from './App.module.css';
import Sidebar from "components/Sidebar/Sidebar";

const themeColors = [
    '#1d1d2a', // 0 main background
    '#181824', // 1 main border
    '#7d7b7f', // 2 text
    '#2f3142', // 3 sections background
    'orangered', // 4 contrast elements
    'whitesmoke', // 5 light elements
]

const ThemeVariables = createGlobalStyle`
  html {
    --color0: ${(props) => props.colors[0]};
    --color1: ${(props) => props.colors[1]};
    --color2: ${(props) => props.colors[2]};
    --color3: ${(props) => props.colors[3]};
    --color4: ${(props) => props.colors[4]};
    --color5: ${(props) => props.colors[5]};
  }
`

const App = () => {
    return <>
        <ThemeVariables colors={themeColors}/>
        <div className={styles.appContainer}>
            <div className={styles.sidebarContainer}>
                <Sidebar/>
            </div>
            <div className={styles.contentContainer}>
                <Routes>
                    <Route path='/message' element={<Messages/>}/>
                </Routes>
            </div>
        </div>
    </>
}

export default App;
