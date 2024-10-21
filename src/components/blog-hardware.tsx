'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"

export function Blog() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-7xl mx-auto py-8">
        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "U.S. Air Force \"Into The Storm\" by MediaMonks wins Site of the Month March 2021",
              image: "/images/blog-1.jpg",
              date: "April 21, 2021",
              author: "Michelle Lundrop"
            },
            {
              title: "20 Inspirational Examples of Interactive Maps and Street View in Web Design",
              image: "/images/blog-2.jpg",
              date: "April 19, 2021",
              author: "John Carnagey"
            },
            {
              title: "A Case Study: Album Colors of the Year 2020, 2021, and 2024",
              image: "/images/blog-3.jpg",
              date: "April 6, 2021",
              author: "Jose Gasparini"
            }
          ].map((blog, index) => (
            <Card key={index} className="overflow-hidden bg-card dark:bg-gray-800">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4">
                <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                <p className="text-sm text-muted-foreground mb-2">Added to Web Design</p>
                <p className="text-sm text-muted-foreground mb-4">{blog.date}</p>
                <div className="flex items-center">
                  <Avatar className="h-8 w-8 mr-2">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt={blog.author} />
                    <AvatarFallback>{blog.author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-medium">By {blog.author}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </main>
      </div>
    </div>
  )
}