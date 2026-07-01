type Props = { text: string; className?: string }

/** Texto com efeito glitch no hover (camadas duplicadas com clip + deslocamento). */
export default function GlitchText({ text, className }: Props) {
  return (
    <span className={`group relative inline-block ${className ?? ''}`} data-text={text}>
      <span className="relative z-10">{text}</span>
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 translate-x-0 select-none text-neon-cyan opacity-0 transition-all duration-150 group-hover:translate-x-[3px] group-hover:opacity-70"
      >
        {text}
      </span>
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 translate-x-0 select-none text-signal-red opacity-0 transition-all duration-150 group-hover:-translate-x-[3px] group-hover:opacity-70"
      >
        {text}
      </span>
    </span>
  )
}
