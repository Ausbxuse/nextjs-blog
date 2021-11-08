import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Donate({}) {
    return (
	<Layout home>
	    <Head>
		<title>{siteTitle}</title>
	    </Head>
	    <section className={utilStyles.headingMd}>
		<p>If you like my work, feel free to send some love :P</p>
	    </section>
	</Layout>
    )
}
