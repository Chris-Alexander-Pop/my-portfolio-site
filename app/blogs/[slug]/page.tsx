import React from "react";
import BlogPage from "@/pages/BlogPage";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chris Pop'
}

/**
 * Home component is the main component of the about page.
 * It renders the BlogPage component.
 *
 * @returns {JSX.Element} The Home component.
 */
function Home({ params }: { params: { slug: string } }) {
  // This function component returns the BlogPage component.
  // The BlogPage component is responsible for rendering the content of the blog posts page.
  // It contains the entire content of the blog posts page.
  // The BlogPage component is rendered when the user visits the blog posts page.
  
  return (
    // Render the BlogPage component.
    // The BlogPage component is responsible for rendering the entire content of the blog posts.
    <BlogPage slug={params.slug}/>
  );
};

export default Home;
