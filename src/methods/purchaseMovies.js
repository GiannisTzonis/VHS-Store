import apiRoutes from "../constants/apiRoutes";

const purchaseMovies = async (jsonData) => {
  await fetch(apiRoutes.purchaseUrl, {
    method: "POST",
    headers: {
      "X-PublicKey": "txmovies",
      "X-Checksum": "830c7cd4a70be6540a4898441ca02951",
    },
    body: JSON.stringify(jsonData),
  });
};

export default purchaseMovies;
