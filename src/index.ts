type transformerCallback = (obj: object) => any;

export default class MapTransformer
{
    static object(object: object, transformerFn: transformerCallback)
    {
        return transformerFn(object);
    }

    static array(array: Array<any> = [], transformerFn: transformerCallback)
    {
        const list = [];
        for(let object of array)
        {
            list.push(transformerFn(object));
        }

        return list;
    }

    static of(objectOrArray: Array<any>|object, transformerFn: transformerCallback)
    {
        if(objectOrArray)
        {
            if(Array.isArray(objectOrArray))
            {
                return MapTransformer.array(objectOrArray, transformerFn);
            }
            else if(typeof objectOrArray === 'object')
            {
                return MapTransformer.object(objectOrArray, transformerFn);
            }
            else{
                throw new Error('Transformer: objectOrArray não é do tipo array|object');
            }
        }

    }
}


