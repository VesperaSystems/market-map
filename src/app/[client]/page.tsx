import { GraphDisplay } from "@/components/graph/graph-display";

function formatClientLabel(value: string) {
  return value
    .split("-")
    .map((part) => part.toUpperCase())
    .join(" ");
}

export default async function ClientGraphPage({
  params,
}: {
  params: Promise<{ client: string }>;
}) {
  const { client } = await params;

  return <GraphDisplay clientLabel={formatClientLabel(client)} />;
}
