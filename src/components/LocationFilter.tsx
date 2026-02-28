import { localGovernments } from "@/data/locations";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface LocationFilterProps {
  selectedLG: string;
  selectedArea: string;
  onLGChange: (lg: string) => void;
  onAreaChange: (area: string) => void;
}

const LocationFilter = ({ selectedLG, selectedArea, onLGChange, onAreaChange }: LocationFilterProps) => {
  const areas = selectedLG
    ? localGovernments.find((lg) => lg.name === selectedLG)?.areas ?? []
    : [];

  return (
    <div className="flex flex-col sm:flex-row gap-3 w-full max-w-xl">
      <Select
        value={selectedLG}
        onValueChange={(v) => {
          onLGChange(v);
          onAreaChange("");
        }}
      >
        <SelectTrigger className="w-full sm:w-64 bg-card">
          <SelectValue placeholder="Select Local Government" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Local Governments</SelectItem>
          {localGovernments.map((lg) => (
            <SelectItem key={lg.name} value={lg.name}>{lg.name}</SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select value={selectedArea} onValueChange={onAreaChange} disabled={!selectedLG || selectedLG === "all"}>
        <SelectTrigger className="w-full sm:w-52 bg-card">
          <SelectValue placeholder="Select Area" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Areas</SelectItem>
          {areas.map((a) => (
            <SelectItem key={a} value={a}>{a}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default LocationFilter;
