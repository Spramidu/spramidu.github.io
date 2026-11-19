
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  projectFilters,
  projects,
  type ProjectFilter,
} from '@/data/content'
import { assetUrl } from '@/lib/assetUrl'
import { Reveal } from './Reveal'

export function Projects() {
  const [filter, setFilter] = useState<ProjectFilter>('All')
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const visible =
    filter === 'All'
      ? projects
      : projects.filter((project) =>
          project.categories.includes(filter)
        )

  return (
    <section id="projects" className="section projects">
      <div className="container">

        {/* SECTION INTRODUCTION */}

        <Reveal>
          <p className="eyebrow">Selected work</p>
          <h2>Projects</h2>
          <p className="section__lead">
            Engineering projects spanning RF electronics, PCB design,
            embedded systems, IoT monitoring, and robotics.
          </p>
        </Reveal>

        {/* PROJECT FILTERS */}

        <div className="tabs" role="tablist" aria-label="Filter projects">
          {projectFilters.map((option) => (
            <button
              key={option}
              type="button"
              role="tab"
              aria-selected={filter === option}
              className={`tabs__btn ${
                filter === option ? 'is-active' : ''
              }`}
              onClick={() => setFilter(option)}
            >
              {option}
            </button>
          ))}
        </div>

        {/* PROJECT LIST */}

        <ul className="projects__list">
          {visible.map((project, index) => {
            const projectImages =
              project.images ??
              (project.image ? [project.image] : [])

            return (
              <motion.li
                key={project.title}
                className="project"
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.5,
                  delay: Math.min(index * 0.06, 0.3),
                  ease: [0.22, 1, 0.36, 1],
                }}
              >

                {/* PROJECT PHOTOS */}

                {projectImages.length > 0 && (
                  <div
                    className="project__gallery"
                    style={{
                      display: 'grid',
                      gridTemplateColumns:
                        projectImages.length > 1
                          ? 'repeat(2, minmax(0, 1fr))'
                          : '1fr',
                      gap: '12px',
                      marginBottom: '18px',
                    }}
                  >
                    {projectImages.map((image, imageIndex) => (
                      <button
                        key={image}
                        type="button"
                        onClick={() =>
                          setSelectedImage(assetUrl(image))
                        }
                        aria-label={`Zoom image ${imageIndex + 1} of ${project.title}`}
                        style={{
                          padding: 0,
                          border: 'none',
                          background: 'transparent',
                          cursor: 'zoom-in',
                          overflow: 'hidden',
                          borderRadius: '12px',
                        }}
                      >
                        <img
                          src={assetUrl(image)}
                          alt={`${project.title} - image ${imageIndex + 1}`}
                          loading="lazy"
                          style={{
                            display: 'block',
                            width: '100%',
                            height: 'auto',
                            aspectRatio: '16 / 10',
                            objectFit: 'contain',
                            borderRadius: '12px',
                            background: 'rgba(128,128,128,0.08)',
                            transition: 'transform 0.3s ease',
                          }}
                        />
                      </button>
                    ))}
                  </div>
                )}

                {/* YOUTUBE VIDEO PREVIEWS */}

                {project.videos?.length ? (
                  <div
                    className="project__videos"
                    style={{
                      display: 'grid',
                      gridTemplateColumns:
                        project.videos.length > 1
                          ? 'repeat(2, minmax(0, 1fr))'
                          : '1fr',
                      gap: '20px',
                      marginBottom: '22px',
                    }}
                  >
                    {project.videos.map((video, videoIndex) => {
                      const videoId = video
                        .split('/embed/')[1]
                        ?.split(/[?&]/)[0]

                      if (!videoId) return null

                      const youtubeUrl =
                        `https://www.youtube.com/watch?v=${videoId}`

                      return (
                        <div key={video} style={{ minWidth: 0 }}>

                          <a
                            href={youtubeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Play ${project.title} video ${videoIndex + 1} on YouTube`}
                            style={{
                              display: 'block',
                              position: 'relative',
                              aspectRatio: '16 / 9',
                              overflow: 'hidden',
                              borderRadius: '14px',
                              background: '#111',
                            }}
                          >
                            <img
                              src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                              alt={`${project.title} video ${videoIndex + 1}`}
                              loading="lazy"
                              style={{
                                display: 'block',
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                              }}
                            />

                            {/* PLAY BUTTON */}

                            <span
                              aria-hidden="true"
                              style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: '68px',
                                height: '48px',
                                borderRadius: '12px',
                                background: '#e62117',
                                color: 'white',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '25px',
                                boxShadow: '0 3px 15px rgba(0,0,0,0.3)',
                              }}
                            >
                              ▶
                            </span>
                          </a>

                          {/* YOUTUBE LINK */}

                          <a
                            href={youtubeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project__cta"
                            style={{
                              display: 'inline-block',
                              marginTop: '10px',
                            }}
                          >
                            ▶ Watch on YouTube
                          </a>

                        </div>
                      )
                    })}
                  </div>
                ) : null}

                {/* PROJECT INFORMATION */}

                <div className="project__meta">

                  {project.tags.length > 0 && (
                    <div className="project__tags">
                      {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  )}

                  <h3>{project.title}</h3>

                  {project.description && (
                    <p>{project.description}</p>
                  )}

                  {project.href && (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project__cta"
                    >
                      View project →
                    </a>
                  )}

                </div>
              </motion.li>
            )
          })}
        </ul>
      </div>

      {/* FULL-SCREEN IMAGE ZOOM */}

      {selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged project image"
          onClick={() => setSelectedImage(null)}
          onKeyDown={(event) => {
            if (event.key === 'Escape') {
              setSelectedImage(null)
            }
          }}
          tabIndex={-1}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: 'rgba(0, 0, 0, 0.94)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px 20px',
            cursor: 'zoom-out',
          }}
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            aria-label="Close enlarged image"
            style={{
              position: 'absolute',
              top: '20px',
              right: '25px',
              color: 'white',
              background: 'transparent',
              border: 'none',
              fontSize: '42px',
              cursor: 'pointer',
              zIndex: 1,
            }}
          >
            ×
          </button>

          <img
            src={selectedImage}
            alt="Enlarged project"
            onClick={(event) => event.stopPropagation()}
            style={{
              maxWidth: '95vw',
              maxHeight: '90vh',
              objectFit: 'contain',
              borderRadius: '8px',
              cursor: 'default',
            }}
          />
        </div>
      )}
    </section>
  )
}
