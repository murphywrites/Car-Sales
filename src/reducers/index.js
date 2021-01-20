const { ADD_FEATURE, REMOVE_FEATURE, UPDATE_ADDITIONAL, UPDATE_TOTAL } = require("../actions");

const initialState = {
        additionalPrice: 0,
        car: {
          price: 26395,
          name: '2019 Ford Mustang',
          image:
            'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
          features: []
        },
        additionalFeatures: [
          { id: 1, name: 'V-6 engine', price: 1500 },
          { id: 2, name: 'Racing detail package', price: 1500 },
          { id: 3, name: 'Premium sound system', price: 500 },
          { id: 4, name: 'Rear spoiler', price: 250 }
        ]
      }

      export const reducer = (state = initialState, action) => {
          console.log(action)
          switch (action.type) {
              case ADD_FEATURE:
                  return {
                      ...state,
                      car: {...state.car,
                      features: [...state.car.features, action.payload]},
                    additionalFeatures: state.additionalFeatures.filter( feature => {
                        return feature !== action.payload
                    }
                    )};
            
               
                case REMOVE_FEATURE:
                    return {
                        ...state,
                        car: {...state.car,
                        features: state.car.features.filter( feature => {
                            return feature !== action.payload
                        })},
                      additionalFeatures: [...state.additionalFeatures, action.payload]
                      
                      };
                
                case UPDATE_ADDITIONAL:
                    return {
                        ...state,
                        additionalPrice: state.car.features.length === 0 ? 0 :
                        
                        state.car.features.map(feature => {
                            return feature.price})
                            .reduce((accumulator, addedPrice) => {
                                return accumulator + addedPrice   
                        })
                    }      
    
            default:
                return state
          } 
      }