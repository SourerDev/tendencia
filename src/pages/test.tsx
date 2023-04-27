import { type NextPage } from "next";
import Head from "next/head";
import Link from 'next/link'

const Test: NextPage = () => {
  return (
    <>
      <Head>
        <title>Tendencia | Test</title>
        <meta name="description" content="My learning page" />
      </Head>
      <main className="min-h-screen relative flex justify-center items-center">
        <h1>My learning page</h1>
        <Link href="/" className="border-b p-1 absolute top-4 left-4">Back to home</Link>
      </main>
    </>
  );
};

export default Test;
