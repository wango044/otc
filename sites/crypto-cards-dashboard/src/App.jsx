import { useState } from 'react'

const cards = [
  { name: 'Founder Black', network: 'USDC', limit: 84000, status: 'Live' },
  { name: 'Ops Green', network: 'USDT', limit: 26500, status: 'Frozen' },
  { name: 'Travel Gold', network: 'BTC', limit: 12800, status: 'Live' },
]

const transactions = [
  ['Binance OTC desk', 'USDC', '-$18,420', 'Approved'],
  ['AWS infra', 'USDT', '-$2,870', 'Auto-tagged'],
  ['Lisbon hotel', 'BTC', '-$940', 'Needs note'],
  ['Founder lunch', 'USDC', '-$380', 'Approved'],
]

function App() {
  const [issuedCards, setIssuedCards] = useState(cards)
  const [selectedCard, setSelectedCard] = useState(cards[0].name)
  const [exportState, setExportState] = useState('Export CSV')
  const activeCard = issuedCards.find((card) => card.name === selectedCard) ?? issuedCards[0]
  const liveCards = issuedCards.filter((card) => card.status === 'Live').length
  const totalLimit = issuedCards.reduce((sum, card) => sum + card.limit, 0)

  function issueCard() {
    const nextCard = {
      name: `Growth ${issuedCards.length + 1}`,
      network: 'USDC',
      limit: 15000,
      status: 'Live',
    }
    setIssuedCards((current) => [...current, nextCard])
    setSelectedCard(nextCard.name)
  }

  function toggleCardStatus() {
    setIssuedCards((current) =>
      current.map((card) =>
        card.name === selectedCard
          ? { ...card, status: card.status === 'Live' ? 'Frozen' : 'Live' }
          : card,
      ),
    )
  }

  function exportLedger() {
    setExportState('CSV ready')
    window.setTimeout(() => setExportState('Export CSV'), 1600)
  }

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
          <button type="button" onClick={issueCard}>Issue card</button>
        </header>

        <section className="overview-grid">
          <article className="balance-panel">
            <p>Total available</p>
            <strong>$428,940</strong>
            <div className="balance-line">
              <span style={{ width: `${Math.min(100, Math.round((totalLimit / 160000) * 100))}%` }}></span>
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
            <div className="live-summary">
              <span>{liveCards} live cards</span>
              <span>{formatMoney(totalLimit)} total limits</span>
            </div>
          </article>

          <article className="card-stack" id="cards">
            {issuedCards.map((card) => (
              <button
                className={`crypto-card ${selectedCard === card.name ? 'selected-card' : ''}`}
                key={card.name}
                onClick={() => setSelectedCard(card.name)}
                type="button"
              >
                <span>{card.status}</span>
                <h2>{card.name}</h2>
                <p>{card.network} settlement</p>
                <strong>{formatMoney(card.limit)}</strong>
              </button>
            ))}
          </article>

          <article className="limits-panel" id="limits">
            <h2>Spend rules</h2>
            <div className="rule">
              <span>Daily team limit</span>
              <strong>{formatMoney(activeCard.limit)}</strong>
            </div>
            <div className="rule">
              <span>Auto-freeze threshold</span>
              <strong>$9,500</strong>
            </div>
            <div className="rule">
              <span>Approval wallets</span>
              <strong>4 of 6</strong>
            </div>
            <button type="button" onClick={toggleCardStatus}>
              {activeCard.status === 'Live' ? 'Freeze selected card' : 'Unfreeze selected card'}
            </button>
          </article>
        </section>

        <section className="ledger" id="ledger">
          <div className="section-head">
            <h2>Recent card activity</h2>
            <button type="button" onClick={exportLedger}>{exportState}</button>
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

function formatMoney(value) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value)
}

export default App
