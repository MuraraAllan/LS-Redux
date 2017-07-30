export default (stateProp = [], action) => {
  console.log(stateProp);
  console.log(action)
  switch(action.type) {
    case 'ADD_TODO':
      return [...stateProp,
      {
        title: 'novo'
      }];
    default:
      return stateProp;
  };
};
