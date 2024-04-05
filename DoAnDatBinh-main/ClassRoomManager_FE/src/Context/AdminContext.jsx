import  { createContext , useState} from 'react';

const AdminContext = createContext();

function AdminProvider({children}) {
    const [collapsed, setCollapsed] = useState(false);

    const [mode, setMode] = useState('inline');

    const changeMode = (value) => {
        setMode(value ? 'vertical' : 'inline');
    };

    const [theme, setTheme] = useState('light');
    const changeTheme = (value) => {
        setTheme(value ? 'dark' : 'light');
    };

    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    return(
        <AdminContext.Provider value={{collapsed, setCollapsed, mode, changeMode, theme, changeTheme, open, showDrawer, onClose}}>
            {children}
        </AdminContext.Provider>
    )
}

export  {AdminContext, AdminProvider}


