import React from 'react'
import { Moon, Sun } from 'lucide-react';

import { useTheme } from '../../context/ThemeContext'

const FloatingButton = () => {
    const { theme, toggleTheme } = useTheme()
    return (
        <button onClick={toggleTheme} className='floating_btn'>
            {theme === "light" ? (
                <Sun size={20} />
            ) : (
                <Moon size={20} />
            )}
        </button>
    )
}

export default FloatingButton