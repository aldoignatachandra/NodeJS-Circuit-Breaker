// Simulate Remote Search Provider

export async function query(term) {
  const rnd = Math.random();
  if (rnd < 0.15) await new Promise((r) => setTimeout(r, 3500));
  await new Promise((r) => setTimeout(r, 120));
  return { hits: Math.floor(Math.random() * 1000) };
}
