import { ProductService } from "./product.service";
const Product = new ProductService();

export default {
    Query: {
        async allProducts() {
            return await Product.findAll();
        },
        async getProduct(_, { _id }) {
            return await Product.findOne(_id);
        }
    },
    Mutation: {
        async createProduct(_, { input }, ctx) {
            return await Product.add(input);
        },
        async updateProduct(_, { _id, input }, ctx) {
            return await Product.update(_id, input)
        },
        async deleteProduct(_, { _id }, ctx) {
            return await Product.remove(_id);
        }
    }
}