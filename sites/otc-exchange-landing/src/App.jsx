import { useState } from 'react'

const books = [
  ['BTC/USDC', '$102,440', '$18.4M', '0.08%'],
  ['ETH/USDT', '$5,180', '$11.7M', '0.11%'],
  ['SOL/USDC', '$238.20', '$7.6M', '0.16%'],
]

const pairPrices = {
  'BTC/USDC': 102440,
  'ETH/USDT': 5180,
  'SOL/USDC': 238.2,
}

const rails = ['Same-day settlement', 'Treasury desks', 'DAO liquidity', 'Stablecoin blocks']

function App() {
  const [pair, setPair] = useState('BTC/USDC')
  const [notional, setNotional] = useState('2500000')
  const [side, setSide] = useState('Buy')
  const [quote, setQuote] = useState(null)
  const cleanNotional = Number(notional.replace(/[^0-9.]/g, '')) || 0

  function previewExecution() {
    const units = cleanNotional / pairPrices[pair]
    const fee = cleanNotional * 0.0012
    setQuote({
      units,
      fee,
      eta: cleanNotional > 3000000 ? '40 min' : '18 min',
    })
  }

  return (
    <main className="otc-page">
      <header className="otc-nav">
        <a href="#top" className="brand">Rook OTC Exchange</a>
        <nav>
          <a href="#liquidity">Liquidity</a>
          <a href="#desk">Desk</a>
          <a href="#settlement">Settlement</a>
        </nav>
        <a className="nav-action" href="#quote">Request quote</a>
      </header>

      <section className="otc-hero" id="top">
        <div className="hero-copy">
          <h1>Rook OTC Exchange</h1>
          <p>
            Institutional crypto block liquidity for founders, funds, treasuries,
            and desks that need human-grade execution with clean digital rails.
          </p>
          <div className="rail-list">
            {rails.map((rail) => (
              <span key={rail}>{rail}</span>
            ))}
          </div>
        </div>

        <aside className="quote-ticket" id="quote">
          <div className="ticket-head">
            <span>RFQ ticket</span>
            <strong>Live</strong>
          </div>
          <label>
            Pair
            <select value={pair} onChange={(event) => setPair(event.target.value)}>
              <option>BTC/USDC</option>
              <option>ETH/USDT</option>
              <option>SOL/USDC</option>
            </select>
          </label>
          <label>
            Notional
            <input value={formatInput(notional)} onChange={(event) => setNotional(event.target.value)} />
          </label>
          <label>
            Side
            <div className="side-toggle">
              <button
                className={side === 'Buy' ? 'active-side' : ''}
                onClick={() => setSide('Buy')}
                type="button"
              >
                Buy
              </button>
              <button
                className={side === 'Sell' ? 'active-side' : ''}
                onClick={() => setSide('Sell')}
                type="button"
              >
                Sell
              </button>
            </div>
          </label>
          <button className="quote-button" onClick={previewExecution} type="button">Preview execution</button>
          {quote && (
            <div className="quote-result">
              <span>{side} estimate</span>
              <strong>{quote.units.toFixed(pair === 'SOL/USDC' ? 0 : 2)} {pair.split('/')[0]}</strong>
              <p>{formatMoney(quote.fee)} desk fee · {quote.eta} settlement window</p>
            </div>
          )}
        </aside>
      </section>

      <section className="market-band" id="liquidity">
        <div className="market-copy">
          <h2>Deep liquidity without making the trade the headline.</h2>
          <p>
            Designed like a serious desk: quote clarity, counterparty confidence,
            market depth, and settlement proof all visible before the first call.
          </p>
        </div>
        <div className="book-table">
          {books.map(([bookPair, mid, depth, spread]) => (
            <div className={`book-row ${bookPair === pair ? 'selected-row' : ''}`} key={bookPair}>
              <span>{bookPair}</span>
              <strong>{mid}</strong>
              <em>{depth}</em>
              <b>{spread}</b>
            </div>
          ))}
        </div>
      </section>

      <section className="desk-grid" id="desk">
        <article>
          <h2>Desk coverage</h2>
          <p>Private execution support for large tickets, launch treasuries, and post-raise allocation moves.</p>
        </article>
        <article>
          <h2>Compliance ready</h2>
          <p>Counterparty onboarding, settlement windows, and quote trails packaged for institutional review.</p>
        </article>
        <article id="settlement">
          <h2>Clean settlement</h2>
          <p>Stablecoin, BTC, ETH, and selected majors with predictable post-trade operations.</p>
        </article>
      </section>
    </main>
  )
}

function formatInput(value) {
  const amount = Number(value.replace(/[^0-9.]/g, ''))
  if (!amount) return value
  return `$${amount.toLocaleString('en-US')}`
}

function formatMoney(value) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value)
}

export default App
