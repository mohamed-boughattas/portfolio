---
featured: true
title: Crypto ELT Pipeline
description: Modern ELT pipeline for cryptocurrency market analysis using Dagster, PyAirbyte, dbt, DuckDB, Polars, and Streamlit.
image: '@assets/projects/crypto_logo.webp'
startDate: 2024-01-15
skills:
  - Python
  - dbt
  - Dagster
  - DuckDB
  - Polars
  - Streamlit
sourceLink: https://github.com/mohamed-boughattas/crypto-elt-pipeline
---

## Overview

Modern ELT pipeline analyzing cryptocurrency market trends through OHLC candlestick charts and volatility metrics. Features incremental extraction, Medallion architecture (Bronze/Silver/Gold), and full data lineage.

## Key Features

- **Incremental extraction**: Reduces API calls by ~97% on daily runs
- **Medallion Architecture**: Bronze → Silver → Gold data layers
- **Data quality**: Pandera validation + dbt tests
- **Orchestration**: Dagster with full data lineage
- **Dashboard**: Interactive Streamlit charts for OHLC candlesticks, volume analysis, volatility tracking
- **REST API**: FastAPI serving transformed data

## Tech Stack

| Layer | Technology |
|-------|------------|
| Orchestration | Dagster |
| Extraction | PyAirbyte |
| Transformation | dbt, Polars |
| Storage | DuckDB |
| Quality | Pandera |
| Visualization | Streamlit |
| API | FastAPI |

## Supported Cryptocurrencies

Bitcoin, Ethereum, XRP, Solana, Cardano, Avalanche, Polkadot, BNB, Chainlink, Dogecoin (10 coins)

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    DuckDB (crypto.duckdb)                    │
│  ┌─────────────┐  ┌─────────────┐  ┌──────────────────────┐ │
│  │ raw schema  │→ │staging schema│→ │ mart schema          │ │
│  │(Bronze)     │  │(Silver)      │  │ (Gold)               │ │
│  └──────┬──────┘  └──────┬──────┘  └──────────┬───────────┘ │
└─────────┼────────────────┼───────────────────┼──────────────┘
          │                │                   │
    Dagster IO        dbt runs            dbt creates
    Manager writes    transformations     final tables
                                              │
                                              ▼
                                    ┌─────────────────┐
                                    │   Streamlit     │
                                    │   Dashboard     │
                                    └─────────────────┘
```

## Lessons Learned

- Incremental loading is critical for API rate limit management
- Data contracts with SLAs ensure quality at scale
- Medallion architecture provides clear data lineage
