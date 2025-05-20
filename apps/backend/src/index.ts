import {Hono} from 'hono'
import {api} from '@repo/api'

const app = new Hono()

app.get('/', c => c.text(`Hello World\nAPI: ${api()}`))

export default app
