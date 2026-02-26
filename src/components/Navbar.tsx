'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/publications', label: 'Publications' },
  { href: '/skills', label: 'Skills' },
  { href: '/certifications', label: 'Certifications' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.ctrlKey && e.shiftKey && e.key === '.') {
        router.push('/admin');
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [router]);

  return (
    <div ref={ref} className="fixed top-0 left-0 right-0 z-50" style={{ background: '#1c1c1a' }}>
      <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800">
        <Link
          href="/"
          className="text-neutral-300 font-light tracking-widest text-sm uppercase"
          onClick={() => setOpen(false)}
        >
          Pradham Mummaleti
        </Link>

        <button
          onClick={() => setOpen((o) => !o)}
          className="flex flex-col justify-center gap-[5px] w-8 h-8 focus:outline-none"
          aria-label="Toggle menu"
        >
          <span
            className="block h-px transition-all duration-300 origin-center"
            style={{
              background: '#a3a380',
              width: open ? '20px' : '20px',
              transform: open ? 'translateY(6px) rotate(45deg)' : 'none',
            }}
          />
          <span
            className="block h-px transition-all duration-300"
            style={{
              background: '#a3a380',
              width: '14px',
              opacity: open ? 0 : 1,
              transform: open ? 'scaleX(0)' : 'scaleX(1)',
            }}
          />
          <span
            className="block h-px transition-all duration-300 origin-center"
            style={{
              background: '#a3a380',
              width: open ? '20px' : '20px',
              transform: open ? 'translateY(-6px) rotate(-45deg)' : 'none',
            }}
          />
        </button>
      </div>

      {open && (
        <div
          className="border-b border-neutral-800 py-4 px-6 flex flex-col gap-1"
          style={{ background: '#1c1c1a' }}
        >
          {links.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="py-2 text-sm font-light tracking-widest uppercase transition-colors"
                style={{ color: active ? '#a3a380' : '#737373' }}
              >
                {active && <span className="mr-2" style={{ color: '#a3a380' }}>—</span>}
                {label}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
