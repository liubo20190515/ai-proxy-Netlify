import { handle } from '@hono/node-server'
import app from '../../main'

export const handler = handle(app)
