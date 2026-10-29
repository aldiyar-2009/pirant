import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1] as const;

export default function PageHead({ title, sub }: { title: string; sub?: string }) {
  return (
    <div className="relative isolate overflow-hidden bg-navy py-12 text-white sm:py-14">
      {/* отголосок радара с главной */}
      <svg viewBox="0 0 400 400" aria-hidden className="absolute -right-24 top-1/2 -z-10 h-[420px] w-[420px] -translate-y-1/2 text-white sm:right-0">
        {[60, 110, 160, 199].map((r, n) => (
          <motion.circle
            key={r} cx="200" cy="200" r={r} fill="none" stroke="currentColor" strokeOpacity="0.1"
            initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.2, delay: 0.1 + n * 0.12, ease }}
          />
        ))}
        <circle cx="200" cy="200" r="4" fill="#F28C1B" />
      </svg>
      <div className="container-site">
        <h1 className="overflow-hidden text-3xl font-extrabold sm:text-4xl">
          <motion.span className="block" initial={{ y: '100%' }} animate={{ y: '0%' }} transition={{ duration: 0.7, ease }}>{title}</motion.span>
        </h1>
        {sub && (
          <motion.p className="mt-3 max-w-2xl text-white/75" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25, duration: 0.6 }}>
            {sub}
          </motion.p>
        )}
      </div>
    </div>
  );
}
