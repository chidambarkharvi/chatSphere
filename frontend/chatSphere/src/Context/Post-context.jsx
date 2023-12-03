/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer } from "react";
import {
  bookmarkPostServices,
  commentPostServices,
  createPostServices,
  deleteCommentPostServices,
  deletePostServices,
  disLikePostServices,
  editPostServices,
  getAllPostServices,
  getBookmarkPostServices,
  getPostByIdServices,
  likePostServices,
  removoBookmarkPostServices,
} from "../Services/post.services";
import { INITIAL_STATE, PostReducer } from "../Reducers/Post-reducer";
import { useLoader } from "./LoaderContext";
import { useToaster } from "./toast";

const PostContext = createContext(null);

const PostContextProvider = ({ children }) => {
  const { showLoader, hideLoader } = useLoader();
  const { successToast, errorToast } = useToaster();
  //errorToast, warrningToast
  const [postData, dispatch] = useReducer(PostReducer, INITIAL_STATE);

  //create post calling the service
  const createNewPost = async (data) => {
    try {
      showLoader("creating your Post");
      const res = await createPostServices(data);
      if (res.status === 201) {
        hideLoader();
        successToast("Post Created Successfully");
      }
    } catch (err) {
      console.log(err);
      if (err) {
        hideLoader();
        errorToast("Something went wrong while creating post");
      }
    }
  };

  //get all post calling the service
  const getAllPosts = async () => {
    try {
      showLoader("Getting All Posts...");
      const res = await getAllPostServices();
      if (res.status === 200) {
        dispatch({ type: "GET_ALL_POSTS", payload: res?.data?.postData });
        hideLoader();
      }
    } catch (err) {
      console.log(err);
      if (err) {
        hideLoader();
        errorToast("Something went wrong while getting posts");
      }
    }
  };

  const getPostById = async (id) => {
    try {
      showLoader("Getting Post...");
      const res = await getPostByIdServices(id);
      if (res.status === 200) {
        dispatch({ type: "GET_POST_BY_ID", payload: res.data?.postData });
        hideLoader();
      }
    } catch (err) {
      console.log(err);
      if (err) {
        hideLoader();
        errorToast("Something went wrong while getting post");
      }
    }
  };

  //edit post calling the service and dispatching the action

  const editPostfun = async (postId, data) => {
    try {
      const res = await editPostServices(postId, data);
      if (res.status === 200) {
        getAllPosts();
        hideLoader();
        getPostById(JSON.parse(localStorage.getItem("user"))._id);
        successToast("Post Edited Successfully");
      }
    } catch (err) {
      console.log(err);
      if (err) {
        hideLoader();
        errorToast("Something went wrong while editing post");
      }
    }
  };

  //like post

  const likePost = async (id) => {
    try {
      const res = await likePostServices(id);
      if (res.status === 200) {
        dispatch({
          type: "USER__LIKED__POST",
          payload: res?.data?.postData,
        });
        getBookmarkedPost();
      }
    } catch (err) {
      console.log(err);
      if (err) {
        hideLoader();
        errorToast("Something went wrong while liking post");
      }
    }
  };

  //dislikepost

  const disLikePost = async (id) => {
    try {
      const res = await disLikePostServices(id);
      if (res.status === 200) {
        dispatch({
          type: "DISLIKE__POST",
          payload: res?.data?.postData,
        });
        getBookmarkedPost();
      }
    } catch (err) {
      console.log(err);
      if (err) {
        hideLoader();
        errorToast("Something went wrong while disliking post");
      }
    }
  };

  //create commet calling the service and dispatching the action

  const createComment = async (postId, commnet) => {
    try {
      const res = await commentPostServices(postId, commnet);
      if (res.status === 200) {
        dispatch({ type: "CREATE_COMMENT", payload: res.data?.postData });
        hideLoader();
        successToast("Comment Created Successfully");
        getBookmarkedPost();
      }
    } catch (err) {
      console.log(err);
      if (err) {
        hideLoader();
        errorToast("Something went wrong while creating comment");
      }
    }
  };

  //delete comment calling the service and dispatching the action

  const deleteComment = async (postId, commentId) => {
    try {
      const res = await deleteCommentPostServices(postId, commentId);
      if (res.status === 200) {
        dispatch({ type: "DELETE_COMMENT", payload: res.data?.postData });
        hideLoader();
        successToast("Comment Deleted Successfully");
        getBookmarkedPost();
      }
    } catch (err) {
      console.log(err);
      if (err) {
        hideLoader();
        errorToast("Something went wrong while deleting comment");
      }
    }
  };

  //bookmark post calling the service and dispatching the action

  const bookmarkPost = async (postId) => {
    const token = localStorage.getItem("token");
    try {
      const res = await bookmarkPostServices(postId, token);
      if (res.status === 200) {
        showLoader();
        successToast("Post Bookmarked Successfully");
        getBookmarkedPost();
      }
    } catch (err) {
      console.log(err);
      if (err) {
        hideLoader();
        errorToast("Something went wrong while bookmarking post");
      }
    }
  };

  //get Bookmarked post calling the service and dispatching the action

  const getBookmarkedPost = async () => {
    try {
      showLoader("Getting Bookmarked Post...");
      const res = await getBookmarkPostServices();
      if (res.status === 200) {
        dispatch({
          type: "GET_BOOKMARKED_POST",
          payload: res.data?.data,
        });
        hideLoader();
      }
    } catch (err) {
      console.log(err);
      if (err) {
        hideLoader();
        errorToast("Something went wrong while getting bookmarked post");
      }
    }
  };

  const removePostFromBookmark = async (postId) => {
    try {
      showLoader("Removing Post From Bookmark...");
      const res = await removoBookmarkPostServices(postId);
      if (res.status === 200) {
        dispatch({
          type: "REMOVE_BOOKMARKED_POST",
          payload: res.data?.data,
        });
        hideLoader();
        getBookmarkedPost();
      }
    } catch (err) {
      console.log(err);
      if (err) {
        hideLoader();
        errorToast("Something went wrong while removing bookmarked post");
      }
    }
  };

  //delet post calling the service and dispatching the action

  const deletePost = async (postId) => {
    try {
      showLoader("Deleting Post...");
      const res = await deletePostServices(postId);
      if (res.status === 200) {
        getPostById(JSON.parse(localStorage.getItem("user"))._id);
        hideLoader();
      }
    } catch (err) {
      console.log(err);
      if (err) {
        hideLoader();
        errorToast("Something went wrong while deleting post");
      }
    }
  };

  return (
    <PostContext.Provider
      value={{
        createNewPost,
        getAllPosts,
        deletePost,
        postData,
        dispatch,
        editPostfun,
        createComment,
        deleteComment,
        getPostById,
        disLikePost,
        bookmarkPost,
        likePost,
        getBookmarkedPost,
        removePostFromBookmark,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export const usePostData = () => useContext(PostContext);

export default PostContextProvider;
