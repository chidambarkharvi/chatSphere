import axios from "../Utils/apiUtils";

const createPostServices = async (data) =>
  await axios.post(
    `createpost`,
    {
      content: data.content,
      image: data.image,
    },
    {
      headers: {
        authorization: `${localStorage.getItem("token")}`,
      },
    }
  );

const getAllPostServices = async () =>
  await axios.get(`getallpost`, {
    headers: {
      authorization: `${localStorage.getItem("token")}`,
    },
  });

//edit post services

const editPostServices = async (id, editData) =>
  await axios.patch(
    `editpost/${id}`,
    {
      content: editData.content,
      image: editData.img,
    },
    {
      headers: {
        authorization: `${localStorage.getItem("token")}`,
      },
    }
  );

//like  post services

const likePostServices = async (id) =>
  await axios.patch(
    `like/${id}`,
    {},
    {
      headers: {
        authorization: `${localStorage.getItem("token")}`,
      },
    }
  );

//dislike post services

const disLikePostServices = async (id) =>
  await axios.patch(
    `dislike/${id}`,
    {},
    {
      headers: {
        authorization: `${localStorage.getItem("token")}`,
      },
    }
  );

//commetn post services

const commentPostServices = async (id, comment) =>
  await axios.patch(
    `createcommnet/${id}`,
    {
      comment: comment,
    },
    {
      headers: {
        authorization: `${localStorage.getItem("token")}`,
      },
    }
  );

//delet Commnet Post Services

const deleteCommentPostServices = async (id, commentId) =>
  await axios.patch(
    `deletecommnet/${id}`,
    {
      commentId: commentId,
    },
    {
      headers: {
        authorization: `${localStorage.getItem("token")}`,
      },
    }
  );

//delete post services

const deletePostServices = async (id) =>
  await axios.delete(`deletepost/${id}`, {
    headers: {
      authorization: `${localStorage.getItem("token")}`,
    },
  });

const getPostByIdServices = async (id) =>
  await axios.get(`getpostbyuser/${id}`, {
    headers: {
      authorization: `${localStorage.getItem("token")}`,
    },
  });

const bookmarkPostServices = async (id) =>
  await axios.post(
    `addtobookmark/${id}`,
    {},
    {
      headers: {
        authorization: `${localStorage.getItem("token")}`,
      },
    }
  );

const getBookmarkPostServices = async () =>
  await axios.get(`getbookmarkedpost`, {
    headers: {
      authorization: `${localStorage.getItem("token")}`,
    },
  });

const removoBookmarkPostServices = async (id) =>
  await axios.delete(`deletebookmarkpost/${id}`, {
    headers: {
      authorization: `${localStorage.getItem("token")}`,
    },
  });

export {
  createPostServices,
  getAllPostServices,
  deletePostServices,
  editPostServices,
  likePostServices,
  commentPostServices,
  deleteCommentPostServices,
  getPostByIdServices,
  bookmarkPostServices,
  getBookmarkPostServices,
  removoBookmarkPostServices,
  disLikePostServices,
};
