import { FaComments, FaUserAlt } from "react-icons/fa";

const Blog = () => {

    const blogData = [
        {
            imgUrl: 'https://preview.colorlib.com/theme/timezone/assets/img/blog/single_blog_1.png.webp',
            title: 'Google inks pact for new 35-storey office',
            content: "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
            category: 'Travel, Lifestyle',
            comments: '03 Comments',
        },
        {
            imgUrl: 'https://preview.colorlib.com/theme/timezone/assets/img/blog/single_blog_4.png.webp',
            title: 'Another Blog Title',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            category: 'Travel, Lifestyle',
            comments: '03 Comments',
        },
        {
            imgUrl: 'https://preview.colorlib.com/theme/timezone/assets/img/blog/single_blog_2.png.webp',
            title: 'Yet Another Blog Title',
            content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            category: 'Travel, Lifestyle',
            comments: '03 Comments',
        },
        {
            imgUrl: 'https://preview.colorlib.com/theme/timezone/assets/img/blog/single_blog_3.png.webp',
            title: 'One More Blog Title',
            content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            category: 'Travel, Lifestyle',
            comments: '03 Comments',
        },
    ];


    return (

        <>
            <section>
                <div className="about-slider  d-flex align-items-center justify-content-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="hero-cap text-center">
                                    <h2 style={{ fontSize: "70px", fontWeight: "700", color: "#0b1c39" }}>Blog</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="blog-area py-100">
                    <div className="container">
                        <div className="row">
                            {blogData.map((blog, index) => (
                                <div className="col-12" key={index}>
                                    <div className="bolg-sidebar">
                                        <div className="blog-item">
                                            <div className="blog-item-img">
                                                <img src={blog.imgUrl} alt="alt" />
                                            </div>
                                            <div className="blog-details">
                                                <h2>{blog.title}</h2>
                                                <p>{blog.content}</p>
                                                <ul className="blog-info list-unstyled d-flex">
                                                    <li>
                                                        <a href="#" className="text-dark">
                                                            <FaUserAlt />
                                                            {blog.category}
                                                        </a>
                                                    </li>
                                                    <li className="in">
                                                        <a href="#" className="text-dark">
                                                            <FaComments />
                                                            {blog.comments}
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>

    )

}
export default Blog;