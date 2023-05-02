import { type NextPage } from "next";
import Head from "next/head";
import Link from 'next/link'

import { api } from "~/utils/api";

const Test: NextPage = () => {
  const name = api.article.createArticle.useQuery({name: "New Article" , price: 12302})
  return (
    <>
      <Head>
        <title>Tendencia | Test</title>
        <meta name="description" content="My learning page" />
      </Head>
      <main className="min-h-screen relative flex flex-col justify-center items-center">
        <h1>My learning page</h1>
        <Link href="/" className="border-b p-1 absolute top-4 left-4">Back to home</Link>

        <button onClick={()=>{
          
        }} className="p-2 bg-red-500 hover:bg-red-700 text-white font-semibold rounded">
          Create Article
        </button>
      </main>
    </>
  );
};

export default Test;
