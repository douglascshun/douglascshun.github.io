import { Link } from 'react-router-dom'
import { Terminal } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-5 text-center">
      <Terminal className="text-neon" size={40} />
      <h1 className="mt-6 font-mono text-6xl font-black text-gradient text-glow">404</h1>
      <p className="mt-4 max-w-md font-mono text-sm text-ink-muted">
        <span className="text-neon">root@cshun:~$</span> cat rota &rarr; No such file or directory
      </p>
      <Link to="/" className="btn-neon mt-8">
        cd ~/
      </Link>
    </div>
  )
}
