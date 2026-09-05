/**
 * TEK10 — Animations & Interactive Systems
 * Purposeful motion: Native responsive scroll, GSAP reveals, and
 * the interactive "From Idea to System" engineering pipeline.
 */

(function () {
  'use strict';

  // --- 1. Purposeful Interactive: "FROM IDEA TO SYSTEM" ---
  const STAGE_DATA = {
    idea: {
      step: '01 / 05',
      title: 'Problem Deconstruction',
      desc: 'We start by dissecting the operational friction. Whether it is industrial energy waste, visitor security bottlenecks, or manual production counting, we define clear technical requirements without forcing a generic template.',
      tags: ['Problem Mapping', 'Feasibility Study', 'Operational Audit', 'Architecture Strategy'],
      terminal: [
        { label: 'CLIENT INGEST', detail: 'Real operational bottleneck specified', active: true },
        { label: 'ANALYSIS', detail: 'Hardware vs Software vs AI trade-offs', active: false },
        { label: 'OUTPUT', detail: 'Precise Engineering Specification', active: false }
      ]
    },
    architecture: {
      step: '02 / 05',
      title: 'System Architecture',
      desc: 'Designing the technical topology. We select the optimal stack — choosing between edge computation, cloud microservices, low-latency relational schemas, and encrypted API protocols built for real-world resilience.',
      tags: ['System Topology', 'FastAPI / Python', 'Database Schema', 'Zero-Trust Auth', 'Protocol Design'],
      terminal: [
        { label: 'GATEWAY', detail: 'Edge-to-cloud secure tunnel established', active: true },
        { label: 'SCHEMA', detail: 'Time-series & relational data model locked', active: true },
        { label: 'APIs', detail: 'High-throughput REST / WebSocket contracts', active: true }
      ]
    },
    data: {
      step: '03 / 05',
      title: 'Data & Telemetry Pipelines',
      desc: 'Connecting to the real world. We ingest raw hardware meter streams, format mobile authentication tokens, and prepare verified image training sets for computer vision models.',
      tags: ['Meter Integration', 'RS485 / Modbus', 'Real-time Telemetry', 'Image Annotation', 'Data Normalization'],
      terminal: [
        { label: 'TELEMETRY', detail: 'Sampling rate: 500ms continuous feed', active: true },
        { label: 'VALIDATION', detail: 'CRC checks & sensor calibration clean', active: true },
        { label: 'STREAM', detail: 'Distributed ingest buffer initialized', active: true }
      ]
    },
    software: {
      step: '04 / 05',
      title: 'Full-Stack Execution',
      desc: 'Engineering the software solution. From reactive web control centers and native mobile passes to high-inference computer vision pipelines, we write clean, performant, maintainable code.',
      tags: ['Custom Web Apps', 'Mobile Engineering', 'PyTorch / OpenCV', 'Responsive UI', 'Modern Microservices'],
      terminal: [
        { label: 'CORE', detail: 'High-performance engine deployed', active: true },
        { label: 'MODELS', detail: 'Computer vision inference optimized (<45ms)', active: true },
        { label: 'INTERFACE', detail: 'Enterprise dashboard synced with live data', active: true }
      ]
    },
    product: {
      step: '05 / 05',
      title: 'Production Hardening',
      desc: 'Deploying into operations. We establish continuous automated backups, comprehensive telemetry monitoring, and end-to-end reliability safeguards that allow systems to run 24/7 in demanding enterprise environments.',
      tags: ['Industrial Deployment', 'Telemetry Observability', 'Automated Failover', 'Enterprise Support'],
      terminal: [
        { label: 'DEPLOYMENT', detail: 'Production status: ACTIVE 24/7/365', active: true },
        { label: 'UPTIME', detail: 'Operational SLA target: 99.9% uptime', active: true },
        { label: 'OUTCOME', detail: 'Verified operational problem SOLVED', active: true }
      ]
    }
  };

  function initPipeline() {
    const tabs = document.querySelectorAll('.pipeline-tab');
    const container = document.getElementById('pipelineContent');
    if (!tabs.length || !container) return;

    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        const stageKey = tab.getAttribute('data-stage');
        const data = STAGE_DATA[stageKey];
        if (!data) return;

        // Update active tab
        tabs.forEach((t) => t.classList.remove('active'));
        tab.classList.add('active');

        // Render stage info
        const tagsHtml = data.tags.map((tag) => `<span class="tech-tag">${tag}</span>`).join('');
        const terminalHtml = data.terminal
          .map(
            (row) => `
          <div class="terminal-row">
            <span class="terminal-badge ${row.active ? 'active' : ''}">${row.label}</span>
            <span class="terminal-arrow">→</span>
            <span>${row.detail}</span>
          </div>
        `
          )
          .join('');

        container.innerHTML = `
          <div class="stage-info">
            <span class="eyebrow">${data.step}</span>
            <h3>${data.title}</h3>
            <p>${data.desc}</p>
            <div class="stage-meta">${tagsHtml}</div>
          </div>
          <div class="stage-diagram">
            <div class="system-terminal">
              ${terminalHtml}
            </div>
          </div>
        `;
      });
    });
  }

  // --- 2. GSAP Entrance Animations (Clean & Lightweight) ---
  function initGSAPAnimations() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || typeof window.gsap === 'undefined') return;

    try {
      const heroTitle = document.querySelector('.hero-title');
      const heroDesc = document.querySelector('.hero-description');
      const heroActions = document.querySelector('.hero-actions');
      const heroRight = document.querySelector('.hero-right');

      if (heroTitle) {
        window.gsap.from(heroTitle, {
          y: 25,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out'
        });
      }

      if (heroDesc) {
        window.gsap.from(heroDesc, {
          y: 20,
          opacity: 0,
          duration: 0.8,
          delay: 0.1,
          ease: 'power2.out'
        });
      }

      if (heroActions) {
        window.gsap.from(heroActions, {
          y: 15,
          opacity: 0,
          duration: 0.8,
          delay: 0.2,
          ease: 'power2.out'
        });
      }

      if (heroRight) {
        window.gsap.from(heroRight, {
          opacity: 0,
          y: 20,
          duration: 0.9,
          delay: 0.25,
          ease: 'power2.out'
        });
      }
    } catch (err) {
      console.warn('GSAP animations skipped:', err);
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    initPipeline();
    initGSAPAnimations();
  });
})();
