import { func, string } from 'prop-types';
import styled from "styled-components";

import { ReactComponent as Moon } from "../icons/moon-svgrepo-com.svg"
import { ReactComponent as Sun } from "../icons/sun-svgrepo-com.svg"

const ToggleButton = styled.button`
    cursor: pointer;
    height: 25px;
    width: 25px;
    border-radius: 50%;
    border: none;
    background-color: ${({ theme }) => theme.gradient};
    color: ${({ theme }) => theme.toggleBorder};
`;

const DarkToggle = ({ theme, toggleTheme }) => {
   

    const icon = theme === "light" ? <Sun /> : <Moon/>;

    return (
        <div>
            <ToggleButton onClick={toggleTheme}>
                {icon}
            </ToggleButton>
        </div>
    );
};

DarkToggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
  }

export default DarkToggle;