const INITIAL_STATE = {
  posts: [],
  postBySpecificUser: [],
  isAlreadyLiked: false,
  bookmarkedPosts: [],
  loading: false,
  error: null,
};

const PostReducer = (state, { type, payload }) => {
  switch (type) {
    case "GET_ALL_POSTS": {
      return {
        ...state,
        posts: payload,
      };
    }

    case "USER__LIKED__POST": {
      const updatedData = [...state.posts].map((eachPost) =>
        eachPost._id === payload._id
          ? {
              ...eachPost,
              likes: payload.likes,
              likedByUsers: payload.likedByUsers,
            }
          : eachPost
      );
      const updatedSpecificPost = [...state.postBySpecificUser].map(
        (eachPost) =>
          eachPost._id === payload._id
            ? {
                ...eachPost,
                likes: payload.likes,
                likedByUsers: payload.likedByUsers,
              }
            : eachPost
      );

      const updateBookMarkedPost = [...state.bookmarkedPosts].map((eachPost) =>
        eachPost._id === payload._id
          ? {
              ...eachPost,
              post_id: {
                ...eachPost.post_id,
                likes: payload.likes,
              },
              likedByUsers: payload.likedByUsers,
            }
          : eachPost
      );

      return {
        ...state,
        posts: updatedData,
        postBySpecificUser: updatedSpecificPost,
        bookmarkedPosts: updateBookMarkedPost,
      };
    }

    case "DISLIKE__POST": {
      const updatedData = [...state.posts].map((eachPost) =>
        eachPost._id === payload._id
          ? {
              ...eachPost,
              likes: payload.likes,
              likedByUsers: payload.likedByUsers,
            }
          : eachPost
      );
      const updatedSpecificPost = [...state.postBySpecificUser].map(
        (eachPost) =>
          eachPost._id === payload._id
            ? {
                ...eachPost,
                likes: payload.likes,
                likedByUsers: payload.likedByUsers,
              }
            : eachPost
      );

      const updateBookMarkedPost = [...state.bookmarkedPosts].map((eachPost) =>
        eachPost._id === payload._id
          ? {
              ...eachPost,
              post_id: {
                ...eachPost.post_id,
                likes: payload.likes,
              },
              likedByUsers: payload.likedByUsers,
            }
          : eachPost
      );

      return {
        ...state,
        posts: updatedData,
        postBySpecificUser: updatedSpecificPost,
        bookmarkedPosts: updateBookMarkedPost,
      };
    }

    case "CHECK_IS_ALREADY_LIKE": {
      const checkLike = [...state.posts].map((eachPost) =>
        eachPost.likes.includes(payload._id)
          ? { ...eachPost, isAlreadyLiked: true }
          : { ...eachPost, isAlreadyLiked: false }
      );

      return {
        ...state,
        posts: checkLike,
      };
    }

    case "CREATE_COMMENT": {
      const updatedData = [...state.posts].map((eachPost) =>
        eachPost._id === payload._id
          ? {
              ...eachPost,
              comments: payload.comments,
            }
          : eachPost
      );
      return {
        ...state,
        posts: updatedData,
      };
    }

    case "DELETE_COMMENT": {
      const updatedData = [...state.posts].map((EachComment) =>
        EachComment._id === payload._id
          ? { ...EachComment, comments: payload.comments }
          : EachComment
      );
      return {
        ...state,
        posts: updatedData,
      };
    }

    // sorting post

    case "SORT_POST__BY__LATEST": {
      const sortedData = [...state.posts].sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
      });

      return {
        ...state,
        posts: sortedData,
      };
    }
    case "SORT_POST__BY__OLDEST": {
      const sortedData = [...state.posts].sort((a, b) => {
        return new Date(a.createdAt) - new Date(b.createdAt);
      });

      return {
        ...state,
        posts: sortedData,
      };
    }
    case "SORT_POST__BY__MOST-LIKED": {
      const sortedData = [...state.posts].sort(
        (a, b) => b.likes.length - a.likes.length
      );

      return {
        ...state,
        posts: sortedData,
      };
    }

    case "GET_POST_BY_ID": {
      return {
        ...state,
        postBySpecificUser: payload,
      };
    }

    case "GET_BOOKMARKED_POST": {
      return {
        ...state,
        bookmarkedPosts: payload,
      };
    }

    case "REMOVE_BOOKMARKED_POST": {
      const updatedData = [...state.bookmarkedPosts].filter(
        (eachPost) => eachPost._id !== payload._id
      );
      return {
        ...state,
        bookmarkedPosts: updatedData,
      };
    }

    // case "CHECK_IS_ALREADY_BOOKMARK": {
    //   const checkBookmarkPost = [...state.posts].map((eachPost) =>
    //     eachPost.bookmarkedPosts.i
    //       ? { ...eachPost, isAlreadyBookmark: true }
    //       : { ...eachPost, isAlreadyBookmark: false }
    //   );
    //   return {
    //     ...state,
    //     posts: checkBookmarkPost,
    //   };
    // }

    default:
      return state;
  }
};

export { INITIAL_STATE, PostReducer };
