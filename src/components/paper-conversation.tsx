"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { MessageSquare, ThumbsUp, LinkIcon } from 'lucide-react'

interface Comment {
  id: number
  user: string
  text: string
  daysAgo: number
  upvotes: number
}

const initialComments: Comment[] = [
  {
    id: 1,
    user: "Maulik Dhandha",
    text: `Thank you for your post Carlos Toro. We currently do have an email - support@researchhub.foundation where you can reach out our team for any technical concerns.

    You are also welcome to engage in intellectual conversations with others in the community on the Researchhub platform itself or General section of our discord. You are also welcome to join our community calls on Mondays at 9 AM PST. In addition we also have orientation sessions with our editorial team every Tuesdays and Fridays at 11 AM PST.`,
    daysAgo: 3,
    upvotes: 4,
  },
  {
    id: 2,
    user: "Redenthor de Leon Lubuguin",
    text: "sounds good and this is a must for the safety",
    daysAgo: 1,
    upvotes: 1,
  },
]

export default function PaperConversation() {
  const [comments, setComments] = useState<Comment[]>(initialComments)
  const [newComment, setNewComment] = useState("")

  const handlePost = () => {
    if (newComment.trim()) {
      const newCommentObj: Comment = {
        id: comments.length + 1,
        user: "New User",
        text: newComment,
        daysAgo: 0,
        upvotes: 0,
      }
      setComments([newCommentObj, ...comments])
      setNewComment("")
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card className="mb-6">
        <CardContent className="pt-6">
          <Textarea
            placeholder="Discuss this paper with the community"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="mb-4 p-4"
          />
          <Button onClick={handlePost} className="w-full">
            Post
          </Button>
        </CardContent>
      </Card>
      <div className="space-y-6">
        {comments.map((comment) => (
          <Card key={comment.id}>
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="font-semibold">{comment.user} commented</p>
                  <p className="text-sm text-muted-foreground">{comment.daysAgo} days ago</p>
                </div>
                <div className="flex items-center space-x-2">
                  <ThumbsUp className="w-4 h-4" />
                  <span>{comment.upvotes}</span>
                  <LinkIcon className="w-4 h-4" />
                </div>
              </div>
              <p className="mt-4 mb-4">{comment.text}</p>
              <div className="flex space-x-4 mt-4 text-sm text-muted-foreground">
                <button className="flex items-center space-x-1">
                  <MessageSquare className="w-4 h-4" />
                  <span>Reply</span>
                </button>
                <button className="flex items-center space-x-1">
                  <ThumbsUp className="w-4 h-4" />
                  <span>Tip</span>
                </button>
                <button className="flex items-center space-x-1">
                  <LinkIcon className="w-4 h-4" />
                  <span>Link</span>
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

