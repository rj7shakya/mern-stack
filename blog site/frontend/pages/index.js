import Link from "next/link";
import Layout from "../components/Layout";

const index = () => {
  return (
    <Layout>
      <h2>Index page </h2>
      <Link href="/signup">
        <a>Signup</a>
      </Link>
    </Layout>
  );
};

export default index;
