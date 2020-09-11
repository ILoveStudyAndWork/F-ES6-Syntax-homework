const parseData =({data,column}) => {
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
