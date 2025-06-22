import CircuitBreaker from "opossum";
import pino from "pino";

export function createBreaker(fn, name, opts = {}) {
  const log = pino({ name, transport: { target: "pino-pretty" } });
  const brk = new CircuitBreaker(fn, {
    timeout: 3000,
    errorThresholdPercentage: 50,
    resetTimeout: 10000,
    ...opts,
  });

  brk.fallback(() => ({ fallback: true, message: `${name} fallback` }));

  brk.on("open", () => log.warn("OPEN"));
  brk.on("halfOpen", () => log.warn("HALF_OPEN"));
  brk.on("close", () => log.info("CLOSED"));
  brk.on("failure", (e) => log.error({ e }, "FAILURE"));
  brk.on("timeout", () => log.error("TIMEOUT"));
  brk.on("reject", () => log.warn("REJECT (fast-fail)"));

  return brk;
}
