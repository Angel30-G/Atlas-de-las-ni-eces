CREATE TABLE IF NOT EXISTS messages (
  id SERIAL PRIMARY KEY,
  nombre   VARCHAR(50)  NOT NULL,
  telefono VARCHAR(15)  NOT NULL,
  correo   VARCHAR(100) NOT NULL,
  mensaje  TEXT         NOT NULL,
  fecha    TIMESTAMP    DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_messages_correo ON messages (correo);
CREATE INDEX IF NOT EXISTS idx_messages_fecha  ON messages (fecha DESC);