import Head from "next/head";
import Axios  from "axios";

const postList = ({postData}) => {
  console.log(postData);
  return (
    <main>
    <Head>
        <title> My Task </title>
    </Head>

    <h1 className="text-5xl pb-10 pt-10">My Posts</h1>

    {postData.map((post) => {
      return (
        <div className="myPost">
          <h3 className="text-2xl pt-3 pb-3"> {post.id} </h3>
          <h1 className="text-3xl pt-4 pb-4"> {post.title} </h1>
          <p className="pt-3 pb-3"> {post.body} </p>
        </div>
      )
    })}

  </main>
  );
}

export const getStaticProps = async () => {
  const data = await Axios.get
  ('https://jsonplaceholder.typicode.com/posts')

  return {
    props: {
      postData: data.data,
    } 
  }
};

export default postList