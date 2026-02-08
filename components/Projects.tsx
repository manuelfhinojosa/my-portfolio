"use client";

import { projects } from "@/lib/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-gray-50 text-black">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text black">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p) => (
            <div key={p.title} className="border p-6 rounded-xl">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="text-black mt-2">{p.description}</p>
              <button
                className="mt-4 bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => window.open(p.link, "_blank")}
              >
                View Project
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
