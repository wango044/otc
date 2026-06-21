import { useState } from 'react'

const tasks = [
  { name: 'Bridge volume', progress: 82, state: 'Hot' },
  { name: 'Social proof', progress: 64, state: 'Review' },
  { name: 'Quest streak', progress: 91, state: 'Ready' },
  { name: 'Sybil screen', progress: 37, state: 'Fix' },
]

function App() {
  const [connected, setConnected] = useState(false)
  const [missionTasks, setMissionTasks] = useState(tasks)
  const completeTasks = missionTasks.filter((task) => task.progress === 100).length
  const readiness = Math.round(
    missionTasks.reduce((sum, task) => sum + task.progress, 0) / missionTasks.length,
  )

  function verifyTask(name) {
    setMissionTasks((current) =>
      current.map((task) =>
        task.name === name ? { ...task, progress: 100, state: 'Done' } : task,
      ),
    )
  }

  return (
    <main className="war-room">
      <header className="war-header">
        <a href="#room">Airdrop War Room</a>
        <button type="button" onClick={() => setConnected((value) => !value)}>
          {connected ? 'Wallet connected' : 'Connect wallet'}
        </button>
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
          <strong>{readiness}%</strong>
          <p>{12_408 + completeTasks * 640} wallets cleared</p>
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
          {missionTasks.map(({ name, progress, state }) => (
            <div className="task" key={name}>
              <span>{name}</span>
              <strong>{progress}%</strong>
              <em>{state}</em>
              <button type="button" onClick={() => verifyTask(name)}>
                Verify
              </button>
            </div>
          ))}
        </article>

        <article className="broadcast">
          <h2>Launch broadcast</h2>
          <p>Next wave opens in</p>
          <strong>03:18:44</strong>
          <button type="button">{connected ? 'Announcement queued' : 'Schedule announcement'}</button>
        </article>
      </section>

      <section className="operator-row">
        <div>
          <span>Claims/min</span>
          <strong>{421 + completeTasks * 38}</strong>
        </div>
        <div>
          <span>Referral lift</span>
          <strong>{(18.6 + completeTasks * 1.4).toFixed(1)}%</strong>
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
