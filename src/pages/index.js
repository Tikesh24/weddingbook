import Head from 'next/head'

import Container from '../components/Container';
import Nav from '../components/Nav';
import Parallax from '../components/Parallax/Parallax';

import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Manish&amp;Garima</title>
        <link rel="icon" href="/favicon.ico" />
        <link
            rel="preload"
            href="/fonts/flor-font/Rochester-73E4.ttf"
            as="font"
            crossOrigin=""
          />
        <meta name="description" content="Wedding gram!!"
        ></meta>
      </Head>

      <div style={{position:'relative'}}>
        <Nav />
        <Parallax />
        
        <Container>
        </Container>
      </div>
      {/* <Main>
        <h1 className={styles.title}>
          <a href="https://nextjs.org">Next.js</a> Sass Starter
        </h1>

        <p className={styles.description}>
          Get started by editing <code>pages/index.js</code>
        </p>

        <Grid>
          <Card>
            <a href="https://nextjs.org/docs">
              <h2>Documentation &rarr;</h2>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>
          </Card>

          <Card>
            <a href="https://nextjs.org/learn">
              <h2>Learn &rarr;</h2>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>
          </Card>

          <Card>
            <a href="https://github.com/vercel/next.js/tree/master/examples">
              <h2>Examples &rarr;</h2>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>
          </Card>

          <Card>
            <a
              href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            >
              <h2>Deploy &rarr;</h2>
              <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
            </a>
          </Card>
        </Grid>
      </Main>

      <Footer /> */}
    </>
  )
}
