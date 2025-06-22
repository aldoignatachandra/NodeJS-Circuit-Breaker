# Node.js Circuit Breaker Pattern Implementation

## 📚 Introduction

This repo is my personal space to explore and demonstrates the implementation of the Circuit Breaker pattern in Node.js using the Opossum library. The Circuit Breaker pattern is a design pattern used to detect failures and prevent cascading failures in distributed systems by "tripping" a circuit to stop operations when failures reach a certain threshold.

## 🔄 What is the Circuit Breaker Pattern?

The Circuit Breaker pattern works like an electrical circuit breaker - it stops the flow when problems are detected. It helps your application gracefully handle failures of external services by:

```
1 - Monitoring calls to external services
2 - Tripping when failures exceed a threshold
3 - Providing fallbacks when the circuit is open
4 - Automatically recovering when the system stabilizes
```

### Circuit States

| State         | Description                                                                         |
| ------------- | ----------------------------------------------------------------------------------- |
| **CLOSED**    | Normal operation - requests pass through to the service                             |
| **OPEN**      | Circuit is tripped - requests fail fast without calling the service                 |
| **HALF-OPEN** | Testing recovery - allows limited requests to check if the service is healthy again |

## 🗂️ Project Structure

```bash
├── src/
│    ├── breakers/               # Circuit breaker implementations
│    │   ├── email.js            # Email service circuit breaker
│    │   ├── factory.js          # Factory for creating circuit breakers
│    │   ├── payment.js          # Payment service circuit breaker
│    │   └── search.js           # Search service circuit breaker
│    ├── routes/                 # API routes
│    │   ├── checkout.js         # Checkout endpoint using payment and email
│    │   └── user.js             # User endpoints including search
│    └── services/               # Simulated external services
│        ├── fake_email_api.js   # Simulated email service with random failures
│        ├── fake_payment_api.js # Simulated payment service with random failures
│        └── fake_search_api.js  # Simulated search service with random failures
├── .gitignore
├── index.js                     # Main application entry point
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 20.10.0 or higher)
- npm (version 9.8.1 or higher)

### Installation

```bash
# Clone the repository
git clone https://github.com/aldoignatachandra/NodeJS-Circuit-Breaker.git
cd nodejs-circuit-breaker

# Install dependencies
npm install
```

### Running the Application

```bash
# Start the server
node index.js
```

## 🧪 Testing the Circuit Breakers

You can test the circuit breakers by simulating high traffic to the endpoints. Open two terminal windows:

### Terminal 1 - Test Checkout Endpoint

```bash
while sleep 0.8; do curl -s -XPOST http://localhost:3000/checkout \
  -H 'Content-Type: application/json' \
  -d '{"amount": 10000, "card":"4111...","email":"foo@bar.com"}' | jq .; done
```

### Terminal 2 - Test Search Endpoint

```bash
while sleep 0.8; do
  curl -s "http://localhost:3000/user/search?q=node" | jq .
done
```

## 📊 Observing Circuit Breaker Behavior

When running the test commands, watch the server logs to observe:

1. **Circuit state changes** : CLOSED → OPEN → HALF-OPEN → CLOSED
2. **Fallback responses** : When the circuit is open
3. **Recovery** : How the system recovers after failures

## 📖 References & Further Learning

- Opossum [ENG]: [Opossum Documentation](https://nodeshift.dev/opossum/)
- Microsoft [ENG]: [Microsoft - Circuit Breaker Pattern](https://docs.microsoft.com/en-us/azure/architecture/patterns/circuit-breaker)
- Software Developer Diaries [ENG]: [How to use a Circuit Breaker to make your API more resilient?](https://www.youtube.com/watch?v=tDjWUUf3f3E&list=PL5Lsd0YA4OMFvX88T5xH93NqBALI7TENz&index=15)
- Solehudin MQ [IND]: [Circuit Breaker](https://medium.com/@solehdev94/circuit-breaker-93e3c38dbf37)

## 👨‍💻 Author

Created with 💻 by Ignata

- 📂 GitHub: [Aldo Ignata Chandra](https://github.com/aldoignatachandra)
- 💼 LinkedIn: [Aldo Ignata Chandra](https://linkedin.com/in/aldoignatachandra)
