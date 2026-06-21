const cards = [
  { name: 'Founder Black', network: 'USDC', limit: '$84,000', status: 'Live' },
  { name: 'Ops Green', network: 'USDT', limit: '$26,500', status: 'Frozen' },
  { name: 'Travel Gold', network: 'BTC', limit: '$12,800', status: 'Live' },
]

const transactions = [
  ['Binance OTC desk', 'USDC', '-$18,420', 'Approved'],
  ['AWS infra', 'USDT', '-$2,870', 'Auto-tagged'],
  ['Lisbon hotel', 'BTC', '-$940', 'Needs note'],
  ['Founder lunch', 'USDC', '-$380', 'Approved'],
]

function App() {
  return (
    <main className="cards-dashboard">
      <aside className="sidebar">
        <strong>Cardline</strong>
        <nav>
          <a href="#overview">Overview</a>
          <a href="#cards">Cards</a>
          <a href="#limits">Limits</a>
          <a href="#ledger">Ledger</a>
        </nav>
      </aside>

      <section className="workspace" id="overview">
        <header className="topbar">
          <div>
            <p>Crypto Cards Dashboard</p>
            <h1>Stablecoin spend control for teams that move fast.</h1>
          </div>
          <button type="button">Issue card</button>
        </header>

        <section className="overview-grid">
          <article className="balance-panel">
            <p>Total available</p>
            <strong>$428,940</strong>
            <div className="balance-line">
              <span></span>
            </div>
            <dl>
              <div>
                <dt>USDC</dt>
                <dd>$261,400</dd>
              </div>
              <div>
                <dt>USDT</dt>
                <dd>$107,220</dd>
              </div>
              <div>
                <dt>BTC</dt>
                <dd>$60,320</dd>
              </div>
            </dl>
          </article>

          <article className="card-stack" id="cards">
            {cards.map((card) => (
              <div className="crypto-card" key={card.name}>
                <span>{card.status}</span>
                <h2>{card.name}</h2>
                <p>{card.network} settlement</p>
                <strong>{card.limit}</strong>
              </div>
            ))}
          </article>

          <article className="limits-panel" id="limits">
            <h2>Spend rules</h2>
            <div className="rule">
              <span>Daily team limit</span>
              <strong>$72,000</strong>
            </div>
            <div className="rule">
              <span>Auto-freeze threshold</span>
              <strong>$9,500</strong>
            </div>
            <div className="rule">
              <span>Approval wallets</span>
              <strong>4 of 6</strong>
            </div>
          </article>
        </section>

        <section className="ledger" id="ledger">
          <div className="section-head">
            <h2>Recent card activity</h2>
            <button type="button">Export CSV</button>
          </div>
          {transactions.map(([merchant, asset, amount, state]) => (
            <div className="transaction" key={merchant}>
              <span>{merchant}</span>
              <span>{asset}</span>
              <strong>{amount}</strong>
              <em>{state}</em>
            </div>
          ))}
        </section>
      </section>
    </main>
  )
}

export default App
