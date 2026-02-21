"use client";

import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export function Projects() {
  const projects = useQuery(api.projects.getAll);

  if (projects === undefined) {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="p-6 border border-neutral-800 animate-pulse"
            style={{ backgroundColor: '#222220' }}
          >
            <div className="h-4 bg-neutral-700 w-1/3 mb-4"></div>
            <div className="h-6 bg-neutral-700 w-2/3 mb-3"></div>
            <div className="h-20 bg-neutral-700 mb-4"></div>
            <div className="h-4 bg-neutral-700 w-1/2"></div>
          </div>
        ))}
      </div>
    );
  }

  if (projects.length === 0) {
    return (
      <p className="text-neutral-500 text-center font-light">No projects yet. Add some in the Convex dashboard!</p>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <div
          key={project._id}
          className="p-6 border border-neutral-800 hover:border-neutral-600 transition-colors group"
          style={{ backgroundColor: '#222220' }}
        >
          <div className="flex items-center gap-2 mb-4">
            <span
              className="px-3 py-1 text-xs tracking-widest uppercase"
              style={{ color: '#a3a380' }}
            >
              {project.date}
            </span>
            <span className="px-3 py-1 text-neutral-500 text-xs border border-neutral-700">
              {project.category}
            </span>
          </div>
          <h3 className="text-lg font-normal text-neutral-200 mb-3 group-hover:text-neutral-100 transition-colors">
            {project.title}
          </h3>
          <p className="text-neutral-500 text-sm mb-4 leading-relaxed font-light">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-neutral-400 text-xs border border-neutral-700 font-light"
              >
                {tag}
              </span>
            ))}
          </div>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-light hover:underline"
              style={{ color: '#a3a380' }}
            >
              View on GitHub →
            </a>
          )}
        </div>
      ))}
    </div>
  );
}
