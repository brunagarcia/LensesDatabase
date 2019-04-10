export const addLens = (lens) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //asyn call to database
    const firestore = getFirestore()
    
    firestore.collection('lenses').add({
      ...lens,
      firstName: 'admin',
      adminId: '5555',
      addedAt: new Date()
    }).then(() => {
      dispatch({type: 'ADD_LENS', lens})
    }).catch((err) => {
      dispatch({type: 'ERROR', err})
    })
  }
}

const file = require("../../firestore_import/lens-yclopedia.json")

export const bulkAddLens = (lenses) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    //asyn call to database
    const firestore = getFirestore()
    
    Object.keys(lenses).forEach(function(lens){
      firestore.collection('lenses').add({
        file
      }).then(() => {
        dispatch({type: 'BULK_ADD'})
      }).catch((err) => {
        dispatch({type: 'ERROR'})
      })
    })  
  }
}