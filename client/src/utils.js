const domain = "http://localhost:3001";

export const login = async (credential) => {
  const loginUrl = `${domain}/auth/login`;
  const response = await fetch(loginUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credential),
  });
  if (response.status !== 200) {
    throw Error("Fail to log in");
  }
  return await response.json();
};

export const register = async (credential) => {
  const loginUrl = `${domain}/auth/register`;
  const response = await fetch(loginUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credential),
  });
  if (response.status > 300) {
    throw Error("Fail to create");
  }
  return await response.json();
};

export const createPost = async (data, userToken) => {
  /*
      data should contain userId, description, title, forum, picturePath(optional)
      */
  const loginUrl = `${domain}/posts`;
  const response = await fetch(loginUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userToken}`,
    },
    body: JSON.stringify(data),
  });
  if (response.status > 300) {
    throw Error("Fail to create");
  }
  return await response.json();
};

export const getFeedPost = async (top, userToken) => {
  const loginUrl = `${domain}/posts/${top}`;
  const data = { top: top };
  const response = await fetch(loginUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userToken}`,
    },
  });
  if (response.status > 300) {
    throw Error("Fail to create");
  }
  return await response.json();
};

export const likePost = async (postId, userId, userToken) => {
  const loginUrl = `${domain}/posts/${postId}/like`;
  const data = { userId: userId };
  const response = await fetch(loginUrl, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userToken}`,
    },
    body: JSON.stringify(data),
  });
  if (response.status > 300) {
    throw Error("Fail to create");
  }
  console.log("processing");
  return await response.json();
};

export const makeComment = async (postId, comment, userToken) => {
  const loginUrl = `${domain}/posts/${postId}/comment`;
  const data = { comment: comment };
  const response = await fetch(loginUrl, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userToken}`,
    },
    body: JSON.stringify(data),
  });
  if (response.status > 300) {
    throw Error("Fail to create");
  }
  console.log("processing");
  return await response.json();
};

export const getUserPost = async (profileUserId, userToken) => {
  const loginUrl = `${domain}/posts/${profileUserId}/posts`;
  const response = await fetch(loginUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userToken}`,
    },
  });
  if (response.status > 300) {
    throw Error("Fail to create");
  }
  return await response.json();
};

export const getUser = async (profileUserId, userToken) => {
  const loginUrl = `${domain}/users/${profileUserId}`;
  const response = await fetch(loginUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userToken}`,
    },
  });
  if (response.status > 300) {
    throw Error("Fail to create");
  }
  return await response.json();
};
