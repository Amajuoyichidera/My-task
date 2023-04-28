import Head from "next/head";
import Axios  from "axios";

const postList = ({postData}) => {
  console.log(postData);
  return (
    <main>
    <Head>
        <title> My Task </title>
    </Head>

    <h1 className="text-3xl pb-10 pt-10 font-medium">My Posts</h1>

    {postData.map((post) => {
      return (
        <div className="myPost">
          <h3 className="text-xl pt-3 pb-3 font-medium"> {post.id} </h3>
          <h1 className="text-xl pt-4 pb-4 font-medium"> {post.title} </h1>
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