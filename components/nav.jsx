import Head from 'next/head'
// import Image from 'next/image'
import styles from './nav.module.css'
// import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Image from 'next/image'

import { slide as Menu } from 'react-burger-menu'

var burgerStyles = {
    bmBurgerButton: {
	position: 'fixed',
	width: '1.5rem',
	height: '1rem',
	right: '1.5rem',
	top: '1.2em'
    },
    bmBurgerBars: {
	background: '#373a47'
    },
    bmBurgerBarsHover: {
	background: '#a90000'
    },
    bmCrossButton: {
	height: '3rem',
	width: '3rem'
    },
    bmCross: {
	background: '#bdc3c7'
    },
    bmMenuWrap: {
	top: '3.2em',
	position: 'fixed',
	height: '100%'
    },
    bmMenu: {
	background: '#ffffff',
	padding: '2.5em 1.5em 0',
	fontSize: '1.15em'
    },
    bmMorphShape: {
	fill: '#373a47'
    },
    bmItemList: {
	// color: '#b8b7ad',
	padding: '0.8em'
    },
    bmItem: {
	textAlign: 'center',
	margin: '0.8em'
    },
    bmOverlay: {
	background: 'rgba(0, 0, 0, 0)'
    }
}

export default function Nav({children}) {
    return (
	<>
	    <div className={styles.headerContainer}>
		<div className={styles.topHint}></div>
		<nav className={styles.navContainer}>
		    <ul className={styles.navItems}>
			<li><Link href="index">Home</Link></li>
			<li><Link href="blog">Blog</Link></li>
			<li><Link href="contact">Contact</Link></li>
			<li><Link href="donate">Donate</Link></li>
		    </ul>
		    <div className={styles.mobileNav}>
			<Link href="/">
			    <img
				src="/images/snappy-logo.png"
				className={styles.logo}
			    />
			</Link>
			<Menu right width={ '100%' } styles={ burgerStyles }>
			    <a href="/">Home</a>
			    <a href="/about">About</a>
			    <a href="/contact">Contact</a>
			    <a href="/blog">Blog</a>
			    <a href="/donate">Donate</a>
			</Menu>
		    </div>
		</nav>
	    </div>

	    <main>{children}</main>
	</>
    )
}
