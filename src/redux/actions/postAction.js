export const addPost = payload => {
  return {
    type: "ADD_POST",
    payload
  }
}

export const editPost = payload => {
  return {
    type: "EDIT_POST",
    payload
  }
}

export const finishEditingPost = payload => {
  return {
    type: "FINISH_EDITING_POST",
    payload
  }
}

export const removePost = payload => {
  return {
    type: "REMOVE_POST",
    payload
  }
}

export const getPosts = payload => {
  return {
    type: "GET_POSTS",
    payload
  }
}

export const rollBackPosts = () => {
  return {
    type: "ROLLBACK_POSTS"
  }
}
