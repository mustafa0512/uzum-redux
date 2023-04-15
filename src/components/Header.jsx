import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CloseIcon from '@mui/icons-material/Close';
import { CiLocationOn } from 'react-icons/ci'
import { BsMap } from 'react-icons/bs'
import { AiOutlineSearch, AiOutlineQuestionCircle } from 'react-icons/ai'
import { GoMail } from 'react-icons/go'
import { BsPhone } from 'react-icons/bs'

const Header = () => {

    const availableScreenWidth = window.screen.availWidth
    const drawerWidth = availableScreenWidth;

    const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
        ({ theme, open }) => ({
            flexGrow: 1,
            padding: theme.spacing(3),
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            marginLeft: `-${drawerWidth}px`,
            ...(open && {
                transition: theme.transitions.create('margin', {
                    easing: theme.transitions.easing.easeOut,
                    duration: theme.transitions.duration.enteringScreen,
                }),
                marginLeft: 0,
            }),
        }),
    );

    const AppBar = styled(MuiAppBar, {
        shouldForwardProp: (prop) => prop !== 'open',
    })(({ theme, open }) => ({
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: `${drawerWidth}px`,
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
        }),
    }));

    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    }));

    const theme = useTheme();
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <>
            <div className='md:hidden'>
                <Box sx={{ display: 'flex' }}>
                    <AppBar sx={{ background: 'white', boxShadow: 'none' }} position="fixed" open={open}>
                        <Toolbar>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={handleDrawerOpen}
                                edge="start"
                                sx={{ mr: 2, ...(open && { display: 'none' }) }}
                            >
                                <MenuIcon sx={{ color: '#000' }} />
                            </IconButton>
                            <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

                                <img src="/img/uzumLogo.svg" className='w-[130px] ml-[-10px]' alt="" />

                                <Box sx={{ display: 'flex', alignItems: 'center' }}>

                                    <img src="/img/profImg.svg" className='w-[16px]' alt="" />
                                    <img src="/img/likeImg.svg" className='w-[18px] xs:ml-[14] ss:ml-[16]  ml-[10px]' alt="" />
                                    <img src="/img/basketImg.svg" className='w-[16px] xs:ml-[16] ss:ml-[18]  ml-[12px]' alt="" />

                                </Box>
                            </Box>

                        </Toolbar>

                        <form className="w-[98%] m-auto flex bg-[#F1F1F2FF] items-center h-[30px]  rounded-[6px] px-3 ">

                            <AiOutlineSearch color='#757575' size={30} />
                            <input type="text" className="bg-transparent outline-none w-[500px] ml-[12px] h-[20px] text-[#757575] text-[12px]" placeholder="Искать товары и категории" />

                        </form>

                    </AppBar>
                    <Drawer
                        sx={{
                            width: drawerWidth,
                            flexShrink: 0,
                            '& .MuiDrawer-paper': {
                                width: drawerWidth,
                                boxSizing: 'border-box',
                            },
                        }}
                        variant="persistent"
                        anchor="left"
                        open={open}
                    >
                        <DrawerHeader sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

                            <IconButton onClick={handleDrawerClose}>
                                {theme.direction === 'ltr' ? <CloseIcon sx={{ color: '#000' }} /> : <ChevronRightIcon />}
                            </IconButton>

                            <p className='text-[#000] text-[12px] font-semibold'>Зарегистрироваться</p>

                        </DrawerHeader>

                        <div className='bg-[#F4F5F5FF] h-[6px] w-full'></div>
                        
                        <List>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <img src="/img/catalogImg.svg" alt="" />
                                    </ListItemIcon>
                                    <p className="text-[#3333CC] ml-[10px]">Каталог </p>
                                </ListItemButton>
                                <KeyboardArrowDownIcon sx={{ color: '#3333CC', marginRight: '10px' }} />
                            </ListItem>
                        </List>

                        <div className='bg-[#F4F5F5FF] h-[6px] w-full'></div>

                        <List>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <CiLocationOn size={20} color='#000' />
                                    </ListItemIcon>
                                    <p className='font-semibold text-[14px]'>Мои заказы</p>
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <img src="/img/likeImg.svg" className='w-[16px]' alt="" />
                                    </ListItemIcon>
                                    <p className='font-semibold text-[14px]'>Избранное</p>
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <img src="/img/basketImg.svg" className='w-[14px]' alt="" />
                                    </ListItemIcon>
                                    <p className='font-semibold text-[14px]'>Город:</p>
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <BsMap color='#000 ' />
                                    </ListItemIcon>
                                    <p className='font-semibold text-[14px]'>Пункт выдачи</p>
                                </ListItemButton>
                            </ListItem>
                        </List>

                        <Divider />

                        <List>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <AiOutlineQuestionCircle size={18} color='#000' />
                                    </ListItemIcon>
                                    <p className='font-semibold text-[14px]'>Часто задоваемые вопросы</p>
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <GoMail color='#000 ' />
                                    </ListItemIcon>
                                    <p className='font-semibold text-[14px]'>Связаться с нами</p>
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <BsPhone color='#000 ' />
                                    </ListItemIcon>
                                    <p className='font-semibold text-[14px]'>Приложение Uzum</p>
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Drawer>
                </Box>

            </div>

            <div className="hidden md:flex w-full  items-center justify-between py-2 px-2 max-w-[1440px] m-auto">

                <img src="/img/uzumLogo.svg" alt="" />

                <div className="bg-[#EBEBFAFF] h-[45px] ml-[30px]  rounded-[4px] flex items-center justify-center">
                    <img className='w-[30px] ml-[20px]' src="/img/catalogImg.svg" alt="" />
                    <p className="text-[#3333CC] ml-[10px] mr-[25px] text-[14px]">Каталог</p>
                </div>

                <form className="flex items-center h-[45px] ml-[20px] border-[1px] border-[rgba(118, 121, 127, 0.3)] rounded-[4px] px-2">

                    <input type="text" className="w-[450px] h-[30px] text-[#757575]" placeholder="Искать товары и категории" />
                    <img className="w-[20px]" src="/img/searchImg.svg" alt="" />

                </form>

                <div className=" h-[45px] w-[120px] ml-[30px] rounded-[4px] flex items-center justify-center">
                    <img src="/img/profImg.svg" className="w-[20px] h-[20px]" alt="" />
                    <p className="text-[#000] ml-[10px] hidden lg:block">Войти</p>
                </div>

                <div className=" h-[45px] w-[120px] lg:ml-[30px] rounded-[4px] flex items-center justify-center">
                    <img src="/img/likeImg.svg" className="w-[20px] h-[20px]" alt="" />
                    <p className="text-[#000] ml-[10px] hidden lg:block">Избранное</p>
                </div>

                <div className=" h-[45px] w-[120px] lg:ml-[30px] rounded-[4px] flex items-center justify-center">
                    <img src="/img/basketImg.svg" className="w-[20px] h-[20px]" alt="" />
                    <p className="text-[#000] ml-[10px] hidden lg:block">Корзина</p>
                </div>

            </div>
        </>
    );

}

export default Header;