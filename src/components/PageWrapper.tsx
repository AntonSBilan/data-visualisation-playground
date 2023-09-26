import React from 'react';
import {
  AppBar as MuiAppBar,
  Divider,
  Drawer as MuiDrawer,
  IconButton,
  List,
  ListItem, ListItemButton, ListItemText, ListItemIcon,
  styled,
  Toolbar,
  Typography, Theme, CSSObject, AppBarProps, Container as MuiContainer, ContainerProps
} from '@mui/material';
import {
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
} from '@mui/icons-material';
import {useState} from 'react';
import styles from '@/styles/main.module.css';
import {CustomTheme} from '@/components/Theme';
import Head from 'next/head';
import {mainMenu} from '@/utils/menu';
import Link from 'next/link';
import {usePathname} from 'next/navigation';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  zIndex: theme.zIndex.appBar - 1,
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
  [theme.breakpoints.down('sm')]: {
    width: 0,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const Container = styled(MuiContainer, {
  shouldForwardProp: (prop) => prop !== 'open',
})<ContainerProps & {open: boolean}>(({ theme, open }) => ({
  ...theme.mixins.toolbar,
  paddingTop: '70px',
  display: 'flex',
  flexDirection: 'column',
  flex: '1 1 auto',
  marginLeft: `calc(${theme.spacing(7)} + 1px)`,
  width: `calc(100% - ${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    marginLeft: `calc(${theme.spacing(8)} + 1px)`,
    width: `calc(100% - ${theme.spacing(8)} + 1px)`,
  },
  [theme.breakpoints.down('sm')]: {
    marginLeft: 0,
    width: 'calc(100% - 1px)',
  },
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
    [theme.breakpoints.down('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps & {open: boolean}>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));


export default function PageWrapper(props: React.PropsWithChildren) {
  const children = props.children;
  const pathname = usePathname();
  const [isMenuOpened, setMenuOpened] = useState(true);

  return <>
    <Head>
      <title>Data Visualisation Playground</title>
      <meta name="description" content="Project for CETM06 module" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <CustomTheme>
      <div className={styles.wrapper}>
        <AppBar elevation={1} position="fixed" open={isMenuOpened}>
          <Toolbar>
            {!isMenuOpened && <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => setMenuOpened(!isMenuOpened)}
            >
              <MenuIcon />
            </IconButton>}
            <Typography variant="h6" align="center" component="div" sx={{ flexGrow: 1 }}>
              Data Visualisation Playground
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={isMenuOpened}>
          <DrawerHeader>
            <IconButton onClick={() => setMenuOpened(false)}>
              <ChevronLeftIcon />
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {mainMenu.map(({href, name, icon}) => (
              <ListItem
                key={href}
                disablePadding
                sx={{ display: 'block' }}
              >
                <Link href={href}>
                  <ListItemButton
                    selected={pathname === href}
                    sx={{
                      minHeight: 48,
                      justifyContent: isMenuOpened ? 'initial' : 'center',
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: isMenuOpened ? 3 : 'auto',
                        justifyContent: 'center',
                      }}
                    >
                      {icon}
                    </ListItemIcon>
                    <ListItemText primary={name} sx={{ opacity: isMenuOpened ? 1 : 0 }} />
                  </ListItemButton>
                </Link>
              </ListItem>
            ))}
          </List>
        </Drawer>
        <Container open={isMenuOpened}>
          {children}
        </Container>
      </div>
    </CustomTheme>
  </>;
}
