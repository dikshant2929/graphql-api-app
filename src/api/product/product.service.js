import Product from "./product.model";

export class ProductService {
    
    async findOne(_id){
        return await Product.findById(_id);
    }

    async findAll(){
        return await Product.find();
    }

    async add(payload){
        return await Product.create(payload);
    }

    async update(_id, payload){
        return await Product.findOneAndUpdate({_id}, payload, { new: true});
    }

    async remove(_id){
        return await Product.findByIdAndRemove(_id);
    }
}