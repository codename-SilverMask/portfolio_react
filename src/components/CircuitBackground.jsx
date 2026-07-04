import { useEffect, useRef } from "react";
import { prefersReducedMotion } from "@/lib/utils";

// Fixed full-viewport canvas rendering a slow-drifting node network —
// a subtle circuit-board / constellation motif behind the content.
//
// Performance guardrails:
// - particle count scales with viewport area, capped (fewer on mobile)
// - devicePixelRatio capped at 1.5
// - cursor interaction only on fine pointers (no work on touch devices)
// - animation pauses while the tab is hidden
// - prefers-reduced-motion renders a single static frame, no loop

const LINK_DISTANCE = 120;
const CURSOR_RADIUS = 180;

export const CircuitBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const reducedMotion = prefersReducedMotion();
    const finePointer = window.matchMedia("(pointer: fine)").matches;

    let particles = [];
    let rafId = null;
    let running = false;
    const mouse = { x: -9999, y: -9999 };

    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

    const setup = () => {
      const { innerWidth: w, innerHeight: h } = window;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // ~1 particle per 26k px² on desktop, half that density on small screens
      const divisor = w < 768 ? 52000 : 26000;
      const count = Math.min(Math.floor((w * h) / divisor), 70);

      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.6 + 0.8,
        violet: Math.random() < 0.18,
      }));
    };

    const draw = () => {
      // use the canvas's own dimensions, not the live viewport — during a
      // resize drag the buffer only updates after the debounce, and clearing
      // a mismatched region leaves particle smears
      const w = canvas.width / dpr;
      const h = canvas.height / dpr;
      ctx.clearRect(0, 0, w, h);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.violet
          ? "rgba(178, 132, 245, 0.5)"
          : "rgba(34, 211, 238, 0.45)";
        ctx.fill();
      }

      // links between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.hypot(dx, dy);
          if (dist < LINK_DISTANCE) {
            const alpha = (1 - dist / LINK_DISTANCE) * 0.14;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(34, 211, 238, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // faint links from cursor to nearby nodes (desktop only)
      if (finePointer && mouse.x > -1000) {
        for (const p of particles) {
          const dist = Math.hypot(p.x - mouse.x, p.y - mouse.y);
          if (dist < CURSOR_RADIUS) {
            const alpha = (1 - dist / CURSOR_RADIUS) * 0.18;
            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(p.x, p.y);
            ctx.strokeStyle = `rgba(34, 211, 238, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }
    };

    const loop = () => {
      draw();
      rafId = requestAnimationFrame(loop);
    };

    const start = () => {
      if (!running && !reducedMotion) {
        running = true;
        rafId = requestAnimationFrame(loop);
      }
    };

    const stop = () => {
      running = false;
      if (rafId) cancelAnimationFrame(rafId);
      rafId = null;
    };

    const handleVisibility = () => {
      document.hidden ? stop() : start();
    };

    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        setup();
        if (reducedMotion) draw();
      }, 200);
    };

    const handleMouse = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    // park the cursor anchor off-screen when the pointer leaves the window,
    // otherwise the cursor-link web keeps rendering at a stale point
    const resetMouse = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    setup();
    if (reducedMotion) {
      draw(); // single static frame
    } else {
      start();
    }

    window.addEventListener("resize", handleResize);
    document.addEventListener("visibilitychange", handleVisibility);
    if (finePointer) {
      window.addEventListener("mousemove", handleMouse);
      window.addEventListener("blur", resetMouse);
      document.documentElement.addEventListener("mouseleave", resetMouse);
    }

    return () => {
      stop();
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibility);
      if (finePointer) {
        window.removeEventListener("mousemove", handleMouse);
        window.removeEventListener("blur", resetMouse);
        document.documentElement.removeEventListener("mouseleave", resetMouse);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
};
