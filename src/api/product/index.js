import productResolvers from "./product.resolvers";
import { loadGQLFile } from "../../utils/gqlLoader";

export default {
    resolvers: productResolvers,
    typeDefs : loadGQLFile('product/product.graphql')
}