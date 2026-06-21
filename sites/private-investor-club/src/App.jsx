import { useState } from 'react'

const deals = [
  ['Pre-seed infra', '$250K min', 'Open for 12 members'],
  ['Validator yield note', '9.4% target', 'Allocation review'],
  ['Secondary SAFT', '$1.8M block', 'Invite only'],
]

function App() {
  const [selectedDeal, setSelectedDeal] = useState(deals[0][0])
  const [application, setApplication] = useState({ name: '', telegram: '' })
  const [submitted, setSubmitted] = useState(false)

  function submitApplication(event) {
    event.preventDefault()
    if (!application.name.trim() || !application.telegram.trim()) return
    setSubmitted(true)
  }

  return (
    <main className="club-page">
      <header className="club-nav">
        <a href="#club">Marble Circle</a>
        <nav>
          <a href="#deals">Deal room</a>
          <a href="#members">Members</a>
          <a href="#apply">Apply</a>
        </nav>
      </header>

      <section className="club-hero" id="club">
        <div className="club-title">
          <p>Private Investor Club</p>
          <h1>Marble Circle</h1>
        </div>
        <div className="club-intro">
          <p>
            A private crypto capital room for operators, angels, and family offices
            who want curated access without public market noise.
          </p>
          <a href="#apply">Request invitation</a>
        </div>
      </section>

      <section className="membership-strip" id="members">
        <span>42 active members</span>
        <span>Private allocations</span>
        <span>Operator-led diligence</span>
        <span>Quarterly rooms</span>
      </section>

      <section className="deal-room" id="deals">
        <div>
          <p>Current room</p>
          <h2>Quiet access to selected crypto allocations.</h2>
        </div>
        <div className="deal-list">
          {deals.map(([name, size, state]) => (
            <article
              className={selectedDeal === name ? 'selected-deal' : ''}
              key={name}
              onClick={() => setSelectedDeal(name)}
            >
              <span>{name}</span>
              <strong>{size}</strong>
              <p>{state}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="club-journal">
        <article>
          <h2>Membership thesis</h2>
          <p>
            Public communities reward speed. Private rooms reward judgment. The
            site should feel like a gate into a serious room, not a growth funnel.
          </p>
        </article>
        <article>
          <h2>Diligence flow</h2>
          <p>
            Every opportunity is framed by sponsor context, liquidity window,
            lockup logic, risk notes, and member discussion before allocation.
          </p>
        </article>
      </section>

      <section className="apply-panel" id="apply">
        <div>
          <p>Applications reopen this quarter</p>
          <h2>Request a private intro.</h2>
        </div>
        <form onSubmit={submitApplication}>
          <input
            aria-label="Name"
            onChange={(event) => setApplication((current) => ({ ...current, name: event.target.value }))}
            placeholder="Name"
            value={application.name}
          />
          <input
            aria-label="Telegram"
            onChange={(event) => setApplication((current) => ({ ...current, telegram: event.target.value }))}
            placeholder="Telegram"
            value={application.telegram}
          />
          <button type="submit">{submitted ? 'Received' : 'Apply'}</button>
        </form>
        {submitted && (
          <p className="application-note">
            Intro request logged for {application.name}. Preferred room: {selectedDeal}.
          </p>
        )}
      </section>
    </main>
  )
}

export default App
