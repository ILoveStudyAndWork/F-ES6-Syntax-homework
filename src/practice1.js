// TODO 可以思考一下可否用reduce来做
const parseData =({data,column}) => {
    // TODO 使用map做数组与数组的转化，不用声明新数组
    let output = [];
    data.map(record => {
        let item = {};
        column.map((col,index)=> {
            item[col.name] = record[index];
        })
        output.push(item);
    })
    return output;
}
export { parseData };
