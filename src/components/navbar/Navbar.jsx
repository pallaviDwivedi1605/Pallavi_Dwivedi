"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './navbar.module.css';
import Logo from 'public/logo/favicon-32x32.png';
import Image from 'next/image';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
  const [activeLink, setActiveLink] = useState(null);
  const [openMenu, setOpenMenu] = useState(false)

  const links = [
    {
      id: 1,
      title: 'Home',
      url: '/',
      section: 'homepage-section',
    },
    {
      id: 2,
      title: 'About',
      url: '/about',
      section: 'about-section',
    },
    {
      id: 3,
      title: 'Projects',
      url: '/projects',
      section: 'project-section',
    },
    {
      id: 4,
      title: 'Contact',
      url: '/contact',
      section: 'contact-section',
    },
  ];

  const handleMenuClick = (sectionId) => {
    setActiveLink(sectionId);
    // window.scrollTo({
    //   top: document.getElementById(sectionId).offsetTop,
    //   behavior: 'smooth',
    // });
  };

  const handleMenuBtnClick = () => {
   setOpenMenu(!openMenu);
  }

  const handleNavItemClick = () => {
    setOpenMenu(false);
  };

  return (
    <div className={styles.navbar}>
      <Image src={Logo} alt="PD logo" width={32} height={32} />
      <div className={styles.menu_btn} onClick={handleMenuBtnClick} > <MenuIcon /> </div>
      {openMenu && <div className={`${styles.small_menu} ${openMenu ? styles.small_menu_slide_in : ''}`}>
        {links.map((link) => (
          <Link
            className={`${styles.nav_item} ${
              activeLink === link.section ? styles.active : ''
            }`}
            key={link.id}
            href={link.url}
            onClick={() => {
              handleNavItemClick();
              handleMenuClick(link.section);
            }}
          >
            {link.title}
          </Link>
        ))}
        </div>}
      <div className={styles.nav_menu}>
        {links.map((link) => (
          <Link
            className={`${styles.nav_item} ${
              activeLink === link.section ? styles.active : ''
            }`}
            key={link.id}
            href={link.url}
            onClick={() => handleMenuClick(link.section)}
          >
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
