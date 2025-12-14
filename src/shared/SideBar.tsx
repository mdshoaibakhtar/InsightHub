import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import KeyboardDoubleArrowLeftRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftRounded';
import KeyboardDoubleArrowRightRoundedIcon from '@mui/icons-material/KeyboardDoubleArrowRightRounded';
import { NavLink, useLocation } from 'react-router-dom';

const SIDEBAR_WIDTH = 250;
const SIDEBAR_COLLAPSED_WIDTH = 80;
const ITEM_HEIGHT = 50; // Adjust to match MenuItem height

export default function SideBarApp() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: 'dashboard', label: 'Dashboard', path: '/' },
    { name: 'tasks', label: 'Tasks', path: '/tasks' },
    { name: 'analytics', label: 'Analytics', path: '/analytics' },
  ];

  // Find active index based on current route
  const activeIndex = menuItems.findIndex((item) => item.path === location.pathname);

  return (
    <div style={{ display: 'flex', height: '100vh', position: 'relative' }}>
      {/* Sidebar */}
      <Sidebar
        collapsed={collapsed}
        style={{
          position: 'relative',
          width: collapsed ? SIDEBAR_COLLAPSED_WIDTH : SIDEBAR_WIDTH,
          paddingTop: 64,
        }}
      >
        {/* Floating highlight */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: ITEM_HEIGHT,
            backgroundColor: '#023972',
            // borderRadius: 6,
            transform: `translateY(${activeIndex * ITEM_HEIGHT}px)`,
            transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            zIndex: 0,
          }}
        />

        <Menu
          menuItemStyles={{
            button: {
              position: 'relative',
              zIndex: 1,
              color: '#000',
              transition: 'color 0.3s ease',

              // Hover effect for inactive items
              '&:hover': {
                color: '#b6c8d9', // text color changes on hover
                backgroundColor: '', // subtle light overlay
              },

              // Active + hover (do nothing, highlight handles this)
              '&.active:hover': {
                color: '#b6c8d9',
                backgroundColor: 'transparent',
              },
            },
          }}
        >
          {menuItems.map((item) => (
            <MenuItem
              key={item.name}
              component={
                <NavLink
                  to={item.path}
                  end={item.path === '/'} // exact match for home
                  style={{
                    color: location.pathname === item.path ? 'white' : '#000',
                  }}
                />
              }
            >
              {item.label}
            </MenuItem>
          ))}
        </Menu>
      </Sidebar>

      {/* Collapse Button */}
      <IconButton
        size="small"
        onClick={() => setCollapsed(!collapsed)}
        sx={{
          position: 'absolute',
          top: 16,
          left: collapsed ? SIDEBAR_COLLAPSED_WIDTH : SIDEBAR_WIDTH,
          transform: 'translateX(-50%)',
          backgroundColor: '#fff',
          border: '1px solid #e0e0e0',
          boxShadow: 1,
          transition:
            'left 0.3s ease, transform 0.3s ease, background-color 0.2s ease, color 0.2s ease', // <- smooth transition
          '&:hover': {
            color: '#023972',
            backgroundColor: 'white',
          },
        }}
      >
        {collapsed ? (
          <KeyboardDoubleArrowRightRoundedIcon />
        ) : (
          <KeyboardDoubleArrowLeftRoundedIcon />
        )}
      </IconButton>
    </div>
  );
}
