export  const setPagesUser = (tableData,page) => {
   return [...tableData].filter((elem, ind) => {
    return ind >= (page - 1)*5 && ind < page*5;
  })
}

