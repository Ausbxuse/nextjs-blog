import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import Date from '../components/date'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
	props: {
	    allPostsData
	}
    }
}

export default function Home({ allPostsData }) {
    return (
	<Layout home>
	    <Head>
		<title>{siteTitle}</title>
	    </Head>
	    <section className={utilStyles.headingMd}>
		<p>Hello, I'm Zhenyu. I'm a senior in high school and a Math/CS enthusiast. You can contact me via <Link href="/index">Matrix</Link></p>
	    </section>
	    <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
		<h2 className={utilStyles.headingLg}>Blog</h2>
		<ul className={utilStyles.list}>
		    {allPostsData.map(({ id, date, title }) => (
			<li className={utilStyles.listItem} key={id}>
			    <Link href={`/posts/${id}`}>
				<a>{title}</a>
			    </Link>
			    <br />
			    <small className={utilStyles.lightText}>
				<Date dateString={date} />
			    </small>
			</li>
		    ))}
		</ul>
	    </section>
	</Layout>
    )
}
