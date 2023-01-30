async function getDataSupply() {
  try {
    const supplyResponse = await fetch(
      "https://23.javascript.pages.academy/keksobooking/data"
    );
    return supplyResponse.json();
  } catch (error) {
    console.error("Произошла ошибка!", error.message);
  }
}
export default getDataSupply;
