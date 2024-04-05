import React, { useContext } from 'react';
import { Admin_Menu } from './ItemsMenu';
import { AdminContext } from '../../Context/AdminContext'

import './css/AdminMenu.css';
import { Layout, Menu, Divider, Image } from 'antd';
const {Sider } = Layout;
const AdminMenu = () => {

    const value = useContext(AdminContext);

    // const renderSubMenu = (subMenu) => {
    //     const renderMenuItems = (items) => {
    //         return items.map((item) => {
    //             if (item.items) {
    //                 return (
    //                     <Menu.SubMenu key={item.key} title={item.label}>
    //                         {renderMenuItems(item.items)}
    //                     </Menu.SubMenu>
    //                 );
    //             } else {
    //                 return (
    //                     <Menu.Item key={item.key} icon={item.icon}>
    //                         <Link to={ item.link}>{item.label}</Link>
    //                     </Menu.Item>
    //                 );
    //             }
    //         });
    //     };

    //     return (
    //         <Menu.SubMenu key={subMenu.key} title={subMenu.label} icon={subMenu.icon}>
    //             {renderMenuItems(subMenu.items)}
    //         </Menu.SubMenu>
    //     );
    // };

    // const renderMenu = (menuData) => {
    //     return menuData.map((item) => {
    //       if (item.type === 'divider') {
    //         return <Menu.Divider key={item.key} />;
    //       } else if (item.children && item.type === 'group') {
    //         return (
    //           <Menu.ItemGroup key={item.key} title={value.collapsed ? <Divider style={{ marginTop: 10, marginBottom: 10 }} /> : <span style={{ color: '#3f6ad8', fontWeight: 'bold' }}>{item.label}</span>}>
    //             {item.children.map((child) => {
    //               if (child.children) {
    //                 return renderSubMenu(child);
    //               }
    //               return (
    //                 <Menu.Item key={child.key} icon={child.icon}>
    //                   <Link to={child.link}>{child.label}</Link>
    //                 </Menu.Item>
    //               );

    //             })}
    //           </Menu.ItemGroup>
    //         );
    //       } else {
        
    //         return null; 
    //       }
    //     });
    //   };

    const modifiedAdminMenu = Admin_Menu.map(item => {
      if (item.type === 'group') {
        return {
          ...item,
          label: value.collapsed ? <Divider style={{ marginTop: 10, marginBottom: 10 }} /> : item.label // Ẩn label nếu collapsed === true
        };
      }
      return item;
    });

    return (
            <Sider
                trigger={null}
                collapsible
                collapsed={value.collapsed}
                style={{ overflowY: 'auto', height: '100vh' }}
                width={200}
                theme={value.theme}
            >
                <div style={{ textAlign: 'center', padding: 10 }}>
                    {/* <Image
                        width={40} style={{ alignItems: 'center', borderRadius: 100 }}
                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    /> */}

                    <img style={{ alignItems: 'center', borderRadius: 100 , width:40}} src="https://res.cloudinary.com/dps8mwvsi/image/upload/v1711289542/logo_l8fxos.jpg" alt="" />
                </div>

                <div className="demo-logo-vertical" />
                <Menu
                  mode={value.mode}
                  theme={value.theme}
                  color='#3f6ad8'
                  items={value.collapsed ? modifiedAdminMenu : Admin_Menu} 
                  />

            </Sider>  

    );
};
export default AdminMenu;