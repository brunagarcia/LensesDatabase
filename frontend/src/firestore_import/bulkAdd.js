
const admin = require('../../node_modules/firebase-admin')
const functions = require('../../node_modules/firebase/firebase-functions')
//Data from json file
const lensesData = require("./lens-yclopedia.json")

//Kind of config file. 
const serviceAccount = require('./serviceKey.json')

//Create Functions file. 
const sortLink = (arr, name) => {  
  return arr.shotWith.reduce((acc, item) => { 
    if (item[0] === name) {
      acc.push(item[1])
    }
    return acc
  }, [])
}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore()

//Separate an single object
Object.keys(lensesData).forEach((key, index, arr) => { 
  let lens = null;
  // if (index === 42){
    lens = lensesData[key]
  // } else {
    // return
  // }
  // const {shotWith, obs, ...lens} = lensesData[key]

  const data = {
      ...lens,
      key,
      obs: {
        filter: lens.obs[0][1] || null,
        lens: lens.obs[1][1] || null,
        support: lens.obs[2][1] || null,
        notes: lens.obs.slice(3).join(' / ')
      }, 
      shotWith: {
        vimeo: sortLink(lens, 'vimeo'),
        youtube: sortLink(lens, 'youtube')
    }
  }

  db.collection("lenses")
    .add(data)
    .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id)
    })
    .catch(function(error) {
      console.log(data)
      console.error("Error adding document: ", error)
    })
})

