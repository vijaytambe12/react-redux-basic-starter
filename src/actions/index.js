export  function updateTitle (text) {
    return {
        type: "UPDATE_TITLE",
        payload: {
            title:text
        }
    }
}
