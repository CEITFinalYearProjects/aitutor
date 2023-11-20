import React from 'react'
import { Sidebar, SideNavigation } from './components'
import { Home, Teaching } from './pages'
import './App.css'
import { FiSettings } from 'react-icons/fi';
import { useStateContext } from './contexts/ContextProvider';
import { MantineProvider, Text } from '@mantine/core';

const App = () => {

  const { activeMenu, themeSettings, setActiveMenu, setThemeSettings, currentColor, currentMode } = useStateContext();


  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
    <div>
      <div className='flex flex-row w-full'>
        <div>
          <SideNavigation />
        </div>
        <div className='flex justify-center items-center w-full '>
          <Teaching />
        </div>
      </div>
    </div>
    </MantineProvider>
  )
}

export default App