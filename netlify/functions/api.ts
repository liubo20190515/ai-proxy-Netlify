import type { Context } from "@netlify/functions"
import app from "../../main"

export default async (req: Request, context: Context) => {
  return app.fetch(req, { context }, context)
}

// export const handler = handle(app)
