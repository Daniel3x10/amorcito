// Generador de Confeti ligero, sin dependencias externas
export function lanzarConfeti() {
  const canvas = document.createElement('canvas');
  canvas.style.position = 'fixed';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100vw';
  canvas.style.height = '100vh';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '999999';
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const colores = ['#f43f5e', '#ec4899', '#d946ef', '#a855f7', '#fbbf24', '#38bdf8', '#34d399', '#f97316'];
  const particulas: {
    x: number;
    y: number;
    size: number;
    color: string;
    vx: number;
    vy: number;
    rot: number;
    vrot: number;
  }[] = [];

  for (let i = 0; i < 120; i++) {
    particulas.push({
      x: canvas.width / 2 + (Math.random() - 0.5) * 200,
      y: canvas.height * 0.4 + (Math.random() - 0.5) * 100,
      size: Math.random() * 8 + 4,
      color: colores[Math.floor(Math.random() * colores.length)],
      vx: (Math.random() - 0.5) * 16,
      vy: Math.random() * -14 - 6,
      rot: Math.random() * 360,
      vrot: (Math.random() - 0.5) * 12,
    });
  }

  let frames = 0;
  function animar() {
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let vivas = 0;
    for (const p of particulas) {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.35; // Gravedad
      p.rot += p.vrot;

      if (p.y < canvas.height + 20) {
        vivas++;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rot * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.7);
        ctx.restore();
      }
    }

    frames++;
    if (vivas > 0 && frames < 240) {
      requestAnimationFrame(animar);
    } else {
      canvas.remove();
    }
  }

  requestAnimationFrame(animar);
}
