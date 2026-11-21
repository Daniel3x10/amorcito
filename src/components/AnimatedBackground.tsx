import { useEffect, useRef } from 'react';

interface Particula {
  x: number;
  y: number;
  size: number;
  speedY: number;
  swaySpeed: number;
  swayAmount: number;
  swayOffset: number;
  opacity: number;
  color: string;
  type: 'heart' | 'sparkle' | 'circle';
  rotation: number;
  rotSpeed: number;
}

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Paleta de colores pastel tiernos: rosas, lilas, dorados y duraznos
    const colores = [
      'rgba(244, 114, 182, 0.55)', // Rosa suave
      'rgba(251, 146, 60, 0.45)',  // Durazno cálido
      'rgba(192, 132, 252, 0.45)', // Lila BTS
      'rgba(251, 191, 36, 0.4)',   // Destello dorado
      'rgba(244, 63, 94, 0.45)',   // Rosa fresa
    ];

    const types: ('heart' | 'sparkle' | 'circle')[] = ['heart', 'heart', 'sparkle', 'circle'];

    // Crear partículas flotantes ligeras
    const numParticulas = Math.min(32, Math.floor(width / 40));
    const particulas: Particula[] = [];

    for (let i = 0; i < numParticulas; i++) {
      particulas.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 8 + 6,
        speedY: Math.random() * 0.4 + 0.25,
        swaySpeed: Math.random() * 0.015 + 0.008,
        swayAmount: Math.random() * 20 + 10,
        swayOffset: Math.random() * Math.PI * 2,
        opacity: Math.random() * 0.5 + 0.3,
        color: colores[Math.floor(Math.random() * colores.length)],
        type: types[Math.floor(Math.random() * types.length)],
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.015,
      });
    }

    // Función para dibujar un pequeño corazón perfecto
    function drawHeart(c: CanvasRenderingContext2D, x: number, y: number, size: number, color: string, rot: number) {
      c.save();
      c.translate(x, y);
      c.rotate(rot);
      c.fillStyle = color;
      c.beginPath();
      const topCurveHeight = size * 0.3;
      c.moveTo(0, topCurveHeight);
      // Arco izquierdo
      c.bezierCurveTo(-size / 2, -topCurveHeight, -size, topCurveHeight / 2, 0, size);
      // Arco derecho
      c.bezierCurveTo(size, topCurveHeight / 2, size / 2, -topCurveHeight, 0, topCurveHeight);
      c.closePath();
      c.fill();
      c.restore();
    }

    // Función para dibujar un destello mágico de 4 puntas
    function drawSparkle(c: CanvasRenderingContext2D, x: number, y: number, size: number, color: string, rot: number) {
      c.save();
      c.translate(x, y);
      c.rotate(rot);
      c.fillStyle = color;
      c.beginPath();
      for (let i = 0; i < 4; i++) {
        c.lineTo(Math.cos((i * Math.PI) / 2) * size, Math.sin((i * Math.PI) / 2) * size);
        c.lineTo(Math.cos((i * Math.PI) / 2 + Math.PI / 4) * (size * 0.3), Math.sin((i * Math.PI) / 2 + Math.PI / 4) * (size * 0.3));
      }
      c.closePath();
      c.fill();
      c.restore();
    }

    let t = 0;
    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      t += 0.02;

      for (const p of particulas) {
        p.y -= p.speedY;
        const currentX = p.x + Math.sin(t * p.swaySpeed * 100 + p.swayOffset) * p.swayAmount;
        p.rotation += p.rotSpeed;

        // Si sube más allá de la pantalla, reiniciar abajo
        if (p.y < -30) {
          p.y = height + 20;
          p.x = Math.random() * width;
        }

        if (p.type === 'heart') {
          drawHeart(ctx, currentX, p.y, p.size, p.color, p.rotation);
        } else if (p.type === 'sparkle') {
          drawSparkle(ctx, currentX, p.y, p.size, p.color, p.rotation);
        } else {
          // Burbuja translúcida con brillo
          ctx.save();
          ctx.beginPath();
          ctx.arc(currentX, p.y, p.size * 0.6, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.fill();
          ctx.restore();
        }
      }

      animId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div aria-hidden="true" className="fixed inset-0 pointer-events-none -z-10 overflow-hidden bg-[#fdfbf9]">
      {/* 1. Orbes Orgánicos de Luz en Movimiento Continuo (Aurora Mesh) */}
      <div 
        className="absolute -top-[10%] -left-[10%] w-[38rem] h-[38rem] rounded-full bg-gradient-to-tr from-pink-300/40 to-rose-200/30 blur-[130px] animate-float"
        style={{ animationDuration: '9s' }}
      />
      <div 
        className="absolute top-[25%] -right-[15%] w-[42rem] h-[42rem] rounded-full bg-gradient-to-bl from-amber-200/40 via-orange-100/30 to-pink-200/30 blur-[140px] animate-float"
        style={{ animationDuration: '12s', animationDelay: '2s' }}
      />
      <div 
        className="absolute -bottom-[15%] left-[20%] w-[45rem] h-[45rem] rounded-full bg-gradient-to-tr from-purple-200/35 via-pink-200/30 to-rose-100/40 blur-[160px] animate-float"
        style={{ animationDuration: '15s', animationDelay: '4s' }}
      />
      <div 
        className="absolute top-[60%] -left-[10%] w-[32rem] h-[32rem] rounded-full bg-gradient-to-br from-rose-200/30 to-pink-300/30 blur-[120px] animate-float"
        style={{ animationDuration: '11s', animationDelay: '6s' }}
      />

      {/* 2. Canvas interactivo de corazoncitos y destellos flotantes */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full opacity-75"
      />

      {/* 3. Textura de calidez sutil */}
      <div className="absolute inset-0 bg-radial from-transparent via-transparent to-pink-50/20" />
    </div>
  );
}
