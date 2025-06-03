"use client";

import { useState } from "react";
import { SoftwareCard } from "@/components/software-card";
import { SoftwareFilters } from "@/components/software-filters";
import { software } from "@/lib/data";

export default function SoftwarePage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("newest");

  // フィルタリングとソート
  const filteredSoftware = software
    .filter((item) => {
      if (selectedCategory !== "all" && item.category !== selectedCategory) {
        return false;
      }
      return true;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return (
            new Date(b.releaseDate).getTime() -
            new Date(a.releaseDate).getTime()
          );
        case "oldest":
          return (
            new Date(a.releaseDate).getTime() -
            new Date(b.releaseDate).getTime()
          );
        case "downloads":
          return b.downloads - a.downloads;
        case "rating":
          return b.rating - a.rating;
        case "name":
          return a.name.localeCompare(b.name, "ja");
        default:
          return 0;
      }
    });
  return (
    <div className="container mx-auto max-w-7xl py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-8">
      <div className="space-y-6 sm:space-y-8">
        <div className="space-y-2 sm:space-y-3 text-center sm:text-left">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
            ソフトウェア一覧
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground">
            すべてのソフトウェアをカテゴリ別に閲覧できます
          </p>
        </div>
        <div className="max-w-6xl mx-auto">
          <SoftwareFilters
            selectedCategory={selectedCategory}
            onCategoryChangeAction={setSelectedCategory}
            sortBy={sortBy}
            onSortChangeAction={setSortBy}
          />
        </div>
        {filteredSoftware.length === 0 ? (
          <div className="text-center py-12 lg:py-16">
            <p className="text-sm sm:text-base text-muted-foreground">
              条件に一致するソフトウェアが見つかりませんでした。
            </p>
          </div>
        ) : (
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredSoftware.map((item) => (
                <SoftwareCard key={item.id} software={item} />
              ))}
            </div>
          </div>
        )}
        <div className="text-center py-6 sm:py-8 text-xs sm:text-sm text-muted-foreground">
          {filteredSoftware.length}件のソフトウェアが見つかりました
        </div>
      </div>
    </div>
  );
}
