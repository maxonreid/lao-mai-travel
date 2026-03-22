'use client'

export default function OfflinePage() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#0a1628',
      color: '#f5f0e8',
      fontFamily: 'Montserrat, sans-serif',
      textAlign: 'center',
      padding: '2rem',
      gap: '1.5rem',
    }}>
      <img
        src="/img/minimal-logo-no-bg.png"
        alt="Lao Mai Travel"
        style={{ width: '120px', opacity: 0.9 }}
      />
      <h1 style={{
        fontFamily: 'Cinzel, serif',
        fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
        color: '#c9a84c',
        margin: 0,
      }}>
        You are offline
      </h1>
      <p style={{ maxWidth: '420px', lineHeight: 1.7, opacity: 0.8, margin: 0 }}>
        It looks like you have lost your connection. Pages you have already visited are still available to browse.
      </p>
      <button
        onClick={() => window.location.reload()}
        style={{
          marginTop: '0.5rem',
          padding: '0.75rem 2rem',
          backgroundColor: '#c9a84c',
          color: '#0a1628',
          border: 'none',
          borderRadius: '4px',
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: 500,
          fontSize: '0.9rem',
          letterSpacing: '0.05em',
          cursor: 'pointer',
        }}
      >
        Try again
      </button>
    </div>
  )
}
