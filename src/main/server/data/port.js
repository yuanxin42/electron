import net from 'net'

export const portIsOccupied = port => {
  const server = net.createServer().listen(port)
  return new Promise((resolve, reject) => {
    server.on('listening', () => {
      server.close()
      resolve(port)
    })

    server.on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        resolve(portIsOccupied(port + 1))
        console.log(12344)
      } else {
        reject(err)
      }
    })
  })
}
