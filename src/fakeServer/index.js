import { createServer, Model } from "miragejs";

export function makeServer({ environment = "test" } = {}) {
    let server = createServer({
        environment,

        models: {
            movie: Model,
        },

        seeds(server) {
            server.create("user", { name: "Anny", year: 2010 })
            server.create("user", { name: "Inter", year: 2014 })
            server.create("user", { name: "Dunkirk", year: 2017 })
        },

        routes() {
            this.namespace = "api";

            this.get("/users", (schema) => {
                return schema.movies.all()
            })
        },
    })

    return server
}
