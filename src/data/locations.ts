export interface LocationArea {
  name: string;
}

export interface LocalGovernment {
  name: string;
  areas: string[];
}

export const localGovernments: LocalGovernment[] = [
  {
    name: "Egbeda",
    areas: ["Egbeda", "Adegbayi", "Alakia", "Monatan", "Iwo Road"],
  },
  {
    name: "Ibadan North",
    areas: ["Bodija", "Agodi", "Akobo", "Bashorun", "University Road"],
  },
  {
    name: "Ibadan North-East",
    areas: ["Iwo Road", "Oje", "Beere", "Idi Ape"],
  },
  {
    name: "Ibadan North-West",
    areas: ["Onireke", "Dugbe", "Agbeni Jericho", "Eleyele", "Mokola"],
  },
  {
    name: "Ibadan South-East",
    areas: ["Mapo", "Oranyan", "Orita Aperin", "Bode"],
  },
  {
    name: "Ibadan South-West",
    areas: ["Oluyole Estate", "Ring-Road", "Apata", "Oke Ado", "Alesinloye"],
  },
  {
    name: "Akinyele",
    areas: ["Moniya", "Ojoo", "Ojo-aro", "Ajibode", "Ijaiye"],
  },
  {
    name: "Ido",
    areas: ["Ido", "Ijaye/Koloko", "Apete", "Omi-Adio", "Awotan"],
  },
  {
    name: "Lagelu",
    areas: ["Iyana-Off", "Adegbayi", "Akobo", "Olodo", "Olorunda"],
  },
  {
    name: "Oluyole",
    areas: ["Idi Ajunre", "Orita Challenge", "Ayegun", "Muslim", "Aba-nla", "Odo-Ona"],
  },
  {
    name: "Ona Ara",
    areas: ["Akanran", "Ogbere", "Olorunsogo", "Amuloko", "Olomi"],
  },
];
