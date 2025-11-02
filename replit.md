# BrainX: Decentralized Micropayments for IoT on Solana

## Overview

BrainX is a Solana-native decentralized payment infrastructure designed for the IoT economy, enabling instant "get-as-you-go" micropayments. It facilitates machine-to-machine (M2M) and human-to-machine (H2M) transactions leveraging Solana's high throughput and sub-second finality. The project also features a professional documentation website and a proof-of-concept AI chat application where users earn USDC micropayments.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & UI**: React with TypeScript, Vite, Shadcn/ui (Radix UI primitives), and Tailwind CSS.
**Design Philosophy**: A dual design approach:
- **Whitepaper Site**: Professional documentation with a pure black background, white font, and elegant gradients.
- **Chat Interface**: Modern conversational UI with a cosmic theme (dark blue/black gradient with starry background), sidebar layout, real-time status displays, and a mandatory Phantom wallet connection.
**State Management**: TanStack Query for server state; React hooks for local component state.
**Routing**: Wouter for client-side routing.
**Key Features**:
- **Chat Page**: Mandatory Phantom wallet connection with a prominent blocking UI, cosmic theme, Mistral AI with a "rebellious" BrainX persona, persistent sidebar for desktop (network status, balances, limits, session stats), mobile-responsive overlay sidebar, and professional UI elements.
- **Whitepaper Site**: Sticky navigation, pure black background with white text and gradients, mobile-friendly, and client-side routing.

### Backend Architecture

**Framework**: Express.js with TypeScript on Node.js.
**API Design**: RESTful API with endpoints for wallet validation and chat processing (AI responses, USDC transfers).
**Development**: Custom Vite middleware for HMR; esbuild for production.
**Error Handling**: Zod for schema validation and centralized error handling.

### Data Storage

**Database**: PostgreSQL (Neon serverless) with Drizzle ORM for type-safe operations.
**Schema Management**: Drizzle Kit for migrations.
**Current Strategy**: Chat messages are ephemeral and client-side only; `server/storage.ts` is modular for future persistence.

### Authentication and Authorization

**Wallet-Based**: Users authenticate by connecting their Solana wallet (Phantom).
**Flow**: Mandatory wallet connection unlocks chat functionality after validation.
**Integration**: `WalletContext` for global state, automatic wallet detection, account switching, and display of truncated wallet addresses.
**Security**: Wallet address validation, secure server private key storage, no sensitive user data collection, and automatic re-validation on wallet changes.

## External Dependencies

**AI Service**: Mistral AI (`mistral-large-latest`) for natural language processing and response generation, using a "rebellious" BrainX persona loaded from `/character.txt`. Requires `MISTRAL_API_KEY`.

**Blockchain Infrastructure**: Solana (Mainnet/Devnet configurable via `SOLANA_NETWORK`).
- Uses `@solana/web3.js` and `@solana/spl-token`.
- Configurable USDC mints, transfer amounts, daily limits, and minimum USDC buffer.
- Includes safety features like SOL balance checks, USDC balance validation, and configurable rate limiting.
- Requires `SOLANA_PRIVATE_KEY` for transaction signing.

**Database**: Neon Serverless PostgreSQL, connected via `@neondatabase/serverless` and requiring `DATABASE_URL`.

**UI Libraries**: Radix UI, Tailwind CSS, Lucide React, React Hook Form with Zod.

**Build Tools**: Vite, esbuild, TypeScript, PostCSS with Autoprefixer.

**Development Tools (Replit-specific)**: `@replit/vite-plugin-runtime-error-modal`, `@replit/vite-plugin-cartographer`, `@replit/vite-plugin-dev-banner`.