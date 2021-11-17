import Head from 'next/head'
import Link from 'next/link'
import { useState, useRef } from 'react'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Donate({}) {

    const [key, setKey] = useState("")

    function keyDownHandler(event) {
	setKey(event.code);
    }

    return (
	<div autoFocus tabIndex={0} onKeyDown={(e) => keyDownHandler(e)} className={utilStyles.input}> 

		<div> {key} </div>

		<p>If you like my work, feel free to send some love :P</p>
	</div>
    )
}
