# Sei Network Wallet Behavior Analyst

This project aims to implement a comprehensive Wallet Behavior Analyst for the Sei Network, providing deep insights into wallet activities, spending patterns, investment strategies, and alerting on unusual behaviors. The application is built with a focus on utilizing free and open-source tools and APIs.

## Features

### 1. Enhanced Spending Pattern Analysis
- Categorization of spending (e.g., gaming, daily purchases, travel).
- Behavioral analysis per generation (Gen Z, Millennials, Gen X).
- Pattern recognition for unusual spending behavior.

### 2. Investment Strategy Insights
- Predictive analytics for investment decisions.
- Smart money identification with clustering algorithms.
- Investment performance tracking.
- Alpha signals for copy-trading opportunities.

### 3. Unusual Activity Detection
- FlashAlert System for sub-400ms anomaly notifications.
- Behavioral analysis for rapid transfers and high-frequency transactions.
- Sanctions & blacklist checking (OFAC, FATF, Interpol).
- Machine learning anomaly detection for collective behavior.

### 4. Sei Network Specific Implementation
- Native Sei integration leveraging free RPC endpoints.
- Compass Wallet, Fin Wallet, MetaMask (Sei V2), Keplr Wallet integration.
- SeiDB integration for optimized state access.
- Twin-Turbo consensus monitoring for real-time data.
- CLOB (Central Limit Order Book) analysis for trading insights.

### 5. Real-Time Monitoring
- Pending transaction monitoring.
- Risk profile building.
- Malicious address detection.
- Real-time notifications.

## Tech Stack (Frontend)

- **Framework:** Next.js (App Router)
- **UI Components:** shadcn/ui
- **Styling:** Tailwind CSS
- **Icons:** Lucide React

## Getting Started

1.  **Clone the repository:**
    \`\`\`bash
    git clone https://github.com/your-username/sei-wallet-analyst.git
    cd sei-wallet-analyst
    \`\`\`
2.  **Install dependencies:**
    \`\`\`bash
    npm install
    # or
    yarn install
    \`\`\`
3.  **Run the development server:**
    \`\`\`bash
    npm run dev
    # or
    yarn dev
    \`\`\`
    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Future Enhancements (Backend & Real Data)

This frontend application is designed to be integrated with a robust backend that will handle:
- Real API integrations (Bitquery, Dune Analytics, CoinGecko, Sei Network RPC).
- Machine Learning models for advanced analytics.
- Database persistence (SQLite + Redis caching).
- Real-time WebSocket connections for live data streams.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.
