import React from "react";
import logotxt from "../../../assets/images/logos/logo-text.jpg";
import logotxt2x from "../../../assets/images/logos/logo-text-2x.jpg";
import logolighttxt from "../../../assets/images/logos/logo-light-text.jpg";
import logolighttxt2x from "../../../assets/images/logos/logo-light-text-2x.jpg";
import { useSelector } from "react-redux";
const LogoText = (props) => {
    const customizer = useSelector((state) => state.CustomizerReducer);
    return (
        <img
            alt='Logo'
            srcSet={
                customizer.activeTheme === "LIGHT_THEME"
                    ? `${logotxt} 1x, ${logotxt2x} 2x`
                    : `${logolighttxt} 1x, ${logolighttxt2x} 2x`
            }
            {...props}
        />
    );
};

export default LogoText;
