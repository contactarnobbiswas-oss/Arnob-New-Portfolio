import { useState } from "react";
import Section from "../components/section";

export default function ProjectsSection() {
    const [playingVideo, setPlayingVideo] = useState(null);

    const projects = [
        {
            title: "Talking Head Videos",
            description: "Long-form content",
            image: "/assets/project-1.png",
            videoId: "" // এখানে আপনার ভিডিওর ID টা দিবেন
        },
        {
            title: "Documentary",
            description: "Based on true events",
            image: "/assets/project-2.png",
            videoId: ""
        },
        {
            title: "Business Breakdown",
            description: "Coming Soon",
            image: "/assets/project-1.png",
            videoId: "" 
        },
        {
            title: "Productivity and Lifestyle",
            description: "Coming Soon",
            image: "/assets/project-2.png",
            videoId: ""
        },
    ];

    return (
        <Section title="My Work">
            <div className="flex flex-wrap justify-center items-center gap-6 mr-auto">
                {projects.map((project) => (
                    <div 
                        key={project.title} 
                        onClick={() => project.videoId && setPlayingVideo(project.videoId)}
                        className="cursor-pointer hover:-translate-y-1.5 transition duration-300 max-w-75 border border-gray-200 rounded-xl block overflow-hidden shadow-sm hover:shadow-md"
                    >
                        <div className="relative group">
                            <img
                                className="w-full h-42 object-cover"
                                src={project.image}
                                alt={project.title}
                            />
                            {/* প্লে বাটন আইকন (হোভার করলে আসবে) */}
                            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="text-white text-4xl">▶</span>
                            </div>
                        </div>
                        <div className="p-4 bg-white">
                            <h3 className="text-base font-semibold text-gray-800">{project.title}</h3>
                            <p className="text-gray-500 mt-1 text-sm">{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* ভিডিও পপআপ (Modal) */}
            {playingVideo && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
                    <button 
                        onClick={() => setPlayingVideo(null)}
                        className="absolute top-4 right-4 text-white text-3xl font-bold"
                    >
                        ✕
                    </button>
                    <div className="w-full max-w-4xl aspect-video">
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
