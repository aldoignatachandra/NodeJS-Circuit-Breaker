// Simulate Remote Email Provider

export async function send(to, subject) {
  const rnd = Math.random();
  console.log("rnd => ", rnd);
  if (rnd < 0.1) throw new Error("SMTP error");
  await new Promise((r) => setTimeout(r, 150));
  return { status: "queued", id: `MSG-${Date.now()}` };
}
