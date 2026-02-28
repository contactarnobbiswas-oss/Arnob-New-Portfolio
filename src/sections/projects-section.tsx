import { useState } from "react";
import Section from "../components/section";

export default function ProjectsSection() {
    // Video play korar state
    const [playingVideo, setPlayingVideo] = useState(null);

    // Apnar YouTube Video-r list
    const projects = [
        {
            title: "Talking Head Videos",
            description: "Long-form content",
            videoId: "dQw4w9WgXcQ" 
        },
        {
            title: "Documentary",
            description: "Based on true events",
            videoId: "dQw4w9WgXcQ"
        },
        {
            title: "Business Breakdown",
            description: "Coming Soon",
            videoId: "dQw4w9WgXcQ" 
        },
        {
            title: "Productivity and Lifestyle",
            description: "Coming Soon",
            videoId: "dQw4w9WgXcQ"
        },
    ];

    return (
        <Section title="My Work">
            {/* gap-10 ব্যবহার করে ভিডিওগুলোর মাঝে জায়গা বাড়ানো হয়েছে */}
            <div className="flex flex-wrap justify-center items-center gap-10">
                {projects.map((project) => (
                    <div 
                        key={project.title} 
                        onClick={() => setPlayingVideo(project.videoId)}
                        className="cursor-pointer hover:-translate-y-2 transition duration-300 max-w-80 border border-gray-100 rounded-2xl block overflow-hidden shadow-sm hover:shadow-xl bg-white"
                    >
                        <div className="relative group">
                            <img
                                className="w-full h-48 object-cover"
                                src={`https://img.youtube.com/vi/${project.videoId}/maxresdefault.jpg`}
                                alt={project.title}
                                onError={(e) => {
                                    e.target.src = `https://img.youtube.com/vi/${project.videoId}/hqdefault.jpg`;
                                }}
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="bg-red-600 text-white w-14 h-14 rounded-full flex items-center justify-center pl-1 shadow-2xl">
                                    ▶
                                </div>
                            </div>
                        </div>
                        <div className="p-5">
                            <h3 className="text-lg font-bold text-gray-800">{project.title}</h3>
                            <p className="text-gray-500 mt-1.5 text-sm leading-relaxed">{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Video Player Modal */}
            {playingVideo && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 animate-in fade-in duration-300">
                    <button 
                        onClick={() => setPlayingVideo(null)}
                        className="absolute top-6 right-6 text-white text-4xl font-light hover:text-red-500 transition-colors"
                    >
                        ✕
                    </button>
                    <div className="w-full max-w-5xl aspect-video shadow-2xl border-4 border-white/10 rounded-lg overflow-hidden">
                        <iframe
                            className="w-full h-full"
                            src={`https://www.youtube.com/embed/${playingVideo}?autoplay=1`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}
        </Section>
    );
}
