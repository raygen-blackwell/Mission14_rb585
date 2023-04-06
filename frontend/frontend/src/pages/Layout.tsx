import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../Nav';
// Layout.tsx contains the basic layout for the body and nav as well as the function that inculde the 'props' to change each tab title

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export function PageTitle(props: any) {
  useEffect(() => {
    document.title = props.title;
  }, [props.title]);

  return null;
}

export default Layout;
