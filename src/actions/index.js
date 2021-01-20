export const ADD_FEATURE = "ADD_FEATURE"
export const REMOVE_FEATURE = "REMOVE FEATURE"
export const UPDATE_TOTAL = "UPDATE_TOTAL"
export const UPDATE_ADDITIONAL = "UPDATE_ADDITIONAL"

export const addFeature = feature => {
    console.log("feature from addFeature: ", feature)
    return {
        type: ADD_FEATURE,
        payload: feature
    }
}

export const removeFeature = feature => {
    console.log("feature from removeFeature: ", feature)
    return {
        type: REMOVE_FEATURE,
        payload: feature
    }
}

export const updateAdditional = car => {
    console.log("car from updateAdditional: ", car)
    return {
        type: UPDATE_ADDITIONAL,
        payload: car
    }
}