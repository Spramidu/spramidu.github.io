
'use client'

import type { CSSProperties } from 'react'
import { useState } from 'react'
import type { IconType } from 'react-icons'

import {
  FaAws,
  FaCode,
  FaDatabase,
  FaDiagramProject,
  FaJava,
  FaMicrochip,
  FaWindows,
  FaRobot,
  FaWaveSquare,
  FaCube,
  FaScrewdriverWrench,
  FaTemperatureHalf,
  FaGaugeHigh,
  FaBolt,
  FaSatelliteDish,
} from 'react-icons/fa6'

import {
  SiCplusplus,
  SiCss,
  SiDjango,
  SiGit,
  SiHtml5,
  SiLangchain,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiNumpy,
  SiOpencv,
  SiPandas,
  SiPython,
  SiScikitlearn,
  SiTensorflow,
} from 'react-icons/si'

import { TbChartHistogram } from 'react-icons/tb'
import { VscVscode } from 'react-icons/vsc'
import { motion } from 'framer-motion'

import { skillGroups } from '@/data/content'
import { Reveal } from './Reveal'

// ==========================================
// SKILL ICONS AND COLOURS
// ==========================================

const skillIcons: Record<string, { Icon: IconType; color: string }> = {

  // Photonics
  'Ansys Zemax OpticStudio': {
    Icon: FaWaveSquare,
    color: '#E2231A',
  },

  // Electronics and hardware
  'Electronic Hardware Design': {
    Icon: FaMicrochip,
    color: '#3976A8',
  },
  'Power Electronics': {
    Icon: FaBolt,
    color: '#E0A020',
  },
  'PCB Design': {
    Icon: FaMicrochip,
    color: '#16A085',
  },
  'Schematic Design': {
    Icon: FaDiagramProject,
    color: '#64748B',
  },
  'PCB Layout': {
    Icon: FaCube,
    color: '#16A085',
  },
  'Hardware Development': {
    Icon: FaScrewdriverWrench,
    color: '#64748B',
  },
  'RF Electronics': {
    Icon: FaSatelliteDish,
    color: '#2673B8',
  },
  'Mixed-Signal Electronics': {
    Icon: FaWaveSquare,
    color: '#8B5CF6',
  },
  'THT Soldering': {
    Icon: FaScrewdriverWrench,
    color: '#D97706',
  },
  'SMT Soldering': {
    Icon: FaMicrochip,
    color: '#D97706',
  },
  'Reflow Soldering': {
    Icon: FaTemperatureHalf,
    color: '#E76F51',
  },

  // EDA and simulation
  'Altium Designer': {
    Icon: FaMicrochip,
    color: '#E94B35',
  },
  'LTspice': {
    Icon: FaWaveSquare,
    color: '#D97706',
  },
  'PSIM': {
    Icon: TbChartHistogram,
    color: '#2563EB',
  },
  'MATLAB': {
    Icon: TbChartHistogram,
    color: '#E16737',
  },

  // Programming and embedded systems
  'C': {
    Icon: FaCode,
    color: '#00599C',
  },
  'C++': {
    Icon: SiCplusplus,
    color: '#00599C',
  },
  'Python': {
    Icon: SiPython,
    color: '#3776AB',
  },
  'RTOS': {
    Icon: FaMicrochip,
    color: '#7C3AED',
  },
  'Microcontrollers': {
    Icon: FaMicrochip,
    color: '#3976A8',
  },
  'Firmware Development': {
    Icon: FaCode,
    color: '#16A085',
  },
  'ROS 2': {
    Icon: FaRobot,
    color: '#22314E',
  },

  // Digital design
  'Verilog': {
    Icon: FaMicrochip,
    color: '#7C3AED',
  },
  'VHDL': {
    Icon: FaMicrochip,
    color: '#8B5CF6',
  },

  // Testing and measurement
  'Oscilloscope': {
    Icon: FaWaveSquare,
    color: '#16A085',
  },
  'Logic Analyzer': {
    Icon: FaDiagramProject,
    color: '#2563EB',
  },
  'Vector Network Analyzer (VNA)': {
    Icon: FaSatelliteDish,
    color: '#2673B8',
  },
  'Differential Probing': {
    Icon: FaWaveSquare,
    color: '#64748B',
  },
  'IR Thermal Imaging': {
    Icon: FaTemperatureHalf,
    color: '#E76F51',
  },
  'Climate Chamber Testing': {
    Icon: FaTemperatureHalf,
    color: '#0EA5E9',
  },
  'Current Measurement': {
    Icon: FaBolt,
    color: '#E0A020',
  },
  'Impedance Measurement': {
    Icon: FaGaugeHigh,
    color: '#8B5CF6',
  },
  'Hardware Debugging': {
    Icon: FaScrewdriverWrench,
    color: '#64748B',
  },
  'Hardware Validation': {
    Icon: FaMicrochip,
    color: '#16A085',
  },

  // CAD
  'SolidWorks': {
    Icon: FaCube,
    color: '#E2231A',
  },

  // Other existing mappings
  Java: { Icon: FaJava, color: '#E76F00' },
  RPAL: { Icon: FaCode, color: '#6B7280' },
  SQL: { Icon: FaDatabase, color: '#4479A1' },
  'Scikit-Learn': { Icon: SiScikitlearn, color: '#F7931E' },
  TensorFlow: { Icon: SiTensorflow, color: '#FF6F00' },
  NumPy: { Icon: SiNumpy, color: '#013243' },
  Pandas: { Icon: SiPandas, color: '#150458' },
  LangChain: { Icon: SiLangchain, color: '#1C3C3C' },
  OpenCV: { Icon: SiOpencv, color: '#5C3EE8' },
  'Knowledge Graphs': { Icon: FaDiagramProject, color: '#2F9E8F' },
  'Next.js': { Icon: SiNextdotjs, color: '#111111' },
  HTML: { Icon: SiHtml5, color: '#E34F26' },
  CSS: { Icon: SiCss, color: '#1572B6' },
  Django: { Icon: SiDjango, color: '#0C4B33' },
  'Node.js': { Icon: SiNodedotjs, color: '#5FA04E' },
  MySQL: { Icon: SiMysql, color: '#4479A1' },
  MongoDB: { Icon: SiMongodb, color: '#47A248' },
  Git: { Icon: SiGit, color: '#F05032' },
  'VS Code': { Icon: VscVscode, color: '#0065A9' },
  'Power BI': { Icon: TbChartHistogram, color: '#C9A200' },
  AWS: { Icon: FaAws, color: '#ED8B00' },
  Linux: { Icon: SiLinux, color: '#111111' },
  Windows: { Icon: FaWindows, color: '#0078D4' },
}

// ==========================================
// BRAND LOGOS - PNG FILES
// ==========================================

const brandLogos: Record<string, string> = {
  'Ansys Zemax OpticStudio': '/logos/skills/zemax.png',
  'Altium Designer': '/logos/skills/altium.png',
  'LTspice': '/logos/skills/ltspice.png',
  'PSIM': '/logos/skills/psim.png',
  'MATLAB': '/logos/skills/matlab.png',
  'ROS 2': '/logos/skills/ros.png',
  'SolidWorks': '/logos/skills/solidworks.png',
}

// ==========================================
// CATEGORY COLOURS
// ==========================================

const groupAccents = [
  '#a98ad4',
  '#e07a9a',
  '#e0a273',
  '#6fb6a4',
]

// ==========================================
// SKILLS COMPONENT
// ==========================================

export function Skills() {
  const [active, setActive] = useState<string>('All')

  const visible = skillGroups
    .filter((group) => active === 'All' || group.id === active)
    .flatMap((group) =>
      group.skills.map((skill) => ({
        id: `${group.id}-${skill}`,
        skill,
        accent:
          groupAccents[
            skillGroups.indexOf(group) % groupAccents.length
          ],
      })),
    )

  return (
    <section id="skills" className="section skills section--tint">
      <div className="container">

        <Reveal>
          <p className="eyebrow">Toolkit</p>

          <h2>Tech skills</h2>

          <p className="section__lead">
            Technical skills and tools I use in photonics, electronics
            hardware design, PCB development, embedded systems, robotics,
            simulation, and testing.
          </p>
        </Reveal>

        <div
          className="tabs"
          role="tablist"
          aria-label="Filter skills"
        >
          {[{ id: 'All', label: 'All' }, ...skillGroups].map(
            (option) => (
              <button
                key={option.id}
                type="button"
                role="tab"
                aria-selected={active === option.id}
                className={`tabs__btn ${
                  active === option.id ? 'is-active' : ''
                }`}
                onClick={() => setActive(option.id)}
              >
                {option.label}
              </button>
            ),
          )}
        </div>

        <ul className="skills__grid">
          {visible.map(({ id, skill, accent }, index) => {
            const entry = skillIcons[skill]
            const Icon = entry?.Icon
            const brandLogo = brandLogos[skill]

            return (
              <motion.li
                key={id}
                className="skill"
                style={
                  { '--group-accent': accent } as CSSProperties
                }
                initial={{
                  opacity: 0,
                  y: 18,
                  scale: 0.94,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  margin: '-40px',
                }}
                transition={{
                  duration: 0.4,
                  delay: Math.min(index * 0.035, 0.35),
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <span
                  className="skill__tile"
                  aria-hidden="true"
                >
                  {brandLogo ? (
                    <img
                      src={brandLogo}
                      alt=""
                      className="skill__brand-logo"
                    />
                  ) : Icon ? (
                    <Icon
                      style={{ color: entry.color }}
                    />
                  ) : (
                    skill.slice(0, 2)
                  )}
                </span>

                <span className="skill__name">
                  {skill}
                </span>
              </motion.li>
            )
          })}
        </ul>

      </div>
    </section>
  )
}
