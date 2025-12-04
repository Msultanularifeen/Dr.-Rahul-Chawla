import React, { useState } from 'react';
import { Calendar, ArrowRight, X } from 'lucide-react';

interface Article {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  content: string;
}

const Blog = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const articles: Article[] = [
    {
      title: "The Future of Hybrid Healthcare Models",
      excerpt: "Why the integration of physical and digital care is the key to sustainable medical practice.",
      date: "Oct 12, 2023",
      category: "Innovation",
      image: "https://picsum.photos/400/250?random=20",
      content: "Hybrid healthcare is not just a trend; it's the necessary evolution of medical practice. By combining the trust and thoroughness of in-person visits with the convenience and speed of digital consultations, clinics can reduce overheads while improving patient satisfaction. This article explores the infrastructure needed to support this transition..."
    },
    {
      title: "Optimizing Clinic Workflows for Efficiency",
      excerpt: "Simple operational changes that can reduce patient wait times and prevent staff burnout.",
      date: "Sep 28, 2023",
      category: "Management",
      image: "https://picsum.photos/400/250?random=21",
      content: "Wait times are the number one complaint in outpatient settings. However, the bottleneck is often not the doctor, but the administrative workflow. We discuss three key strategies: automated check-ins, pre-consultation digital forms, and role-based task delegation that can save up to 15 minutes per patient journey..."
    },
    {
      title: "Patient Retention Strategies for 2024",
      excerpt: "Building trust and loyalty in a competitive private healthcare market.",
      date: "Sep 15, 2023",
      category: "Marketing",
      image: "https://picsum.photos/400/250?random=22",
      content: "In a saturated market, patient loyalty is gold. It's no longer enough to just treat the illness; you must treat the person. We look at how personalized follow-up automated messages, birthday health tips, and transparent pricing models are revolutionizing how patients perceive their providers..."
    }
  ];

  return (
    <section id="blog" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-teal-600 font-semibold tracking-wide uppercase text-sm mb-2">Insights</h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-navy-900">Latest Articles</h3>
          </div>
          <button onClick={() => alert("Archive page coming soon!")} className="hidden md:flex items-center text-teal-600 font-medium hover:text-teal-700">
            View all articles <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article 
              key={index} 
              className="group cursor-pointer"
              onClick={() => setSelectedArticle(article)}
            >
              <div className="relative overflow-hidden rounded-2xl mb-4">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-teal-700 uppercase tracking-wide shadow-sm">
                  {article.category}
                </div>
              </div>
              <div className="flex items-center text-slate-400 text-xs mb-3 space-x-2">
                <Calendar className="h-3 w-3" />
                <span>{article.date}</span>
              </div>
              <h4 className="text-xl font-bold text-navy-900 mb-2 group-hover:text-teal-600 transition-colors">
                {article.title}
              </h4>
              <p className="text-slate-600 text-sm line-clamp-2 mb-4">
                {article.excerpt}
              </p>
              <span className="text-teal-600 text-sm font-medium flex items-center group-hover:underline">
                Read More <ArrowRight className="ml-1 h-3 w-3" />
              </span>
            </article>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
            <button onClick={() => alert("Archive page coming soon!")} className="inline-flex items-center text-teal-600 font-medium hover:text-teal-700">
            View all articles <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Article Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-900/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl flex flex-col">
             <div className="relative h-64 sm:h-80 flex-shrink-0">
               <img src={selectedArticle.image} alt={selectedArticle.title} className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
               <button 
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/40 transition-colors text-white"
              >
                <X className="h-6 w-6" />
              </button>
               <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="inline-block px-3 py-1 bg-teal-600 rounded-full text-xs font-bold uppercase tracking-wide mb-2">{selectedArticle.category}</span>
                  <h3 className="text-2xl md:text-3xl font-display font-bold leading-tight">{selectedArticle.title}</h3>
                  <div className="flex items-center mt-2 text-slate-200 text-sm">
                    <Calendar className="h-4 w-4 mr-2" />
                    {selectedArticle.date}
                  </div>
               </div>
             </div>
             
             <div className="p-8">
               <p className="text-lg text-slate-700 leading-relaxed font-medium mb-6">
                 {selectedArticle.excerpt}
               </p>
               <div className="prose prose-lg prose-teal text-slate-600">
                 <p>{selectedArticle.content}</p>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                 <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
               </div>
               
               <hr className="my-8 border-slate-100" />
               
               <div className="flex justify-between items-center">
                 <p className="text-sm text-slate-400">Written by Dr. Rahul Chawla Team</p>
                 <button 
                   onClick={() => setSelectedArticle(null)}
                   className="px-6 py-2 border border-slate-200 text-slate-600 rounded-lg hover:bg-slate-50 transition-colors"
                 >
                   Close Article
                 </button>
               </div>
             </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Blog;