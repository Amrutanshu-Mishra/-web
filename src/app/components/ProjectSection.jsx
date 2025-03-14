"use client"
import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'
const projectsData = [
     {
          id: 1,
          title: "Talkify: A real time chat application",
          description: "This is a real time chat application",
          image: "/images/about.jpg",
          gitUrl: "https://github.com/Amrutanshu-Mishra/Mern-Chat-App-Master",
          previewUrl: "https://chat-app-prod-ddcq.onrender.com",
          tag: ["All", "Web"],

     },
     {
          id: 2,
          title: "Video Conferencing Application",
          description: "This is a real time chat application",
          image: "/images/about.jpg",
          gitUrl: "https://github.com/Amrutanshu-Mishra/video_conferencing",
          previewUrl: "https://video-conferencing-sage.vercel.app/",
          tag: ["All", "Web"]
     }
]

const ProjectSection = () => {
     const [tag, setTag] = useState("All");

     const handleTagChange = (newTag) => {
          setTag(newTag);
     };

     const filteredProjects=projectsData.filter((project)=>
          project.tag.includes(tag)
     );
     return (
          <>
               <h2 className='text-center text-4xl font-bold mt-4 pb-3 text-white'>My Projects</h2>
               <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
                    <ProjectTag onClick={handleTagChange} name="All" isSelected={tag==="All"}/>
                    <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag==="Web"}/>
               </div>
               <div className='grid md:grid-cols-3 gap-8 md:gap-12'>{
                    filteredProjects.map((project) => (
                         <ProjectCard
                              key={project.id}
                              title={project.title}
                              description={project.description}
                              imgUrl={project.image}
                              gitUrl={project.gitUrl}
                              previewUrl={project.previewUrl}
                         />
                    ))}
               </div>
          </>
     )
}

export default ProjectSection
