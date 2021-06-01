import { createServer } from 'miragejs'

export function makeServer({ environment = 'test' }) {
    return createServer({
        environment,
        
        routes() {
          this.namespace="api"
    
          this.get("/continents", () => {
            return {
              continents: [
                {
                  id: 1,
                  name: 'América do Norte',
                },
                {
                  id: 2,
                  name: 'América do Sul',
                },
                {
                  id: 3,
                  name: 'Asia',
                },
                {
                  id: 4,
                  name: 'Africa',
                },
                {
                  id: 5,
                  name: 'Europa',
                },
                {
                  id: 6,
                  name: 'Oceania',
                },
              ],
            }
          })
        }
    })
}