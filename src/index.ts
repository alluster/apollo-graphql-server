import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { items, itemtwos } from "./mochdata.js";

const typeDefs = `#graphql
	type Item {
		id: Int	
		name: String
	}
	type ItemTwo {
		id: Int
		title: String
	}
	type Query {
		items: [Item]
		itemtwos: [ItemTwo]
	}
`;

const resolvers = {
	Query: {
		items: () => items,
		itemtwos: () => itemtwos,
	},
};

const server = new ApolloServer({
	typeDefs,
	resolvers,
});

const { url } = await startStandaloneServer(server, {
	listen: { port: 4000 },
});

console.log("Server is running on http://localhost:4000/");
