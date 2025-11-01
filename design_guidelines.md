# Design Guidelines: Solana-Powered AI Chatbot

## Design Approach

**Selected Approach:** Design System (Material Design) with Chat Interface Patterns

**Rationale:** This utility-focused chatbot prioritizes conversation flow, readability, and functional clarity. Drawing inspiration from ChatGPT, Claude, and modern messaging applications while incorporating Material Design principles for consistent component behavior.

**Key Design Principles:**
- Conversation-first layout that prioritizes message readability
- Clear visual separation between user and AI messages
- Seamless wallet integration without disrupting chat flow
- Minimal chrome to keep focus on content

---

## Typography

**Font Families:**
- Primary: Inter or System UI stack for optimal screen readability
- Monospace: JetBrains Mono for wallet addresses and transaction IDs

**Hierarchy:**
- Chat messages: text-base (16px) for comfortable reading
- Wallet address labels: text-sm (14px)
- Transaction status: text-xs (12px)
- System notifications: text-sm (14px) medium weight
- Input placeholder: text-base (16px) with reduced opacity

**Weights:**
- Regular (400): Message content, input fields
- Medium (500): User message labels, wallet info headers
- Semibold (600): Transaction confirmations, error states

---

## Layout System

**Spacing Primitives:** Use Tailwind units of 2, 4, 6, and 8 for consistency
- Component padding: p-4, p-6
- Message gaps: gap-4
- Section spacing: space-y-6, space-y-8
- Input group spacing: gap-2

**Container Structure:**
```
Main viewport: Full height (h-screen)
├── Top bar: Fixed header with h-16
├── Chat container: flex-1 (remaining height)
│   ├── Messages area: Scrollable with max-w-3xl centered
│   └── Message padding: px-4 md:px-6
└── Input area: Fixed bottom with p-4
```

**Maximum Widths:**
- Chat messages container: max-w-3xl
- Individual messages: Full width within container
- Wallet input section: max-w-md

---

## Component Library

### Header Bar
- Fixed top position with subtle border bottom
- Contains: App title/logo (left), wallet status indicator (right)
- Height: h-16 with flex items-center justify-between
- Padding: px-4 md:px-6

### Wallet Input Section
**Position:** Above chat area, dismissable after wallet is set
- Card-style container with rounded-lg borders
- Padding: p-6
- Contains:
  - Label: "Solana Wallet Address" (text-sm medium weight)
  - Input field: Full width, monospace font, rounded-md
  - Validation indicator: Icon + text status
  - Optional: "Disconnect" button if wallet is connected
- Margin: mx-4, my-4

### Chat Messages Area
**Container:**
- Scrollable: overflow-y-auto with smooth scroll behavior
- Padding: pb-24 (space for input area)
- Auto-scroll to bottom on new messages

**Message Bubbles:**
- User messages: Right-aligned (ml-auto), max-w-2xl
- AI messages: Left-aligned (mr-auto), max-w-2xl
- Bubble padding: px-4 py-3
- Border radius: rounded-2xl
- Spacing between messages: space-y-4

**Message Structure:**
```
Message wrapper (flex flex-col gap-1)
├── Sender label (text-xs, only for AI messages: "AI Assistant")
├── Bubble (rounded-2xl, px-4 py-3)
└── Timestamp (text-xs, opacity-60)
```

**Transaction Notification:**
- Appears below AI message bubble
- Compact card with rounded-lg
- Padding: px-3 py-2
- Contains: Icon, "0.001 USDC sent" text, transaction link
- Margin: mt-2

### Input Area
**Fixed Bottom Container:**
- Position: Fixed bottom with backdrop-blur effect
- Padding: p-4
- Border top: Subtle 1px border

**Input Group:**
- Centered with max-w-3xl
- Flex layout with gap-2
- Components:
  - Text input: flex-1, rounded-full, px-6 py-3
  - Send button: w-10 h-10, rounded-full, flex items-center justify-center
  - Loading state: Replace button with spinner

**Input Field States:**
- Default: Border with medium weight
- Focus: Enhanced border, no ring (clean appearance)
- Disabled: Reduced opacity while processing

### System Messages
**Purpose:** Display errors, connection status, transaction confirmations

**Appearance:**
- Centered in chat flow
- Rounded-lg containers with p-3
- Icons (info/warning/success) aligned left
- Text: text-sm
- Different visual treatments for info/warning/error
- Margin: my-4

### Loading States
**AI Typing Indicator:**
- Left-aligned like AI messages
- Animated dots (3 dots, staggered animation)
- Same bubble styling as AI messages
- Padding: px-4 py-3

**Transaction Processing:**
- Inline loading indicator below message
- Spinner + "Processing transaction..." text
- Same styling as transaction notification area

### Empty State
**When no messages:**
- Centered vertically and horizontally
- Icon (chat/message icon)
- Heading: "Start a conversation"
- Subtext: "Messages will appear here. You'll receive 0.001 USDC for each interaction."
- Text alignment: center
- Spacing: space-y-4

---

## Responsive Behavior

**Mobile (< 768px):**
- Reduce horizontal padding: px-4
- Input area: Full width with px-4
- Message bubbles: Slightly reduced max-width
- Header: Compact with smaller text

**Desktop (≥ 768px):**
- Generous padding: px-6
- Centered chat container with max-w-3xl
- More breathing room in message spacing

---

## Interaction Patterns

**Message Submission:**
- Enter key sends message
- Shift+Enter for new line
- Auto-clear input after send
- Disable input during processing

**Wallet Connection:**
- Validate on blur or button click
- Show inline validation feedback
- Persist wallet address in session
- Allow disconnect/change wallet

**Transaction Feedback:**
- Immediate visual confirmation below AI message
- Link to Solana Explorer (devnet)
- Error messages appear as system messages
- Retry option on transaction failure

**Scroll Behavior:**
- Auto-scroll to bottom on new messages
- Smooth scroll animation
- User can scroll up to view history
- "Scroll to bottom" button appears when scrolled up

---

## Accessibility

- Semantic HTML: use `<main>`, `<article>` for messages, `<form>` for input
- ARIA labels for icon buttons
- Focus management: Return focus to input after sending
- Keyboard navigation: Full keyboard accessibility
- Screen reader announcements for new messages
- Sufficient contrast ratios for all text

---

## Component Enrichment

**Header:** Include connection status indicator, optional settings/info icon
**Input Area:** Include character count, placeholder updates based on state
**Messages:** Add copy button for AI responses, timestamp on hover
**Wallet Section:** Include wallet balance display (if connected), network indicator (devnet badge)
**Transaction Links:** Monospace font for transaction IDs, external link icon

---

This design creates a clean, focused chat experience that seamlessly integrates Solana wallet functionality without overwhelming the primary conversation flow. The interface prioritizes readability and usability while maintaining visual polish through consistent spacing, typography hierarchy, and purposeful component design.