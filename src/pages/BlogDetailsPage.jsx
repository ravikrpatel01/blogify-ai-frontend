import { useParams, Link } from "react-router-dom";

const blogs = [
  {
    id: 1,
    title: "The Future of AI in Content Creation",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
    content:
      "AI is transforming the way we create content. From automated writing assistants to advanced image generation, the possibilities are endless. In the coming years, AI will become an essential tool for bloggers and creators, helping them improve efficiency, creativity, and personalization.",
  },
  {
    id: 2,
    title: "Getting Started with React and Spring Boot",
    image: "https://source.unsplash.com/800x400/?react,code",
    content:
      "React and Spring Boot is one of the most popular stacks for modern web development. React provides an intuitive way to build UI, while Spring Boot makes backend development easy and scalable. Together, they form a powerful full-stack development ecosystem.",
  },
  {
    id: 3,
    title: "Top 5 PostgreSQL Tips for Developers",
    image: "https://source.unsplash.com/800x400/?database,technology",
    content:
      "PostgreSQL is one of the most reliable databases for modern applications. Here are five tips: 1) Use Indexing wisely, 2) Optimize queries, 3) Monitor slow queries, 4) Leverage JSON support, 5) Use connection pooling for performance.",
  },
  {
    id: 4,
    title: "Why Tailwind CSS is a Game Changer",
    image: "https://source.unsplash.com/800x400/?tailwind,design",
    content:
      "Tailwind CSS allows developers to create modern and responsive designs with ease. Its utility-first approach eliminates the need for writing custom CSS repeatedly, making UI development faster and more maintainable.",
  },
  {
    id: 5,
    title: "Understanding Redux Toolkit",
    image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg",
    content:
      "Redux Toolkit simplifies state management in React apps by reducing boilerplate code. It provides APIs like createSlice, createAsyncThunk, and configureStore, making Redux much more developer-friendly and scalable.",
  },
  {
    id: 6,
    title: "How to Write SEO-Friendly Blogs",
    image: "https://source.unsplash.com/800x400/?seo,writing",
    content:
      "Writing SEO-friendly blogs involves optimizing content for both search engines and readers. Focus on keyword research, meta descriptions, readability, backlinks, and consistent posting to improve rankings.",
  },
  {
    id: 7,
    title: "Microservices with Spring Boot",
    image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg",
    content:
      "Microservices architecture breaks down applications into smaller, independently deployable services. With Spring Boot, you can build microservices that are scalable, maintainable, and easy to integrate with cloud-native solutions.",
  },
  {
    id: 8,
    title: "Top VS Code Extensions for Developers",
    image: "https://source.unsplash.com/800x400/?vscode,editor",
    content:
      "VS Code extensions improve productivity significantly. Popular ones include Prettier, ESLint, GitLens, Live Server, and Tailwind CSS IntelliSense. Choosing the right extensions can drastically improve your coding workflow.",
  },
  {
    id: 9,
    title: "Building REST APIs with Spring Boot",
    image: "https://source.unsplash.com/800x400/?api,backend",
    content:
      "Spring Boot provides a simple and powerful way to build REST APIs. With annotations like @RestController, @RequestMapping, and @GetMapping, you can quickly create endpoints. Combine with JPA for database interaction and you have a complete backend.",
  },
  {
    id: 10,
    title: "Why Blogging Still Matters in 2025",
    image: "https://source.unsplash.com/800x400/?blogging,writing",
    content:
      "Even with the rise of social media and AI-generated content, blogging remains a powerful medium. It allows for deep storytelling, brand building, and long-form content that provides real value to readers.",
  },
];

export default function BlogDetailsPage() {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h2 className="text-2xl font-bold text-red-600">Blog Not Found</h2>
        <Link to="/blogs" className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg">
          Go Back
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-64 object-cover rounded-lg"
        />
        <h1 className="text-3xl font-bold mt-6 mb-4">{blog.title}</h1>
        <p className="text-gray-700 leading-relaxed">{blog.content}</p>
        <Link
          to="/blogs"
          className="mt-6 inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Back to Blogs
        </Link>
      </div>
    </div>
  );
}
