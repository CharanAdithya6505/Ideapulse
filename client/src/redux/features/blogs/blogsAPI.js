import db from './db'

export const getBlogs = async (tags, search) => {
  let blogs = db.blogs;
  if (tags.length) {
    blogs = blogs.filter(blog => tags.every(tag => blog.tags.includes(tag)));
  }

  if (search !== "") {
    blogs = blogs.filter(blog =>
      blog.title.toLowerCase().includes(search.toLowerCase()) ||
      blog.content.toLowerCase().includes(search.toLowerCase())
    );
  }

  return blogs;
};