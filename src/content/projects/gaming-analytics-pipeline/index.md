---
featured: true
title: Gaming Analytics Pipeline
description: End-to-end data engineering pipeline for gaming analytics using dlt, Prefect, SQLMesh, Soda Core, and DuckDB.
image: '@assets/projects/gaming_logo.webp'
startDate: 2024-01-10
skills:
  - Python
  - Prefect
  - dlt
  - DuckDB
  - SQLMesh
  - Soda Core
sourceLink: https://github.com/mohamed-boughattas/gaming-analytics-pipeline
---

## Overview

End-to-end data engineering pipeline for collecting, processing, and analyzing gaming data from the RAWG API.

## Architecture

```
┌─────────────┐      ┌─────────────┐
│   RAWG API  │      │  Sources    │
└──────┬──────┘      └──────┬──────┘
       │                    │
       └─────────┬──────────┘
                 │
         ┌───────▼────────┐
         │  dlt Ingestion │
         └───────┬────────┘
                 │
         ┌───────▼────────┐
         │  DuckDB/       │
         │  MotherDuck    │
         └───────┬────────┘
                 │
    ┌────────────┼────────────┐
    │            │            │
┌───▼────┐  ┌──▼────┐  ┌──▼────────┐
│Prefest  │  │Soda    │  │Marimo     │
│3.x     │  │Core    │  │Dashboard  │
└────────┘  └─────────┘  └───────────┘
                              │
                         ┌────▼────┐
                         │Rill     │
                         │Dashboard│
                         └──────────┘
```

## Key Features

- **Data Ingestion**: Extract data from RAWG API using dlt
- **Orchestration**: Manage workflows with Prefect 3.x
- **Data Quality**: Validate data with Soda Core + SQLMesh tests
- **Transformation**: Transform data with SQLMesh
- **Visualization**: Interactive dashboards with Marimo and Rill

## Tech Stack

| Layer | Technology |
|-------|------------|
| Ingestion | dlt |
| Orchestration | Prefect 3.x |
| Quality | Soda Core, SQLMesh |
| Storage | DuckDB, MotherDuck |
| Visualization | Marimo, Rill |

## Dashboard Screenshots

### Marimo Dashboard
Reactive notebook-style dashboard for interactive data exploration

### Rill Dashboard
BI-as-code dashboard for production-ready analytics

## Lessons Learned

- dlt provides excellent pattern for declarative data loading
- SQLMesh brings virtual data mart capabilities
- Marimo enables reactive notebook-style dashboards
