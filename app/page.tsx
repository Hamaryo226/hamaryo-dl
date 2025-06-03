"use client";

import { useState } from "react";
import { Search, Download, Star, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SoftwareCard } from "@/components/software-card";
import { SoftwareFilters } from "@/components/software-filters";
import { software, categories } from "@/lib/data";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("newest");
  const [searchQuery, setSearchQuery] = useState("");

  // フィルタリングとソート
  const filteredSoftware = software
    .filter((item) => {
      if (selectedCategory !== "all" && item.category !== selectedCategory) {
        return false;
      }
      if (searchQuery) {
        return (
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.tags.some((tag) =>
            tag.toLowerCase().includes(searchQuery.toLowerCase())
          )
        );
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

  const popularSoftware = software
    .sort((a, b) => b.downloads - a.downloads)
    .slice(0, 3);

  const recentSoftware = software
    .sort(
      (a, b) =>
        new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime()
    )
    .slice(0, 3);

  const totalDownloads = software.reduce(
    (sum, item) => sum + item.downloads,
    0
  );

  return (
    <div className="flex flex-col min-h-screen">
      {/* ヒーローセクション */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-32 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-6 sm:space-y-8 text-center">
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl/none">
                個人開発ソフトウェア
                <br className="hidden sm:inline" />
                ダウンロードサイト
              </h1>
              <p className="mx-auto max-w-[600px] px-4 sm:px-0 text-sm sm:text-base md:text-lg lg:text-xl text-gray-500 dark:text-gray-400">
                日々開発している便利なツールやアプリケーションを公開しています。
                お役に立てれば幸いです。
              </p>
            </div>
            <div className="w-full max-w-xs sm:max-w-sm lg:max-w-md space-y-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="ソフトウェアを検索..."
                  className="pl-8 h-10 sm:h-11"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 統計セクション */}
      <section className="py-8 sm:py-10 lg:py-12 border-b">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-xs sm:text-sm font-medium">
                  総ソフトウェア数
                </CardTitle>
                <Download className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-xl sm:text-2xl font-bold">
                  {software.length}
                </div>
                <p className="text-xs text-muted-foreground">
                  カテゴリ別に分類
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-xs sm:text-sm font-medium">
                  総ダウンロード数
                </CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-xl sm:text-2xl font-bold">
                  {totalDownloads.toLocaleString()}
                </div>
                <p className="text-xs text-muted-foreground">
                  累計ダウンロード数
                </p>
              </CardContent>
            </Card>
            <Card className="sm:col-span-2 lg:col-span-1">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-xs sm:text-sm font-medium">
                  平均評価
                </CardTitle>
                <Star className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-xl sm:text-2xl font-bold">
                  {(
                    software.reduce((sum, item) => sum + item.rating, 0) /
                    software.length
                  ).toFixed(1)}
                </div>
                <p className="text-xs text-muted-foreground">5段階評価</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 人気ソフトウェア */}
      <section className="py-8 sm:py-10 lg:py-12">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-6 lg:space-y-8">
            <div className="space-y-2 text-center">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl lg:text-4xl">
                人気ソフトウェア
              </h2>
              <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">
                最もダウンロードされているソフトウェア
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
              {popularSoftware.map((item) => (
                <SoftwareCard key={item.id} software={item} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 最新リリース */}
      <section className="py-8 sm:py-10 lg:py-12 bg-muted/50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-6 lg:space-y-8">
            <div className="space-y-2 text-center">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl lg:text-4xl">
                最新リリース
              </h2>
              <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">
                最近リリースされたソフトウェア
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
              {recentSoftware.map((item) => (
                <SoftwareCard key={item.id} software={item} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* すべてのソフトウェア */}
      <section className="py-8 sm:py-10 lg:py-12">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-2 text-center">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl lg:text-4xl">
                すべてのソフトウェア
              </h2>
              <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">
                カテゴリ別に閲覧・検索できます
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
              <div className="text-center py-8 sm:py-12">
                <p className="text-sm sm:text-base text-muted-foreground">
                  条件に一致するソフトウェアが見つかりませんでした。
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                {filteredSoftware.map((item) => (
                  <SoftwareCard key={item.id} software={item} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="border-t bg-muted/50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center space-x-2">
                <Download className="h-5 w-5 sm:h-6 sm:w-6" />
                <span className="text-sm sm:text-base font-bold">
                  Hamaryo Software
                </span>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground">
                高品質なソフトウェアを無料で提供する開発者サイトです。
              </p>
            </div>
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-sm font-semibold">カテゴリ</h3>
              <ul className="space-y-2 text-sm">
                {categories.slice(1).map((category) => (
                  <li key={category.id}>
                    <Button
                      variant="link"
                      className="h-auto p-0 text-xs sm:text-sm text-muted-foreground hover:text-foreground"
                      onClick={() => setSelectedCategory(category.id)}
                    >
                      {category.name}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3 sm:space-y-4 sm:col-span-2 lg:col-span-1">
              <h3 className="text-sm font-semibold">リンク</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Button
                    variant="link"
                    className="h-auto p-0 text-xs sm:text-sm text-muted-foreground hover:text-foreground"
                  >
                    GitHub
                  </Button>
                </li>
                <li>
                  <Button
                    variant="link"
                    className="h-auto p-0 text-xs sm:text-sm text-muted-foreground hover:text-foreground"
                  >
                    お問い合わせ
                  </Button>
                </li>
                <li>
                  <Button
                    variant="link"
                    className="h-auto p-0 text-xs sm:text-sm text-muted-foreground hover:text-foreground"
                  >
                    プライバシーポリシー
                  </Button>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-6 sm:mt-8 border-t pt-6 sm:pt-8 text-center text-xs sm:text-sm text-muted-foreground">
            © 2024 Hamaryo Software. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
