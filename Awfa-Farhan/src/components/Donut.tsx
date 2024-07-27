// src/components/Donut.tsx
import React, { useEffect, useState } from 'react';

const Donut: React.FC = () => {
  const [donutText, setDonutText] = useState('');

  useEffect(() => {
    const chars = '.,-~:;=!*#$@';
    const width = 80;
    const height = 22;
    const delay = 30; // in ms

    const updateDonut = () => {
      let A = 0, B = 0;
      let z = Array(width * height).fill(0);
      let b = Array(width * height).fill(' ');

      const interval = setInterval(() => {
        let newDonutText = '';

        for (let j = 0; j < 6.28; j += 0.07) {
          for (let i = 0; i < 6.28; i += 0.02) {
            const c = Math.sin(i);
            const d = Math.cos(j);
            const e = Math.sin(A);
            const f = Math.sin(j);
            const g = Math.cos(A);
            const h = d + 2;
            const D = 1 / (c * h * e + f * g + 5);
            const l = Math.cos(i);
            const m = Math.cos(B);
            const n = Math.sin(B);
            const t = c * h * g - f * e;
            const x = 40 + 30 * D * (l * h * m - t * n);
            const y = 12 + 15 * D * (l * h * n + t * m);
            const o = x + width * y;
            const N = 8 * ((f * e - c * d * g) * m - c * d * e - f * g - l * d * n);

            if (y > 0 && y < height && x > 0 && x < width && D > z[o]) {
              z[o] = D;
              b[o] = chars[N > 0 ? N : 0];
            }
          }
        }

        for (let k = 0; k < width * height; k++) {
          newDonutText += k % width ? b[k] : '\n';
        }

        setDonutText(newDonutText);

        A += 0.00004;
        B += 0.00002;
      }, delay);

      return () => clearInterval(interval);
    };

    updateDonut();
  }, []);

  return (
    <pre className="whitespace-pre-wrap text-xs" style={{ fontFamily: 'monospace', color: '#3b3d41' }}>
      {donutText}
    </pre>
  );
};

export default Donut;
