import axios from "axios";

async function getUserLocation() {
  const response = await axios.get("https://geolocation-db.com/json/");
  return response;
}

async function writeUserLocation(data) {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  };

  const response = await axios.post(
    "https://script.google.com/macros/s/AKfycbyVQqxxwKSmKKDhSCWx3jBWNvgsk-XD_93nGWSyXZlB-mvMOAXIStNq-uKeYGm20mSXrw/exec",
    JSON.stringify(data),
    headers
  );

  return response;
}
export { getUserLocation, writeUserLocation };
