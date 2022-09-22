async function getDataSupply() {
  try {
    const supplyResponse = await fetch(
      "https://23.javascript.pages.academy/keksobooking/data"
    );
    return supplyResponse.json();
  } catch (err) {
    console.error("Произошла ошибка!", err);
  }
}
export default getDataSupply;
