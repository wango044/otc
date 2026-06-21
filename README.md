# OTC Variant Portfolio Monorepo

One repository with five visually different crypto-focused sites. Each folder can be deployed as a separate Vercel project from the same repo.

## Live Demos

- [Crypto Cards Dashboard](https://otc-crypto-cards-dashboard.vercel.app/)
- [OTC Exchange Landing](https://otc-otc-exchange-landing.vercel.app/)
- [Private Investor Club](https://otc-private-investor-club.vercel.app/)
- [Airdrop War Room](https://otc-airdrop-war-room.vercel.app/)
- [DeFi Risk Terminal](https://otc-defi-risk-terminal.vercel.app/)

## Sites

- `sites/crypto-cards-dashboard` - fintech-style crypto card management dashboard
- `sites/otc-exchange-landing` - institutional OTC exchange landing with RFQ and liquidity table
- `sites/private-investor-club` - luxury private investor club with invite gate and deal room
- `sites/airdrop-war-room` - loud campaign command center for airdrops, claims, and eligibility
- `sites/defi-risk-terminal` - dense DeFi risk terminal for exposure, VaR, alerts, and protocol monitoring

## Commands

- `npm install`
- `npm run dev:crypto-cards-dashboard`
- `npm run dev:otc-exchange-landing`
- `npm run dev:private-investor-club`
- `npm run dev:airdrop-war-room`
- `npm run dev:defi-risk-terminal`
- `npm run build`
- `npm run lint`

## Vercel Setup

Create one Vercel project per site and point each project at its own root directory:

- `sites/crypto-cards-dashboard`
- `sites/otc-exchange-landing`
- `sites/private-investor-club`
- `sites/airdrop-war-room`
- `sites/defi-risk-terminal`

Use the `Vite` preset. The default install, build, and output settings are enough.
