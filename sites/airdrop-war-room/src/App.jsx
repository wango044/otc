const tasks = [
  ['Bridge volume', '82%', 'Hot'],
  ['Social proof', '64%', 'Review'],
  ['Quest streak', '91%', 'Ready'],
  ['Sybil screen', '37%', 'Fix'],
]

function App() {
  return (
    <main className="war-room">
      <header className="war-header">
        <a href="#room">Airdrop War Room</a>
        <button type="button">Connect wallet</button>
      </header>

      <section className="command" id="room">
        <div className="command-copy">
          <h1>Airdrop War Room</h1>
          <p>
            Campaign command center for launch teams tracking eligibility,
            claims, referrals, sybil checks, and community tasks in one loud room.
          </p>
        </div>
        <div className="score-card">
          <span>Claim readiness</span>
          <strong>76%</strong>
          <p>12,408 wallets cleared</p>
        </div>
      </section>

      <section className="mission-grid">
        <article className="claim-funnel">
          <h2>Eligibility funnel</h2>
          <div className="funnel-step wide">88K scanned wallets</div>
          <div className="funnel-step mid">41K eligible candidates</div>
          <div className="funnel-step short">12K high-confidence claims</div>
        </article>

        <article className="task-board">
          <h2>Live tasks</h2>
          {tasks.map(([name, progress, state]) => (
            <div className="task" key={name}>
              <span>{name}</span>
              <strong>{progress}</strong>
              <em>{state}</em>
            </div>
          ))}
        </article>

        <article className="broadcast">
          <h2>Launch broadcast</h2>
          <p>Next wave opens in</p>
          <strong>03:18:44</strong>
          <button type="button">Schedule announcement</button>
        </article>
      </section>

      <section className="operator-row">
        <div>
          <span>Claims/min</span>
          <strong>421</strong>
        </div>
        <div>
          <span>Referral lift</span>
          <strong>18.6%</strong>
        </div>
        <div>
          <span>Sybil risk</span>
          <strong>Medium</strong>
        </div>
      </section>
    </main>
  )
}

export default App
