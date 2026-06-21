import { useState } from 'react'

const protocols = [
  ['Aave v4', '$18.2M', 'Low', '+2.4%'],
  ['Pendle pools', '$7.8M', 'Medium', '-1.1%'],
  ['Perp DEX basket', '$4.1M', 'High', '-6.8%'],
  ['Restaking vaults', '$12.6M', 'Medium', '+0.7%'],
]

const alerts = [
  'Funding rate divergence above threshold',
  'Stablecoin pool imbalance detected',
  'Liquidation cluster forming near $5,060 ETH',
]

function App() {
  const [scanCount, setScanCount] = useState(0)
  const [riskFilter, setRiskFilter] = useState('All')
  const filteredProtocols = protocols.filter((protocol) => riskFilter === 'All' || protocol[2] === riskFilter)
  const riskScore = Math.max(42, 68 - scanCount * 6)
  const varValue = Math.max(0.82, 1.42 - scanCount * 0.14)

  return (
    <main className="risk-terminal">
      <header className="terminal-header">
        <div>
          <strong>Riskgrid Terminal</strong>
          <span>DeFi Risk Terminal</span>
        </div>
        <nav>
          <a href="#exposure">Exposure</a>
          <a href="#protocols">Protocols</a>
          <a href="#alerts">Alerts</a>
        </nav>
      </header>

      <section className="terminal-layout">
        <aside className="risk-sidebar">
          <h1>Riskgrid Terminal</h1>
          <p>
            Portfolio risk console for desks watching protocol exposure,
            liquidity pressure, liquidation zones, and counterparty movement.
          </p>
          <button type="button" onClick={() => setScanCount((count) => count + 1)}>Run risk scan</button>
          {scanCount > 0 && (
            <div className="scan-meta">Last scan reduced active exposure flags by {scanCount * 3}</div>
          )}
        </aside>

        <section className="risk-main" id="exposure">
          <div className="metric-grid">
            <article>
              <span>Total exposure</span>
              <strong>$42.7M</strong>
            </article>
            <article>
              <span>Risk score</span>
              <strong>{riskScore}</strong>
            </article>
            <article>
              <span>VaR 24h</span>
              <strong>${varValue.toFixed(2)}M</strong>
            </article>
          </div>

          <article className="heatmap">
            <div className="heatmap-head">
              <h2>Counterparty heat map</h2>
              <span>Live window</span>
            </div>
            <div className="heat-grid">
              {Array.from({ length: 24 }).map((_, index) => (
                <span key={index} className={`cell cell-${index % 5}`}></span>
              ))}
            </div>
          </article>

          <article className="protocol-table" id="protocols">
            <div className="protocol-head">
              <h2>Protocol book</h2>
              <select value={riskFilter} onChange={(event) => setRiskFilter(event.target.value)}>
                <option>All</option>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
            </div>
            {filteredProtocols.map(([name, exposure, risk, delta]) => (
              <div className="protocol-row" key={name}>
                <span>{name}</span>
                <strong>{exposure}</strong>
                <em>{risk}</em>
                <b>{delta}</b>
              </div>
            ))}
          </article>
        </section>

        <aside className="alert-panel" id="alerts">
          <h2>Risk alerts</h2>
          {alerts.map((alert) => (
            <article key={alert}>
              <span>Alert</span>
              <p>{alert}</p>
            </article>
          ))}
          {scanCount > 0 && (
            <article>
              <span>Scan result</span>
              <p>{scanCount} scan run. Counterparty map refreshed with tighter alert thresholds.</p>
            </article>
          )}
        </aside>
      </section>
    </main>
  )
}

export default App
