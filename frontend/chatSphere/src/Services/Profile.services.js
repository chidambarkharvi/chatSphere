import axios from "../Utils/apiUtils";

const profileService = async (Token) =>
  await axios.get("profile", {
    headers: {
      authorization: `${Token}`,
    },
  });

const profileUpdateService = async (Token, data) =>
  await axios.patch(
    "editprofile",
    {
      firstName: data?.firstName,
      lastName: data?.lastName,
      bio: data?.bio,
      cover: data?.cover,
      avatar: data?.avatar,
    },
    {
      headers: {
        authorization: `${Token}`,
      },
    }
  );

const getProfileByIdService = async (id) =>
  await axios.get(`getprofilebyid/${id}`, {
    headers: {
      authorization: `${localStorage.getItem("token")}`,
    },
  });

const followNewUserService = async (id) =>
  await axios.post(
    `followuser/${id}`,
    {},
    {
      headers: {
        authorization: `${localStorage.getItem("token")}`,
      },
    }
  );

const unfollowUserService = async (id) =>
  await axios.post(
    `unfolloweUser/${id}`,
    {},
    {
      headers: {
        authorization: `${localStorage.getItem("token")}`,
      },
    }
  );

const getFriendsDetailsService = async () =>
  await axios.get(`getfriendsdetails`, {
    headers: {
      authorization: `${localStorage.getItem("token")}`,
    },
  });

const userToBeFollowedService = async () =>
  await axios.get(`userToFollow`, {
    headers: {
      authorization: `${localStorage.getItem("token")}`,
    },
  });

const deleteAccountService = async () =>
  await axios.delete(`delet-account`, {
    headers: {
      authorization: `${localStorage.getItem("token")}`,
    },
  });

export {
  profileService,
  profileUpdateService,
  getProfileByIdService,
  followNewUserService,
  getFriendsDetailsService,
  userToBeFollowedService,
  unfollowUserService,
  deleteAccountService,
};
