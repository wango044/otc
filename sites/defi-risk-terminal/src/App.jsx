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
          <button type="button">Run risk scan</button>
        </aside>

        <section className="risk-main" id="exposure">
          <div className="metric-grid">
            <article>
              <span>Total exposure</span>
              <strong>$42.7M</strong>
            </article>
            <article>
              <span>Risk score</span>
              <strong>68</strong>
            </article>
            <article>
              <span>VaR 24h</span>
              <strong>$1.42M</strong>
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
            <h2>Protocol book</h2>
            {protocols.map(([name, exposure, risk, delta]) => (
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
        </aside>
      </section>
    </main>
  )
}

export default App
