import Head from "next/head";
import Link from "next/link";
import {URL} from "../../ultils/common";
import styles from "../../styles/Article.module.css";

export default function Articel({ data }) {
  return (
    <div>
      <Head>
        <title>All Article｜全ての記事</title>
        <meta name="description" content="Salesforce Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {data.map((item, index) => (
        <div className={styles.title_wrap} key={index}>
          <Link href={`/article/${item.id}`}>
            <a>
              <h1>{item.attributes.title}</h1>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}
export async function getStaticProps() {
  const res = await fetch(`${URL}api/articles`);
  const data = await res.json();
  return {
    props: {
      data: data.data}
  };
}
