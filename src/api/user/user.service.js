import User from "./user.model";

export class UserService {
    
    async findOne(_id){
        return await User.findById(_id);
    }

    async findAll(){
        return await User.find();
    }

    async add(payload){
        return await User.create(payload);
    }

    async update(_id, payload){
        return await User.findOneAndUpdate({_id}, payload, { new: true});
    }

    async remove(_id){
        return await User.findByIdAndRemove(_id);
    }
}