import ReactMarkdown from 'react-markdown'
import Head from 'next/head'
import {URL} from "../../ultils/common";

export default function Name({article}) { 
    return (
        <div>
            <Head>
                <title>{article.title}</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>{article.title}</h1>
            <ReactMarkdown>{article.contentBody}</ReactMarkdown>
        </div>     
    )
}
export async function getStaticProps({params: {articleId}}) {
    const res = await fetch(`${URL}api/articles/${articleId}`);
    const data = await res.json();
    console.log(data);
    return {
        props: {
            article: data.data.attributes ? data.data.attributes : {}
        }
    };
}
export async function getStaticPaths() {
    const res = await fetch(`${URL}api/articles/`);
    const articles = await res.json();
    return {
        paths: articles.data.map(item=>({
            params: {
                articleId: String(item.id)
            }
        })),
        fallback: false
    };
}