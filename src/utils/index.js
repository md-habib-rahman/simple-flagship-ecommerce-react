export const getFavourites = () => {
  const favourites = localStorage.getItem("favourites");
  if (favourites) return JSON.parse(favourites);
  return [];
};

export const addFavourite = (phone) => {
  const favourites = getFavourites();
  const isExist = favourites.find((p) => p.id === phone.id);
  if (!isExist) {
    favourites.push(phone);
  }

  //   console.log(phone);
  localStorage.setItem("favourites", JSON.stringify(favourites));
};

export const removeFavourites = (id) => {
  const favourites = getFavourites();
  const remainingFavourites = favourites.filter((phone) => phone.id !== id);
  localStorage.setItem("favourites", JSON.stringify(remainingFavourites));
};
