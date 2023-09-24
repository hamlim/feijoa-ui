export async function GET(_request: Request): Promise<Response> {
  let data = await fetch(`http://${process.env.VERCEL_URL}/metadata.json`).then(
    (r) => r.json(),
  )
  return new Response(JSON.stringify(data, null, 2), {
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
