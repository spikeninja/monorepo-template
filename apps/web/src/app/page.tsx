import { apiClient } from "@/api/client"

export default async function Home() {
  // here is an example of using Hono RPC client
  const response = await apiClient.api.examples.$get()
  const data = await response.json()

  return (
    <div className="flex min-h-screen items-center justify-center">
      <h2>Fetching all examples from Hono API</h2>
      <div>
        {data.messages.map((example) => (
          <div key={example.id}>
            <h3>{example.text}</h3>
          </div>
        ))}
      </div>
    </div>
  )
}
