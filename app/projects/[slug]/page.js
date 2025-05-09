import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { projectsData } from "@/utils/data/projects-data";

const getProjectBySlug = (slug) => {
  return projectsData.find((project) => project.slug === slug);
};

export default function ProjectDetails({ params }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0e17] text-white">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
          <p className="mb-6">
            The project you&apos;re looking for doesn&apos;t exist or has been
            removed.
          </p>
          <Link
            href="/projects"
            className="px-6 py-3 bg-[#8B5CF6] text-white rounded-md hover:bg-opacity-80 transition-all"
          >
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0e17] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <Link
          href="/projects"
          className="inline-flex items-center text-[#8B5CF6] hover:underline mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Projects
        </Link>

        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {project.title}
          </h1>
          <p className="text-xl text-gray-300 mb-8">{project.description}</p>

          <div className="flex flex-wrap gap-3 mb-8">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-[#1a1f2e] text-[#8B5CF6] rounded-md text-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-4 mb-12">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-[#1a1f2e] text-white rounded-md hover:bg-[#252b3b] transition-all"
            >
              <Github className="mr-2 h-5 w-5" />
              View Code
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-[#8B5CF6] text-white rounded-md hover:bg-opacity-80 transition-all"
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              Live Demo
            </a>
          </div>
        </div>

        <div className="mb-12 rounded-lg overflow-hidden border border-[#1a1f2e]">
          <Image
            src={project.imageUrl || "/placeholder.svg"}
            alt={project.title}
            width={800}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-6 text-[#8B5CF6]">
              Project Overview
            </h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              {project.longDescription}
            </p>

            <h2 className="text-2xl font-bold mb-6 text-[#8B5CF6]">Features</h2>
            <ul className="list-disc pl-6 mb-8 space-y-2 text-gray-300">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold mb-6 text-[#8B5CF6]">
              Challenges & Solutions
            </h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              {project.challenges}
            </p>

            <h2 className="text-2xl font-bold mb-6 text-[#8B5CF6]">Outcome</h2>
            <p className="text-gray-300 leading-relaxed">{project.outcome}</p>
          </div>

          <div>
            <div className="bg-[#1a1f2e] rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-[#8B5CF6]">
                Project Details
              </h3>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm text-gray-400">CLIENT</h4>
                  <p>Personal Project</p>
                </div>

                <div>
                  <h4 className="text-sm text-gray-400">DURATION</h4>
                  <p>3 Months</p>
                </div>

                <div>
                  <h4 className="text-sm text-gray-400">ROLE</h4>
                  <p>Full Stack Developer</p>
                </div>

                <div>
                  <h4 className="text-sm text-gray-400">TECHNOLOGIES</h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-[#0a0e17] rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">
            Interested in working together?
          </h2>
          <Link
            href="/#contact"
            className="inline-flex items-center px-8 py-4 bg-[#8B5CF6] text-white rounded-md hover:bg-opacity-80 transition-all text-lg"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}
