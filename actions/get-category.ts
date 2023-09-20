import { Category } from "@/types";

export const getCategory = async (id: string): Promise<Category> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/categories/${id}`
  );

  return res.json();
};
