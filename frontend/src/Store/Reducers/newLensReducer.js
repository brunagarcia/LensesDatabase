const initState = {
  lens: []
}

const newLensReducer = (state = initState, action) => {
  //switch conditional to manipulate the actions type
  switch(action.type){
    case 'ADD_LENS':
      console.log('Added lens', action.lens)
      return state
    case 'ERROR':
      console.log('Error', action.err)
      return state
    case 'FETCH_LENSES':
      console.log('FETCH_LENSES')
      //Add a action that pulls the data from Firestore. 
      
      // -->Or assign Payload to store 
      return state
    default: 
      return state
  }
}

export default newLensReducer