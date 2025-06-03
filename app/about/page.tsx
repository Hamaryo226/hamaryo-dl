import { Download, Code, Heart, Users } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-7xl py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
        {/* ヘッダー */}
        <div className="text-center space-y-3 sm:space-y-4">
          <div className="flex justify-center">
            <Download className="h-12 w-12 sm:h-16 sm:w-16 text-primary" />
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
            Hamaryo Software について
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto px-4 sm:px-0">
            高品質なソフトウェアを無料で提供する開発者サイトです。
            使いやすく、実用的なツールをお届けします。
          </p>
        </div>

        {/* ミッション */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Heart className="mr-2 h-5 w-5 text-red-500" />
              私たちのミッション
            </CardTitle>
          </CardHeader>{" "}
          <CardContent className="space-y-4">
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              私たちは、日常的に使える実用的なソフトウェアを開発し、無料で提供することで、
              より多くの人々の作業効率向上と生活の質の向上に貢献したいと考えています。
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              すべてのソフトウェアは、ユーザビリティとパフォーマンスを重視して設計されており、
              初心者から上級者まで、幅広いユーザーに利用していただけます。
            </p>
          </CardContent>
        </Card>

        {/* 特徴 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Code className="mr-2 h-5 w-5 text-blue-500" />
                高品質
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                最新の技術と開発手法を用いて、安定性とパフォーマンスを重視したソフトウェアを開発しています。
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Download className="mr-2 h-5 w-5 text-green-500" />
                完全無料
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                すべてのソフトウェアは完全に無料で提供しています。隠れた費用や制限はありません。
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="mr-2 h-5 w-5 text-purple-500" />
                ユーザー中心
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                ユーザーのフィードバックを大切にし、継続的な改善と新機能の追加を行っています。
              </p>
            </CardContent>
          </Card>
        </div>

        {/* 開発者情報 */}
        <Card>
          <CardHeader>
            <CardTitle>開発者について</CardTitle>
            <CardDescription>Hamaryo Software の開発チーム</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              私たちは、ソフトウェア開発に情熱を注ぐ開発者のチームです。
              長年の経験を活かして、実用的で使いやすいソフトウェアの開発に取り組んでいます。
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Web開発</Badge>
              <Badge variant="secondary">デスクトップアプリ</Badge>
              <Badge variant="secondary">ユーティリティツール</Badge>
              <Badge variant="secondary">ゲーム開発</Badge>
              <Badge variant="secondary">UI/UXデザイン</Badge>
            </div>
          </CardContent>
        </Card>

        {/* 技術スタック */}
        <Card>
          <CardHeader>
            <CardTitle>使用技術</CardTitle>
            <CardDescription>私たちが使用している主な技術</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center space-y-2">
                <div className="text-2xl">⚛️</div>
                <p className="text-sm font-medium">React</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-2xl">📘</div>
                <p className="text-sm font-medium">TypeScript</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-2xl">🟩</div>
                <p className="text-sm font-medium">Node.js</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-2xl">🦀</div>
                <p className="text-sm font-medium">Rust</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-2xl">🐍</div>
                <p className="text-sm font-medium">Python</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-2xl">🎯</div>
                <p className="text-sm font-medium">C#</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-2xl">🐧</div>
                <p className="text-sm font-medium">Linux</p>
              </div>
              <div className="text-center space-y-2">
                <div className="text-2xl">☁️</div>
                <p className="text-sm font-medium">Cloud</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* お問い合わせ */}
        <Card>
          <CardHeader>
            <CardTitle>お問い合わせ</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              ご質問、バグ報告、機能リクエストなどがございましたら、お気軽にお問い合わせください。
            </p>
            <div className="space-y-2">
              <p className="text-sm">
                <strong>GitHub:</strong> github.com/hamaryo
              </p>
              <p className="text-sm">
                <strong>Email:</strong> contact@hamaryo-software.com
              </p>
              <p className="text-sm">
                <strong>Twitter:</strong> @hamaryo_dev
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
