import db from './db'

export const getBlogs = async (tags, search) => {
  let blogs = db.blogs; // Access the blogs array directly from db.json

  // Filter by tags if tags are provided
  if (tags.length) {
    blogs = blogs.filter(blog => tags.every(tag => blog.tags.includes(tag)));
  }

  // Filter by search term if provided
  if (search !== "") {
    blogs = blogs.filter(blog =>
      blog.title.toLowerCase().includes(search.toLowerCase()) ||
      blog.content.toLowerCase().includes(search.toLowerCase())
    );
  }

  return blogs; // Return the filtered blogs
};