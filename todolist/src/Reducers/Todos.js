export default (stateProp = [{id: 1, title: 'hiiii', completed: false}], action) => {
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
