import { useState } from "react";
import Section from "../components/section";

export default function ProjectsSection() {
    // Video play korar state
    const [playingVideo, setPlayingVideo] = useState(null);

    // Apnar YouTube Video-r list (Sudhu ID boshaben)
    const projects = [
        {
            title: "Talking Head Videos",
            description: "Long-form content",
            videoId: "dQw4w9WgXcQ" // YouTube video-r shesher ID-tuku diben
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
            <div className="flex flex-wrap justify-center items-center gap-6 mr-auto">
                {projects.map((project) => (
                    <div 
                        key={project.title} 
                        onClick={() => setPlayingVideo(project.videoId)}
                        className="cursor-pointer hover:-translate-y-1.5 transition duration-300 max-w-75 border border-gray-200 rounded-xl block overflow-hidden shadow-sm hover:shadow-md bg-white"
                    >
                        <div className="relative group">
                            {/* YouTube theke automatic thumbnail niye ashbe */}
                            <img
                                className="w-full h-42 object-cover"
                                src={`https://img.youtube.com/vi/${project.videoId}/maxresdefault.jpg`}
                                alt={project.title}
                                onError={(e) => {
                                    // Jodi HD thumbnail na thake, tobe normal-ti dekhabe
                                    e.target.src = `https://img.youtube.com/vi/${project.videoId}/hqdefault.jpg`;
                                }}
                            />
                            {/* Play Icon (Hover korle ashbe) */}
                            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="bg-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center pl-1 shadow-lg">
                                    ▶
                                </div>
                            </div>
                        </div>
                        <div className="p-4">
                            <h3 className="text-base font-semibold text-gray-800">{project.title}</h3>
                            <p className="text-gray-500 mt-1 text-sm">{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Video Player Modal (Website thekei play hobe) */}
            {playingVideo && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 animate-in fade-in duration-300">
                    <button 
                        onClick={() => setPlayingVideo(null)}
                        className="absolute top-6 right-6 text-white text-4xl font-light hover:text-red-500 transition-colors"
                    >
                        ✕
                    </button>
                    <div className="w-full max-w-4xl aspect-video shadow-2xl">
                        <iframe
                            className="w-full h-full rounded-lg"
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
