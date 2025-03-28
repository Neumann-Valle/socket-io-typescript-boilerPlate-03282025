import { createServer } from 'http'
import { Server } from 'socket.io'

const PORT = 3000

const httpServer = createServer()
const io = new Server(httpServer, {
  /* options */
})

io.on('connection', (socket) => {
  console.log('a socket client has connected')
})

httpServer.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
