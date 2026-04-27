---
featured: true
title: Internet Health Monitor
description: Data pipeline and interactive dashboard monitoring internet health metrics (IPv6, HTTPS, DNSSEC, RPKI) across 47 countries using Bruin, DuckDB, and Dash.
image: '@assets/projects/internet_health_logo.png'
startDate: 2026-04-01
skills:
  - Python
  - Bruin
  - DuckDB
  - Dash
  - Plotly
  - Docker
sourceLink: https://github.com/mohamed-boughattas/internet-health-monitor
---

## Overview

A data pipeline and interactive dashboard monitoring the security and accessibility of the internet. Ingests metrics from the Internet Society Pulse API, transforms them through a medallion architecture (Bronze/Silver/Gold), and visualizes trends in IPv6, HTTPS, DNSSEC, and RPKI adoption across 47 countries.

## Key Features

- **Medallion Architecture**: Bronze → Silver → Gold data layers in DuckDB
- **Incremental Loading**: Only fetches new data since last run, reducing API calls
- **Composite Health Score**: Equally-weighted average of IPv6, HTTPS, DNSSEC, and ROA/RPKI scores
- **Interactive Dashboard**: 4 pages — global overview with choropleth map, country comparison radar charts, time-series trends, and metric detail analysis
- **47 Countries Tracked**: Configurable country list with ISO codes
- **CI/CD Pipeline**: Automated testing, linting, type checking, and drift detection

## Tech Stack

| Layer | Technology |
|-------|------------|
| Pipeline Framework | Bruin |
| Data Warehouse | DuckDB |
| Language | Python 3.12 |
| Dashboard | Dash + Plotly |
| Task Runner | just |
| Testing | pytest (114 tests) |
| Containerization | Docker + Compose |

## Architecture

```
🌐 ISOC Pulse API
        │
        ▼ ingestr
🥉 Bronze (raw) — 235 ingestion tables
        │
        ▼ cleansed, UNIONed
🥈 Silver (staging) — 4 combined tables
        │
        ▼ monthly aggregation
🥇 Gold (marts) — 3 business tables
        │
        ▼ queries
📊 Dash Dashboard — 4 interactive pages
```

## Lessons Learned

- Incremental loading patterns are essential for API efficiency and rate limit management
- Medallion architecture provides clear separation of concerns across data layers
- Composite scoring simplifies complex multi-metric comparisons across countries
