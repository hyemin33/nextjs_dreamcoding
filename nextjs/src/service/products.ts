import path from "path";
import { promises as fs } from "fs";
import products from "../data/products.json";

export type Product = {
  id: string;
  name: string;
  price: number;
};

export async function getProducts(): Promise<Product[]> {
  // const filePath = path.join(process.cwd(), "data", "products.json");
  // const data = await fs.readFile(filePath, "utf-8");
  return products;
}

export async function getProduct(id: string): Promise<Product | undefined> {
  const products = await getProducts();
  return products.find((item) => item.id === id);
}
