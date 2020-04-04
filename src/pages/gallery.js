import React from "react";
import PropTypes from "prop-types";
import {graphql} from "gatsby"; 

import Layout from "../components/layout";
import SEO from "../components/seo";
import Img from "gatsby-image";

const Gallery = () => (
    <Layout>
        <SEO title="Image gallery"/>
        <h1>Image Gallery</h1>
        <img src="https://drive.google.com/file/d/1z6n66g5AoiZiz4esKKEin7wrKfsK1HiD/view?usp=sharing" alt="" />
      
    </Layout>
    

);

Gallery.propTypes = {
    data: PropTypes.object.isRequired,
};

export const query = graphql`
  query {
    galleryPics: file(relativePath: { eq: "images/parispatrol.png" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`


export default Gallery;
