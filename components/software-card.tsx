import Link from "next/link";
import { Download, Star, Calendar } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Software } from "@/lib/types";

interface SoftwareCardProps {
  software: Software;
}

export function SoftwareCard({ software }: SoftwareCardProps) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <CardTitle className="line-clamp-1 text-base sm:text-lg">
              {software.name}
            </CardTitle>
            <CardDescription className="line-clamp-2 mt-1 text-sm">
              {software.description}
            </CardDescription>
          </div>
          <Badge variant="secondary" className="shrink-0 text-xs">
            v{software.version}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="flex-1 pt-0">
        <div className="space-y-3">
          <div className="flex items-center text-xs sm:text-sm text-muted-foreground">
            <Calendar className="mr-1 h-3 w-3 shrink-0" />
            <span className="truncate">
              {new Date(software.releaseDate).toLocaleDateString("ja-JP")}
            </span>
          </div>
          <div className="flex items-center text-xs sm:text-sm text-muted-foreground">
            <Star className="mr-1 h-3 w-3 shrink-0 fill-current text-yellow-500" />
            <span className="truncate">
              {software.rating} ({software.downloads.toLocaleString()}
              DL)
            </span>
          </div>
          <div className="flex flex-wrap gap-1">
            {software.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
            {software.tags.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{software.tags.length - 3}
              </Badge>
            )}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex gap-2 pt-3">
        <Button asChild className="flex-1 text-xs sm:text-sm h-8 sm:h-9">
          <Link href={`/software/${software.id}`}>詳細を見る</Link>
        </Button>
        <Button
          variant="outline"
          size="icon"
          asChild
          className="shrink-0 h-8 w-8 sm:h-9 sm:w-9"
        >
          <Link href={software.downloadUrl}>
            <Download className="h-3 w-3 sm:h-4 sm:w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
