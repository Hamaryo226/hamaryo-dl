import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Download,
  Calendar,
  Tag,
  Monitor,
  HardDrive,
  Cpu,
  Star,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { software } from "@/lib/data";

interface SoftwarePageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  return software.map((item) => ({
    id: item.id,
  }));
}

export async function generateMetadata({ params }: SoftwarePageProps) {
  const { id } = await params;
  const item = software.find((s) => s.id === id);

  if (!item) {
    return {
      title: "ソフトウェアが見つかりません",
    };
  }

  return {
    title: `${item.name} - Hamaryo Software`,
    description: item.description,
  };
}

export default async function SoftwarePage({ params }: SoftwarePageProps) {
  const { id } = await params;
  const item = software.find((s) => s.id === id);

  if (!item) {
    notFound();
  }

  return (
    <div className="container py-8 px-4 md:px-6">
      {/* ナビゲーション */}
      <div className="mb-6">
        <Button variant="ghost" asChild className="mb-4">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            ホームに戻る
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* メインコンテンツ */}
        <div className="lg:col-span-2 space-y-6">
          {/* ヘッダー */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold tracking-tight">
                  {item.name}
                </h1>
                <p className="text-lg text-muted-foreground mt-2">
                  {item.description}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="text-sm">
                  v{item.version}
                </Badge>
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-current text-yellow-500 mr-1" />
                  <span className="font-medium">{item.rating}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  <Tag className="mr-1 h-3 w-3" />
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Calendar className="mr-1 h-4 w-4" />
                リリース日:{" "}
                {new Date(item.releaseDate).toLocaleDateString("ja-JP")}
              </div>
              <div className="flex items-center">
                <Download className="mr-1 h-4 w-4" />
                {item.downloads.toLocaleString()}回ダウンロード
              </div>
            </div>
          </div>

          {/* 説明 */}
          <Card>
            <CardHeader>
              <CardTitle>詳細説明</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                {item.longDescription}
              </p>
            </CardContent>
          </Card>

          {/* システム要件 */}
          <Card>
            <CardHeader>
              <CardTitle>システム要件</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Monitor className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span className="font-medium">対応OS</span>
                  </div>
                  <ul className="ml-6 space-y-1">
                    {item.requirements.os.map((os, index) => (
                      <li key={index} className="text-sm text-muted-foreground">
                        • {os}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Cpu className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span className="font-medium">メモリ</span>
                  </div>
                  <p className="ml-6 text-sm text-muted-foreground">
                    {item.requirements.memory}
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <HardDrive className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span className="font-medium">ストレージ</span>
                  </div>
                  <p className="ml-6 text-sm text-muted-foreground">
                    {item.requirements.storage}
                  </p>
                </div>
                {item.requirements.other && (
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <ExternalLink className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">その他</span>
                    </div>
                    <ul className="ml-6 space-y-1">
                      {item.requirements.other.map((req, index) => (
                        <li
                          key={index}
                          className="text-sm text-muted-foreground"
                        >
                          • {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* 更新履歴 */}
          <Card>
            <CardHeader>
              <CardTitle>更新履歴</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {item.changelog.map((change, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold">v{change.version}</h3>
                    <span className="text-sm text-muted-foreground">
                      {new Date(change.date).toLocaleDateString("ja-JP")}
                    </span>
                  </div>
                  <ul className="space-y-1 ml-4">
                    {change.changes.map((changeItem, changeIndex) => (
                      <li
                        key={changeIndex}
                        className="text-sm text-muted-foreground"
                      >
                        • {changeItem}
                      </li>
                    ))}
                  </ul>
                  {index < item.changelog.length - 1 && (
                    <Separator className="mt-4" />
                  )}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* サイドバー */}
        <div className="space-y-6">
          {/* ダウンロードカード */}
          <Card>
            <CardHeader>
              <CardTitle>ダウンロード</CardTitle>
              <CardDescription>最新版 v{item.version}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button size="lg" className="w-full" asChild>
                <Link href={item.downloadUrl}>
                  <Download className="mr-2 h-5 w-5" />
                  ダウンロード
                </Link>
              </Button>
              <div className="text-center">
                <p className="text-sm text-muted-foreground">
                  ファイルサイズ: 約{item.requirements.storage}
                </p>
                <p className="text-sm text-muted-foreground">
                  無料でご利用いただけます
                </p>
              </div>
            </CardContent>
          </Card>

          {/* 統計 */}
          <Card>
            <CardHeader>
              <CardTitle>統計情報</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">
                    ダウンロード数
                  </span>
                  <span className="font-medium">
                    {item.downloads.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">評価</span>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-current text-yellow-500 mr-1" />
                    <span className="font-medium">{item.rating}</span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">
                    リリース日
                  </span>
                  <span className="font-medium">
                    {new Date(item.releaseDate).toLocaleDateString("ja-JP")}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* カテゴリ情報 */}
          <Card>
            <CardHeader>
              <CardTitle>カテゴリ</CardTitle>
            </CardHeader>
            <CardContent>
              <Badge variant="secondary" className="text-sm">
                {item.category === "development" && "開発ツール"}
                {item.category === "utilities" && "ユーティリティ"}
                {item.category === "productivity" && "生産性向上"}
                {item.category === "media" && "メディア"}
                {item.category === "games" && "ゲーム"}
              </Badge>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
