import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SoftwareNotFound() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[60vh] text-center space-y-4">
      <h1 className="text-6xl font-bold text-muted-foreground">404</h1>
      <h2 className="text-2xl font-semibold">ソフトウェアが見つかりません</h2>
      <p className="text-muted-foreground max-w-md">
        指定されたソフトウェアは存在しないか、削除された可能性があります。
      </p>
      <div className="flex gap-4">
        <Button asChild>
          <Link href="/">ホームに戻る</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/software">ソフトウェア一覧</Link>
        </Button>
      </div>
    </div>
  );
}
