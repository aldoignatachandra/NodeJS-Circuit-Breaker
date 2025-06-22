// Simulate Remote Payment Provider

export async function charge(amount, card) {
  // 20 % chance to fail, 10 % chance to be slow (>3 s)
  const rnd = Math.random();
  if (rnd < 0.2) throw new Error("Payment gateway 5xx");
  if (rnd < 0.3) await new Promise((r) => setTimeout(r, 3500));
  await new Promise((r) => setTimeout(r, 300)); // baseline latency
  return { status: "paid", reference: `PAY-${Date.now()}` };
}
