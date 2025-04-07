import { handle } from '@hono/node-server/netlify'
import app from '../../main' // Adjust path relative to the compiled JS location (dist)

export const handler = handle(app)
