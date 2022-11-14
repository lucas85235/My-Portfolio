import Head from 'next/head';
import Header from '../components/Header';
import Body from '../components/Body';

function Page() {
    return (
        <div>
            <Head>
                <title>Lucas Portfolio</title>
                <meta name="description" content="My portfolio of games" />
                <link rel="icon" href="/Icons/control.webp" />
            </Head>

            <Header />
            <Body />
        </div>
    )
}

export default Page;
