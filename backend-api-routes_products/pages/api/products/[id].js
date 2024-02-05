import { getProductById } from "/services/productServices.js";

export default function handler(request, response) {
  if (request.method === "GET") {
    const { id } = Number(request.query.id);
    response.status(200).json(getProductById(id));
  }
}
