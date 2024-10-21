'use client'

import { useState, useMemo } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search } from "lucide-react"

export interface DataGridItem {
  id: number;
  [key: string]: any;
}

interface DataGridProps {
  data: DataGridItem[];
  fields: {
    key: string;
    label: string;
    render: (item: DataGridItem) => React.ReactNode;
  }[];
  filters?: {
    key: string;
    title: string;
    type: 'text' | 'select' | 'number';
    options?: string[];
  }[];
}

function DataCard({ item, fields }: { item: DataGridItem; fields: DataGridProps['fields'] }) {
  return (
    <Card className="dark:bg-gray-800 text-card-foreground border border-border">
      <CardContent className="p-4">
        {fields.map((field) => (
          <div key={field.key} className="mb-2">
            <p className="text-sm font-semibold">{field.label}:</p>
            <div>{field.render(item)}</div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

export function DataGrid({ data, fields, filters = [] }: DataGridProps) {
  const [filterValues, setFilterValues] = useState<Record<string, string>>(
    Object.fromEntries(filters.map(filter => [filter.key, ""]))
  )

  const handleFilterChange = (key: string, value: string) => {
    setFilterValues((prev) => ({ ...prev, [key]: value }))
  }

  const filteredData = useMemo(() => {
    return data.filter((item) => {
      return filters.every(filter => {
        const filterValue = filterValues[filter.key].toLowerCase()
        if (filterValue === "") return true
        const itemValue = item[filter.key]
        if (Array.isArray(itemValue)) {
          return itemValue.some(v => v.toLowerCase().includes(filterValue))
        }
        return String(itemValue).toLowerCase().includes(filterValue)
      })
    })
  }, [data, filterValues, filters])

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-6">
        {filters.map((filter) => (
          <div key={filter.key} className="relative">
            {filter.type === 'select' ? (
              <Select value={filterValues[filter.key]} onValueChange={(value) => handleFilterChange(filter.key, value)}>
                <SelectTrigger>
                  <SelectValue placeholder={`Filter by ${filter.title}`} />
                </SelectTrigger>
                <SelectContent>
                  {filter.options?.map((option) => (
                    <SelectItem key={option} value={option}>{option}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            ) : (
              <Input
                type={filter.type}
                placeholder={`Filter by ${filter.title}`}
                value={filterValues[filter.key]}
                onChange={(e) => handleFilterChange(filter.key, e.target.value)}
                className="pl-10"
              />
            )}
            {filter.type !== 'select' && <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredData.map((item) => (
          <DataCard key={item.id} item={item} fields={fields} />
        ))}
      </div>
    </div>
  )
}
