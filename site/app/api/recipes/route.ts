import data from "../../../public/metadata.json";

export function GET(_request: Request): Response {
  return new Response(JSON.stringify(data, null, 2), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
