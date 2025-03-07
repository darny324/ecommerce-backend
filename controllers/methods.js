const regEx = /\b(<|>|>=|=|<=)\b/g;
const operatorMap = {
  '<': '$lt', 
  '>': '$gt', 
  '>=': '$gte', 
  '=': '$eq', 
  '<=': '$lte'
};

const generateOTP = () =>  {
  return Math.round((100000 + Math.random() * 900000)).toString();
}



const generateAttributeFilters = (numericFilters, ob, options) => {
  const filters = numericFilters.replace(regEx, 
    (match) => `-${operatorMap[match]}-`
  )

  filters.split(',').map((filter) => {
    const {field, operator, value} = filter.split('-');
    if ( options.includes(field)){
      ob.attributes = { 
        [field]: {
          [operator]: Number(value),
          ...[field], 
        }, 
        ...ob.attributes, 
      };
    }
  })
}

const generateGeneralFilters = (numericFilters, ob, options) => {
  const filters = numericFilters.replace(regEx, 
    (match) => `-${operatorMap[match]}-`
  )

  filters.split(',').forEach((filter) => {
    const [field, operator, value] = filter.split('-');
    
    if ( options.includes(field)){
      ob[field] = { [operator]: Number(value)};
    }
  })
}

module.exports = {
  generateOTP, 
  generateAttributeFilters, 
  generateGeneralFilters
}