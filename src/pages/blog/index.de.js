import * as React from "react";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";
import SimplePage from "../../components/SimplePage";

const BlogIndexPage = () => {
  return (
    <Layout>
      <SimplePage title="Blog" subtitle="Short intro on purpose of this page">
        <BlogRoll lang="de" />    
      </SimplePage>
    </Layout>
  );
  
}

export default BlogIndexPage;
