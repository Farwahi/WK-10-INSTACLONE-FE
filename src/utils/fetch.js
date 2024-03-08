export const signupFetch = async (username, password, email) => {
  const res = await fetch("http://localhost:5001/users/signup", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      email: email,
      password: password,
    }),
  });

  const data = await res.json();
  console.log("data in fetch signup", data);
  return data;
};

//========================================================================================

export const loginFetch = async (username, password) => {
  const res = await fetch("http://localhost:5001/users/login", {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });

  const data = await res.json();

  

  return data;
};
//========================================================================

export const fetchImages = async () => {
  try {
    const API_KEY = 'K38ZsAJq7_Uld7qiFkSoE7Olrx3HRZoVNLNWxkDMiw0';
    const API_URL = `https://api.unsplash.com/photos/?client_id=${API_KEY}`;

    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Failed to fetch images");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching images:", error);
    throw error;
  }
};
