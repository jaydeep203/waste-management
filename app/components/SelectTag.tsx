
import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface SelectTagProps{
    optionsType: string[];
    title: string;
}

export function SelectDemo({
    optionsType,
    title,
}:SelectTagProps) {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={title} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{title}</SelectLabel>
          {
            optionsType.map((option)=>(
                <SelectItem key={option} value={option}>{option}</SelectItem>
            ))
          }
          
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
