import { badgeVariants } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TechnicianProfileProps } from "@/lib/types";
import { Badge, MessageSquareIcon } from "lucide-react";

export function TechnicianReviews({ technician }: TechnicianProfileProps) {
    const totalReviews = technician.totalReviews
    const completedJobs = technician.completedJobs
    return (
        <div className="flex flex-wrap gap-2">
            
            {
                technician.reviews?.map(review => (
                    <div key={review.id} className="space-y-2">

                        <Card className="gap-4">
                            <CardHeader>
                                <div className="flex flex-wrap items-center gap-1.5">
                                    {/* <Badge>Ovarall Rating {technician.rating}</Badge> */}
                                    <Badge>{review.rating}</Badge>
                                </div>
                                <CardTitle className="text-lg">{review.comment}</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <p className="line-clamp-4 whitespace-pre-line text-muted-foreground">
                                    Total Reviews: {totalReviews}
                                </p>
                                <div className="flex items-center justify-between text-xs text-muted-foreground">
    
                                    <span>
                                        <MessageSquareIcon className="size-3.5" />
                                        Total completed Jobs: {completedJobs}
                                    </span>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                ))
            }
        </div>
    );
}