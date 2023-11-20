import React, {useEffect} from 'react'
import aitutor from '../assets/aitutor.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import { MdOutlineCancel } from 'react-icons/md';
import { useStateContext } from '../contexts/ContextProvider';

const SideNavigation = () => {

    const { activeMenu, setActiveMenu, screenSize, setScreenSize } = useStateContext();

    const handleCloseSidebar = () => {
        if (activeMenu && screenSize <= 900) {
            setActiveMenu(false)
        }
    }

    useEffect(() => {
        const handleResize = () => setScreenSize
        (window.innerWidth);
  
        window.addEventListener('resize', handleResize);
  
        handleResize();
  
        return () => window.removeEventListener('resize', handleResize)
    }, []);
  
      useEffect(() => {
        if(screenSize <= 900) {
          setActiveMenu(false)
        }
      }, [screenSize]);
  

    return (
        <>  {!activeMenu && (<>
            <div className='fixed left-3 top-5  green_gradient' >
                <buttton type="button"
                    className="text-xl p-3 hover:drop-shadow-xl bg-green hover:bg-lime text-white "
                    onClick={() => setActiveMenu(true)}
                    style={{ borderRadius: '20%' }} >
                    <GiHamburgerMenu />
                </buttton>
            </div>
        </>)}
            {activeMenu && (<>
                <Sidebar aria-label="Default sidebar example">
                    <div className='flex flex-row justify-between w-full'>
                        <div>
                            <Sidebar.Logo href="#" img={aitutor} className='h-16 w-16' imgAlt="Flowbite logo" onClick={handleCloseSidebar}>
                                AiTutor
                            </Sidebar.Logo>
                        </div>
                        <div className=''>
                            <button type='button' onClick={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
                                className='text-xl rounded-full p-2 hover:bg-light-gray mt-4 block' >
                                <MdOutlineCancel />
                            </button>
                        </div>
                    </div>
                    <Sidebar.Items>
                        <Sidebar.ItemGroup>
                            <Sidebar.Item href="#" icon={HiChartPie}>
                                Home
                            </Sidebar.Item>
                            <Sidebar.Item href="#" icon={HiViewBoards} label="Pro" labelColor="dark">
                                Topics
                            </Sidebar.Item>
                            <Sidebar.Item href="#" icon={HiInbox} label="3">
                                Feature 1
                            </Sidebar.Item>
                            <Sidebar.Item href="#" icon={HiUser}>
                                Profile
                            </Sidebar.Item>
            
                        </Sidebar.ItemGroup>
                    </Sidebar.Items>
                </Sidebar>
            </>)}
        </>
    )
}

export default SideNavigation
