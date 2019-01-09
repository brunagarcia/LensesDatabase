const initState = {
  lens: [
    {
      id: "ed1e3da6-c866-4250-a845-80c42b4f77f4",
        title: "Century 1.33x Anamorphic Converter WS-13",
        titleImg: "title.jpg",
        stretch: 1.33,
        focusType: "Fixed Focus",
        tkLens: 30,
        minFocus: 0.5,
        avgPrice: 1200,
        epn: "https://goo.gl/gPPyNx",
        weight: 400,
        length: 50,
        frontGlass: 105,
        rearGlass: 45,
        filterThreads: 40,
        rearThreads: 58,
        manufacturer: "Century Precision Optics",
        alias: [
          "Century Optics Full Zoom",
          "Focusable Century",
          "WS-13",
          "Century Anamorphic Converter"
        ],
        review: "https://www.youtube.com/watch?v=klB_oO_M2Lk",
        "galleryLink": "https://www.flickr.com/photos/ferradans/albums/72157674105305270",
        galleryImg: "photo.jpg",
        pros: [
          "Allows wide taking lenses",
          "Simple built-in alignment mechanism",
          "Modern, blue, sci-fi looking flares",
          "Stretching 16:9 footage yields perfect 2.35:1 Cinemascope",
          "Allows very close focus as well as using longer lenses"
        ],
        cons: [
          "Poor image quality around the edges",
          "Very rare"
        ],
        obs: [
          ["To Filter", "Century made a sunshade which can hold a 4.5in filter"],
          ["To Taking Lens", "Sony (WS13-SB) and Canon (WS13-MXL) can be easily modded for 52-58mm threads. The WS13-58 has a 58mm thread"],
          ["Lens Support", "None/Unknown"],
          "The alignment screw is easy to lose"
        ],
        shotWith: [
          ["vimeo", "32084493"],
          ["youtube", "XMZhXR5kv-Y"],
          ["vimeo", "23966414"]
        ]
      },
    {
      id: "3a0dc926-8ed0-4820-b06d-91a93290986c",
        title: "Rathenower Rectimascop 48/2x",
        titleImg: "title.jpg",
        stretch: 2,
        focusType: "Double Focus",
        tkLens: 85,
        minFocus: 6,
        avgPrice: 200,
        epn: "https://goo.gl/GXdtsB",
        weight: 1080,
        length: 140,
        frontGlass: 61,
        rearGlass: 48,
        filterThreads: 0,
        rearThreads: 0,
        manufacturer: "Rathenower Optische Werke",
        alias: [
          "Rectimascop",
          "Rathenower"
        ],
        review: 0,
        galleryLink: 0,
        galleryImg: "photo.jpg",
        pros: [
          "Good optical quality",
          "Blue sci-fi flares",
          "Affordable",
          "Sharp wide open",
          "Can be modded for improved performance"
        ],
        cons: [
          "Heavy",
          "Intense veiling glare when pointed at light source",
          "Dual focus takes time to get acquainted",
          "Low quality build"
        ],
        obs: [
          ["To Filter", "None/Unknown"],
          ["To Taking Lens", "None/Unknown"],
          ["Lens Support", "None/Unknown"],
          "If you screw the back lens all the way in towards the front lens, the minimal focus distance shortens from 20ft to approximately 6ft - but you would also lose infinity.",
          "Simple DIY Rehousing to infinity for Single Focus Optics by Step Rings:<br> http://diehroptic.ch/essays/2015/07/rathenower-rectimascope-for-rectilux/"
        ],
        shotWith: [
          ["vimeo", "93134203"],
          ["youtube", "6MJbBhiB0Lc"],
          ["youtube", "A2BH0Nvqkbs"],
          ["vimeo", "137754674"],
          ["vimeo", "144863460"],
          ["vimeo", "133918178"]
        ]
      },
  ]
}

const newLensReducer = (state = initState, action) => {
  switch(action.type){
    case 'ADD_LENS':
    console.log('Added lens', action.lens)
  }
  return state
}

export default newLensReducer