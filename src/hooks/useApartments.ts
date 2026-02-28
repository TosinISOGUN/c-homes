import { useQuery } from "@tanstack/react-query";
import { client, urlFor } from "@/lib/sanity";
import { Apartment } from "@/data/apartments";

export const fetchApartments = async (): Promise<Apartment[]> => {
  const query = `*[_type == "apartment"] | order(_createdAt desc) {
    _id,
    title,
    type,
    localGovernment,
    area,
    price,
    description,
    image
  }`;

  const data = await client.fetch(query);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return data.map((item: any) => ({
    id: item._id,
    title: item.title,
    type: item.type,
    localGovernment: item.localGovernment,
    area: item.area,
    price: item.price,
    description: item.description,
    image: item.image ? urlFor(item.image).url() : "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=80",
  }));
};

export const useApartments = () => {
  return useQuery({
    queryKey: ["apartments"],
    queryFn: fetchApartments,
  });
};
