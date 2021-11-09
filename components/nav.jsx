import { useState, useEffect } from 'react';
import Head from 'next/head'
// import Image from 'next/image'
import styles from './nav.module.css'
// import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Image from 'next/image'

import Burger from '@animated-burgers/burger-squeeze' 
// don't forget the styles
import '@animated-burgers/burger-squeeze/dist/styles.css' 
import styled from "@emotion/styled";
import ThemeToggle from "../components/themeToggler";


var burgerOpen = false

function handleClick() {
    burgerOpen = !burgerOpen
}

export default function Nav({children}) {
    const [showMobileNav, setShowMobileNav] = useState(false);
    function toggle(){
	setShowMobileNav(!showMobileNav);
    }

    return (
	<>
	    <div className={styles.headerContainer}>
		<div className={styles.topHint}></div>
		<nav className={styles.navContainer}>
		    <ul className={styles.navItems}>
			<li><Link href="/">Home</Link></li>
			<li><Link href="blog">Blog</Link></li>
			<li><Link href="contact">Contact</Link></li>
			<li><Link href="donate">Donate</Link></li>
		    </ul>
		    <div className={styles.mobileNav}>
			<ThemeToggle />
			<Link href="/">
			    <Image
				src="/images/snappy-logo.png"
				className={styles.logo}
				width={44}
				height={44}
			    />
			</Link>
			<Burger onClick={toggle} isOpen={ showMobileNav } />
		    </div>
		</nav>
		<div className={!showMobileNav ? styles.mobileNavList : styles.mobileNavListActive}>
		    <li><Link href="/">Home</Link></li>
		    <li><Link href="blog">Blog</Link></li>
		    <li><Link href="contact">Contact</Link></li>
		    <li><Link href="donate">Donate</Link></li>
		</div>
	    </div>

	    <main>{children}</main>
	</>
    )
}
