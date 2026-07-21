import { useEffect, useRef } from "react";

// Particle shape used by the canvas animation
interface Particle {
  x: number; // current x position
  y: number; // current y position
  vx: number; // velocity in x
  vy: number; // velocity in y
  size: number; // radius used to draw the particle
  opacity: number; // current opacity (0..1)
  color: string; // color prefix like "rgba(124,58,237,"
  life: number; // age in frames
  maxLife: number; // lifespan in frames
}

/**
 * ParticleCanvas
 * - Renders a full-bleed canvas that animates floating particles.
 * - Usage: include <ParticleCanvas /> inside a positioned container (it uses absolute inset-0).
 * - Props: `className` (optional) to pass additional tailwind/class styles.
 *
 * Notes / customization:
 * - Change `colors` to alter particle palette (each entry should be an rgba prefix).
 * - Adjust spawn frequency (`Math.random() < 0.15`) to spawn more/less often.
 * - Tweak initial particle count (40) and `maxLife` range for density and lifetime.
 */
export default function ParticleCanvas({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const particlesRef = useRef<Particle[]>([]); // mutable ref holding all particles
  const animFrameRef = useRef<number>(0); // store requestAnimationFrame id for cleanup

  useEffect(() => {
    // Acquire canvas and 2D rendering context
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Resize the canvas to match layout size (keeps devicePixelRatio handling simple)
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      // fall back to window size if bounding rect returns 0
      canvas.width = rect.width || window.innerWidth;
      canvas.height = rect.height || window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Color prefixes. Each entry is an rgba string WITHOUT the closing alpha value.
    // When drawing we append the computed alpha and closing parenthesis.
    const colors = [
      "rgba(124,58,237,",
      "rgba(200,155,60,",
      "rgba(168,85,247,",
      "rgba(240,198,116,",
    ];

    // Spawn a single particle with randomized properties
    const spawnParticle = (): Particle => ({
      x: Math.random() * canvas.width,
      y: canvas.height / 2.5, // start just below the bottom so they float up into view
      vx: (Math.random() - 0.5) * 0.6, // small horizontal drift
      vy: -(Math.random() * 0.8 + 0.3), // upward velocity
      size: Math.random() * 2.5 + 0.5,
      opacity: 0,
      color: colors[Math.floor(Math.random() * colors.length)],
      life: 0,
      maxLife: Math.random() * 300 + 150, // lifespan in frames
    });

    // Initialize a set of particles so the canvas isn't empty on first paint
    particlesRef.current = [];
    for (let i = 0; i < 40; i++) {
      const p = spawnParticle();
      p.y = Math.random() * canvas.height; // distribute initial particles vertically
      p.life = Math.random() * p.maxLife; // randomize start life for variety
      particlesRef.current.push(p);
    }

    // Main animation loop
    const animate = () => {
      // clear previous frame
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // occasional spawn on each frame (tweak probability to change density)
      if (Math.random() < 0.15) {
        particlesRef.current.push(spawnParticle());
      }

      // remove particles that exceeded their lifespan
      particlesRef.current = particlesRef.current.filter((p) => p.life < p.maxLife);

      // update and draw each particle
      particlesRef.current.forEach((p) => {
        p.life++;
        p.x += p.vx;
        p.y += p.vy;

        // compute opacity easing: fade in, stay, then fade out
        const progress = p.life / p.maxLife;
        if (progress < 0.2) {
          p.opacity = progress / 0.2; // fade in
        } else if (progress > 0.7) {
          p.opacity = (1 - progress) / 0.3; // fade out
        } else {
          p.opacity = 1; // fully visible in middle of life
        }

        // draw core circle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.opacity * 0.7})`; // slightly dim the core
        ctx.fill();

        // draw soft outer glow for larger particles
        if (p.size > 1.5) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${p.opacity * 0.08})`;
          ctx.fill();
        }
      });

      // schedule next frame and store id for cleanup
      animFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    // cleanup on unmount: remove listener and cancel animation frame
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  // The canvas is absolutely positioned to cover its container; pass a className to adjust.
  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    />
  );
}
