import product from './product';
import user from './user';
import lodash from 'lodash';

const { merge } = lodash;

export default {
    resolvers: merge({}, product.resolvers, user.resolvers),
    typeDefs : [product.typeDefs, user.typeDefs].join(' '),
    context: req => ({
        ...req
    })
}