"use client";

import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { categories } from "@/lib/data";

interface SoftwareFiltersProps {
  selectedCategory: string;
  onCategoryChangeAction: (category: string) => void;
  sortBy: string;
  onSortChangeAction: (sort: string) => void;
}

export function SoftwareFilters({
  selectedCategory,
  onCategoryChangeAction,
  sortBy,
  onSortChangeAction,
}: SoftwareFiltersProps) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? "default" : "outline"}
            size="sm"
            onClick={() => onCategoryChangeAction(category.id)}
          >
            {category.name}
          </Button>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <Filter className="h-4 w-4 text-muted-foreground" />
        <Select value={sortBy} onValueChange={onSortChangeAction}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="並び順を選択" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="newest">最新順</SelectItem>
            <SelectItem value="oldest">古い順</SelectItem>
            <SelectItem value="downloads">ダウンロード数順</SelectItem>
            <SelectItem value="rating">評価順</SelectItem>
            <SelectItem value="name">名前順</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
