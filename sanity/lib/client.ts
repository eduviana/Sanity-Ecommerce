import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
})


// export const client = createClient({
//   apiVersion,
//   dataset,
//   projectId,
//   useCdn,
//   token: "skyWDc7zyf0B82s5r5L6dQWcjf4z5IAP2A4nrH45sDQxBMBNWAdHslguSjwqS9LyyX0gpT74ymmP0DAW3SClrEYpcYsym7vwhDqd6uUf8PzrY2dUjIourZ6PLS8f9RQAzrzNR2dw0rH0qp2FNi8KfqwLK4MHXWdSWEdytPMEue5YSVXgkxg5"
// })