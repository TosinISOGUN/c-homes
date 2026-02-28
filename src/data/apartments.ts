export type ApartmentType = "Single Room" | "Self Contain" | "Room & Parlour" | "Mini Flat" | "Flat";

export interface Apartment {
  id: string;
  title: string;
  type: ApartmentType;
  localGovernment: string;
  area: string;
  price: string;
  description: string;
  image: string;
}

const placeholderImages = [
  "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=80",
  "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&q=80",
  "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80",
  "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600&q=80",
  "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&q=80",
  "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=600&q=80",
  "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=600&q=80",
  "https://images.unsplash.com/photo-1586105251261-72a756497a11?w=600&q=80",
];

export const apartments: Apartment[] = [
  {
    id: "1",
    title: "Cozy Single Room at Bodija",
    type: "Single Room",
    localGovernment: "Ibadan North",
    area: "Bodija",
    price: "₦80,000/yr",
    description: "A clean, spacious single room in a serene environment. Close to market and transport.",
    image: placeholderImages[0],
  },
  {
    id: "2",
    title: "Self Contain near University Road",
    type: "Self Contain",
    localGovernment: "Ibadan North",
    area: "University Road",
    price: "₦150,000/yr",
    description: "Well-finished self-contained apartment, perfect for corps members. Constant water supply.",
    image: placeholderImages[1],
  },
  {
    id: "3",
    title: "Affordable Flat in Apata",
    type: "Flat",
    localGovernment: "Ibadan South-West",
    area: "Apata",
    price: "₦250,000/yr",
    description: "Spacious 2-bedroom flat with modern amenities. Gated compound with security.",
    image: placeholderImages[2],
  },
  {
    id: "4",
    title: "Room & Parlour at Moniya",
    type: "Room & Parlour",
    localGovernment: "Akinyele",
    area: "Moniya",
    price: "₦120,000/yr",
    description: "Comfortable room and parlour, tiled floors. Great for corps members posted to Moniya.",
    image: placeholderImages[3],
  },
  {
    id: "5",
    title: "Mini Flat at Ojoo",
    type: "Mini Flat",
    localGovernment: "Akinyele",
    area: "Ojoo",
    price: "₦180,000/yr",
    description: "Modern mini flat with kitchen and bathroom. Quiet neighborhood, easy transport access.",
    image: placeholderImages[4],
  },
  {
    id: "6",
    title: "Single Room Self Contain in Mokola",
    type: "Self Contain",
    localGovernment: "Ibadan North-West",
    area: "Mokola",
    price: "₦130,000/yr",
    description: "Newly renovated self-contain in the heart of Mokola. Walking distance to major spots.",
    image: placeholderImages[5],
  },
  {
    id: "7",
    title: "Budget Room at Apete",
    type: "Single Room",
    localGovernment: "Ido",
    area: "Apete",
    price: "₦60,000/yr",
    description: "Very affordable single room ideal for corpers on a tight budget. Shared facilities.",
    image: placeholderImages[6],
  },
  {
    id: "8",
    title: "Self Contain at Oluyole Estate",
    type: "Self Contain",
    localGovernment: "Ibadan South-West",
    area: "Oluyole Estate",
    price: "₦200,000/yr",
    description: "Premium self-contained in Oluyole Estate. 24hr security, good road network.",
    image: placeholderImages[7],
  },
  {
    id: "9",
    title: "Room & Parlour at Egbeda",
    type: "Room & Parlour",
    localGovernment: "Egbeda",
    area: "Egbeda",
    price: "₦100,000/yr",
    description: "Spacious room and parlour in a friendly neighborhood. Market nearby.",
    image: placeholderImages[0],
  },
  {
    id: "10",
    title: "Mini Flat at Ring Road",
    type: "Mini Flat",
    localGovernment: "Ibadan South-West",
    area: "Ring-Road",
    price: "₦220,000/yr",
    description: "Well-located mini flat at Ring Road. Close to banks and offices.",
    image: placeholderImages[1],
  },
  {
    id: "11",
    title: "Single Room at Akobo",
    type: "Single Room",
    localGovernment: "Ibadan North",
    area: "Akobo",
    price: "₦70,000/yr",
    description: "Affordable and comfortable single room at Akobo. Peaceful environment.",
    image: placeholderImages[2],
  },
  {
    id: "12",
    title: "Flat at Orita Challenge",
    type: "Flat",
    localGovernment: "Oluyole",
    area: "Orita Challenge",
    price: "₦280,000/yr",
    description: "3-bedroom flat in a secure estate. Suitable for sharing among corps members.",
    image: placeholderImages[3],
  },
];
