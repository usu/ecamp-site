import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import SimplePage from "../components/SimplePage";

// eslint-disable-next-line
export const DefaultPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <SimplePage title={title}>
        <PageContent className="content" content={content} />
    </SimplePage>
  );
};

DefaultPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const DefaultPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <DefaultPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

DefaultPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default DefaultPage;

export const defaultPageQuery = graphql`
  query DefaultPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
