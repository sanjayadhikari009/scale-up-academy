import { useEffect, useState } from "react";
import "./Blog.css";
import { SiElastic } from "react-icons/si";
const Blog = ()=>{
    const image = "https://imgs.search.brave.com/_6izdbSVpHbwqbawMBquENAqLf6WtvwCZmTG8AhitpY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/ZnJvbnQuZnJlZXBp/ay5jb20vaG9tZS9h/bm9uLXJ2bXAvY3Jl/YXRpdmUtc3VpdGUv/cGhvdG9ncmFwaHkv/Y2hhbmdlLWxvY2F0/aW9uLndlYnA";
    const [blogs ,setBlogs] = useState([]);
    const [expand,setExpand] = useState(false);

    const Listblogs = [
  {
    title: "Blog 1",
    date: "1 day ago",
    headline: "Why Graphic Design is the New Language of Business",
    category: "Design",
    image: image
  },
  {
    title: "Blog 2",
    date: "2 days ago",
    headline: "The Power of Visual Identity in Branding",
    category: "Branding",
    image: image
  },
  {
    title: "Blog 3",
    date: "3 days ago",
    headline: "UI/UX Trends That Are Shaping 2025",
    category: "UI/UX",
    image: image
  },
  {
    title: "Blog 4",
    date: "4 days ago",
    headline: "How Typography Impacts User Experience",
    category: "Design",
    image: image
  },
  {
    title: "Blog 5",
    date: "5 days ago",
    headline: "Designing for Emotion: Color Psychology in Web",
    category: "Marketing",
    image: image
  },
  {
    title: "Blog 6",
    date: "6 days ago",
    headline: "Responsive Design for Nepali Audiences",
    category: "Web Development",
    image: image
  },
  {
    title: "Blog 7",
    date: "1 week ago",
    headline: "Crafting Festival Visuals That Resonate",
    category: "Culture",
    image: image
  },
  {
    title: "Blog 8",
    date: "8 days ago",
    headline: "From Prototypes to Impact: Design That Converts",
    category: "UI/UX",
    image: image
  },
  {
    title: "Blog 9",
    date: "9 days ago",
    headline: "Digital Storytelling for Local Brands",
    category: "Branding",
    image: image
  },
  {
    title: "Blog 10",
    date: "10 days ago",
    headline: "Why Minimalism Still Wins in Web Design",
    category: "Design",
    image: image
  }
];

useEffect(()=>{
    if(expand){
        setBlogs(Listblogs);
    }
    else{
        const fourBlogs = Listblogs.slice(0, 4);
        setBlogs(fourBlogs);
        
    }
},[expand]);

    return(
        <>
        <div className="blogPage">
            <div className="introText">
                <p>Stay Updated<br/> With Our Latest Blogs</p>
                <p>Learn, Create, Grow</p>
            </div>

            <div className="blogsList">
                {blogs.map((blg,index)=>
                    <div key={index} className="blog">
                    <section><p>{blg.title}</p></section>
                    <section>
                        <p>{blg.date} </p>
                        <p>{blg.headline} </p>
                    </section>
                    <section>
                        <p>Category</p>
                        <p>{blg.category} </p>
                    </section>
                    <section>
                        <img src={image} alt="logo"/>
                    </section>
                </div>
                )}
                
                <div className="closeBtn">
                    <button className="scrollBtn" onClick={()=>setExpand(!expand)}><span>{expand ?"Collaps All Blog" : "Explore all blog"}</span><span>{expand ?"Collaps all blog" : "Explore all blog"}</span> </button>
                </div>
            </div>
        </div>
        </>
    )
}
export default Blog;