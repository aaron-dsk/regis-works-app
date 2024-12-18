/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */

"use client"

import { useState, useMemo } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search } from "lucide-react"
import { motion } from "framer-motion"
import { HumanCapitalCard } from "@/components/human-capital-card"

export interface ListViewItem {
  id: number;
  [key: string]: any;
}

interface ColumnDefinition {
  key: string;
  title: string;
  render: (item: ListViewItem) => React.ReactNode;
}

interface ListViewProps {
  title: string;
  data: ListViewItem[];
  columns: ColumnDefinition[];
  filters?: {
    key: string;
    title: string;
    type: 'text' | 'select' | 'number';
    options?: string[];
  }[];
}

export function ListView({ data, columns, filters = [] }: ListViewProps) {
  const [sortColumn, setSortColumn] = useState<string>(columns[0].key)
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc")
  const [filterValues, setFilterValues] = useState<Record<string, string>>(
    Object.fromEntries(filters.map(filter => [filter.key, ""]))
  )
  const [selectedItem, setSelectedItem] = useState<ListViewItem | null>(null);
  const [isCardOpen, setIsCardOpen] = useState(false);

  const handleSort = (column: string) => {
    if (column === sortColumn) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortColumn(column)
      setSortDirection("asc")
    }
  }

  const filteredAndSortedData = useMemo(() => {
    return data
      .filter((item) => {
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
      .sort((a, b) => {
        const aValue = a[sortColumn]
        const bValue = b[sortColumn]
        if (Array.isArray(aValue) && Array.isArray(bValue)) {
          const aString = aValue.join(", ")
          const bString = bValue.join(", ")
          return sortDirection === "asc" ? aString.localeCompare(bString) : bString.localeCompare(aString)
        }
        if (typeof aValue === 'number' && typeof bValue === 'number') {
          return sortDirection === "asc" ? aValue - bValue : bValue - aValue
        }
        return sortDirection === "asc" 
          ? String(aValue).localeCompare(String(bValue)) 
          : String(bValue).localeCompare(String(aValue))
      })
  }, [data, sortColumn, sortDirection, filterValues, filters])

  const handleFilterChange = (key: string, value: string) => {
    setFilterValues((prev) => ({ ...prev, [key]: value }))
  }

  const getColumnWidth = (key: string) => {
    switch (key) {
      case 'name': return '150px';
      case 'bio': return '150px';
      case 'tools': return '180px';
      case 'skills': return '180px';
      case 'relevantExperience': return '150px';
      default: return 'auto';
    }
  };

  const handleRowClick = (item: ListViewItem) => {
    setSelectedItem(item);
    setIsCardOpen(true);
  };

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
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              {columns.map((column) => (
                <TableHead 
                  key={column.key} 
                  className="cursor-pointer font-bold"
                  onClick={() => handleSort(column.key)}
                  style={{ width: getColumnWidth(column.key) }}
                >
                  {column.title}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredAndSortedData.map((item, index) => (
              <motion.tr
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="w-full cursor-pointer hover:bg-gray-50"
                onClick={() => handleRowClick(item)}
              >
                {columns.map((column) => (
                  <TableCell 
                    key={column.key} 
                    style={{ width: getColumnWidth(column.key) }}
                    className="align-middle"
                  >
                    {column.render(item)}
                  </TableCell>
                ))}
              </motion.tr>
            ))}
          </TableBody>
        </Table>
      </div>

      {selectedItem && (
        <HumanCapitalCard
          isOpen={isCardOpen}
          onClose={() => setIsCardOpen(false)}
          data={{
            name: selectedItem.name,
            avatar : selectedItem.avatar,
            location: selectedItem.location,
            bio: selectedItem.bio,
            tools: selectedItem.tools,
            skills: selectedItem.skills,
            relevantExperience: selectedItem.relevantExperience
          }}
        />
      )}
    </div>
  )
}
