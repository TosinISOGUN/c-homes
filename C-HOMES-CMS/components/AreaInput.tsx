import { useEffect, useState } from 'react'
import { Select, Box } from '@sanity/ui'
import { StringInputProps, set, unset, useFormValue } from 'sanity'

const localGovernments = [
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

export function AreaInput(props: StringInputProps) {
  const { value, onChange } = props
  const localGovernment = useFormValue([`localGovernment`]) as string | undefined

  const [availableAreas, setAvailableAreas] = useState<string[]>([])

  useEffect(() => {
    if (localGovernment) {
      const selectedLG = localGovernments.find((lg) => lg.name === localGovernment)
      if (selectedLG) {
        setAvailableAreas(selectedLG.areas)
      } else {
        setAvailableAreas([])
      }
    } else {
      setAvailableAreas([])
    }
  }, [localGovernment])

  // Clear the area value if the selected local government changes and the current area isn't in the new list
  useEffect(() => {
    if (value && availableAreas.length > 0 && !availableAreas.includes(value)) {
      onChange(unset())
    }
  }, [availableAreas, value, onChange])

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const nextValue = e.currentTarget.value
    onChange(nextValue ? set(nextValue) : unset())
  }

  return (
    <Box>
      <Select
        value={value || ''}
        onChange={handleChange}
        disabled={!localGovernment || availableAreas.length === 0}
      >
        <option value="" disabled hidden>
          {localGovernment ? 'Select Area...' : 'Select Local Government First'}
        </option>
        {availableAreas.map((area) => (
          <option key={area} value={area}>
            {area}
          </option>
        ))}
      </Select>
    </Box>
  )
}
