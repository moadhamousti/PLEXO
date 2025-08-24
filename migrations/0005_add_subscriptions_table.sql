CREATE TABLE IF NOT EXISTS subscriptions (
    id TEXT PRIMARY KEY NOT NULL,
    user_id UUID NOT NULL REFERENCES users(id),
    status TEXT NOT NULL,
    metadata JSONB,
    price_id TEXT REFERENCES prices(id),
    quantity INTEGER,
    cancel_at_period_end BOOLEAN,
    created TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    current_period_start TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    current_period_end TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    ended_at TIMESTAMPTZ DEFAULT NOW(),
    cancel_at TIMESTAMPTZ DEFAULT NOW(),
    canceled_at TIMESTAMPTZ DEFAULT NOW(),
    trial_start TIMESTAMPTZ DEFAULT NOW(),
    trial_end TIMESTAMPTZ DEFAULT NOW()
);
