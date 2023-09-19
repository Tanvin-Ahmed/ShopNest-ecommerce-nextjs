import { Billboard } from "@/types";

export const getBillboard = async (id: string): Promise<Billboard> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/billboards/${id}`
  );

  return res.json();
};
