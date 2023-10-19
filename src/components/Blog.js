import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Blog = () => {
  const [showMore, setShowMore] = useState([false, false, false, false, false, false]);
  const navigate = useNavigate();

  const toggleReadMore = (index) => {
    const newShowMore = [...showMore];
    newShowMore[index] = !newShowMore[index];
    setShowMore(newShowMore);
  };

  
  const blogPosts = [
    {
      title: 'Enter the Realm of Wonder: The Magic Unveiled',
      content: 'Have you ever felt the thrill of wonder that washes over you when you witness a magician perform an incredible feat? The feeling of awe, the suspension of disbelief, and the sheer magic of the moment—these are the elements that make magic an art form like no other.',
      image: '/BlogImg0.jpeg',
    },
    {
      title: 'The Artistry Behind Card Tricks',
      content: 'At the heart of every card trick lies a deep understanding of the mechanics of a deck of cards.',
      image: '/BlogImg1.jpeg',
    },
    {
      title: 'The History of Magic: From Ancient Wonders to Modern Illusions',
      content: ' Magic roots can be traced to the ancient civilizations of Egypt, Mesopotamia, and China. In these early societies, magicians and priests held great influence, using their knowledge of illusion and deception to awe and inspire the masses. They performed feats like turning water into wine, making objects levitate, and predicting the future.',
      image: '/BlogImg2.jpeg',
    },
    {
      title: 'Masters of Escape: The World of Houdini and Escape Artists',
      content: 'Content for Masters of Escape...',
      image: '/BlogImg3.jpeg',
    },
    {
      title: 'Mind Reading and Mentalism: Unlocking the Secrets of the Mind',
      content: 'Content for Mind Reading and Mentalism...',
      image: '/BlogImg4.jpeg',
    },
    {
      title: 'Magic in Pop Culture: How Magic Shaped Our Entertainment',
      content: 'Content for Magic in Pop Culture...',
      image: '/BlogImg5.jpeg',
    },
  ];

  
  const generateBlogPost = (index) => {
    const blogPost = blogPosts[index];
    return (
      <section className="flex blog-item-summary mx-auto py-1" key={index}>
        <div className="blog-item-text p-4">
          <div className="flex flex-col lg:flex-row ">
            <img
              src={blogPost.image}
              alt="BLOGIMAGE"
              className="w-70 pr-1 mb-3 d-none d-lg-block" 
            />
            <div className="w-59 pl-6">
              <div className="blog-content">
                <div className="blog-meta-section">
                  <span className="blog-meta-primary">
                    <span className="blog-author">
                      <strong style={{ fontFamily: 'Times New Roman', fontSize: '30px' }}>
                        {blogPost.title}
                      </strong>
                    </span>
                  </span>
                </div>
                <h1 className="blog-title">
                  <Link to={`/blogpage${index}`} data-no-animation>
                    {blogPost.title}
                  </Link>
                </h1>
                <div className="blog-excerpt">
                  <div className="blog-excerpt-wrapper">
                    <p className="">
                      {blogPost.content}
                      {showMore[index] && (
                        <>

                        </>
                      )}
                    </p>
                  </div>
                </div>

                <button onClick={() => navigate(`/blogpage${index}`)}>Read More</button> s
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  return (
    <div>
      <header
        className="text-center flex flex-col justify-center"
        style={{
          backgroundImage: 'url(./backgr.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '70vh',
        }}
      >
        <h1 className="mt-8 mb-2"></h1>
        <h2 style={{ fontFamily: 'Arial, sans-serif', color: 'white', fontSize: '28px' }}>
          Journey into the Art of Astonishment
        </h2>
        <h2 style={{ fontFamily: 'Times New Roman, serif', color: 'white', fontSize: '60px' }}>
          Mastering Magic
        </h2>
      </header>

   
      {blogPosts.map((post, index) => generateBlogPost(index))}
    </div>
  );
};

export default Blog;
