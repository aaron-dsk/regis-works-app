import { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import 'react-pdf/dist/esm/Page/TextLayer.css'
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Star, ArrowUp, ArrowDown, BookmarkIcon, Share2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import PaperConversation from "@/components/paper-conversation"

// Initialize pdfjs worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

export default function ResearchPaperSummary() {
  const [numPages, setNumPages] = useState<number>(0)
  const [scale, setScale] = useState(1)
  const [error, setError] = useState<string | null>(null)

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages)
    setError(null)
  }


  function onDocumentLoadError(error: Error) {
    console.error('PDF Load Error:', error)
    setError(error.message)
  }

  return (
    <div className="bg-background">
      <div className="container">
        <div className="flex items-start mb-4">
          <div className="flex flex-col items-center mr-4">
            <Button variant="ghost" size="icon">
              <ArrowUp className="h-4 w-4" />
            </Button>
            <span className="text-lg font-semibold text-green-600">19</span>
            <Button variant="ghost" size="icon">
              <ArrowDown className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex-grow">
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">150 Grant</Badge>
              <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">13 Tipped</Badge>
            </div>
            <h1 className="text-2xl font-bold mb-2 leading-tight">
              Effectiveness Of A Booster Dose Of Aerosolized Or Intramuscular Adenovirus Type 5 Vectored COVID-19 Vaccine In Adults With Hybrid Immunity Against COVID-19: A Multicenter, Partially Randomized, Platform Trial In China
            </h1>
            <div className="text-sm text-gray-500 mb-2">Biorxiv Community Reviews</div>
            <div className="text-sm text-gray-700 mb-4">
              <p><strong>Authors:</strong> Si-Yu Jia, Yuan-Bao Liu, Jing-Xin Li, <span className="text-blue-500">+17 authors</span></p>
              <p><strong>Published:</strong> Sep 15, 2024</p>
              <p className="flex items-center"><strong>Peer Review:</strong> 
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                ))}
                <span className="ml-1">(1)</span>
              </p>
              <p><strong>DOI:</strong> 10.1101/2024.09.14.24313671</p>
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-2 mb-4">
          <Button variant="outline" size="sm">
            <BookmarkIcon className="h-4 w-4 mr-2" />
            Save
          </Button>
          <Button variant="outline" size="sm">
            <Share2 className="h-4 w-4 mr-2" />
            Tip
          </Button>
        </div>
        <Tabs defaultValue="paper" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="paper">Paper</TabsTrigger>
            <TabsTrigger value="conversation">Conversation</TabsTrigger>
            <TabsTrigger value="grants">Grants 1</TabsTrigger>
            <TabsTrigger value="reviews">Reviews 1</TabsTrigger>
          </TabsList>
          <TabsContent value="paper" className="relative">
            <div className="flex justify-end gap-2 mb-4">
              <Button variant="outline" size="sm" onClick={() => setScale(scale - 0.1)}>-</Button>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => setScale(1)}
                className="min-w-20"
              >
                {Math.round(scale * 100)}%
              </Button>
              <Button variant="outline" size="sm" onClick={() => setScale(scale + 0.1)}>+</Button>
            </div>
            <Document
              file={window.location.origin + '/files/demoPDF.pdf'}
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={onDocumentLoadError}
              loading={
                <div className="flex justify-center items-center h-96">
                  <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
                </div>
              }
              className="flex flex-col items-center"
            >
              {error ? (
                <div className="text-red-500">Error loading PDF: {error}</div>
              ) : (
                Array.from(new Array(numPages), (el, index) => (
                  <Page 
                    key={`page_${index + 1}`}
                    pageNumber={index + 1} 
                    scale={scale}
                    className="mb-4"
                  />
                ))
              )}
            </Document>
          </TabsContent>
          <TabsContent value="conversation">
            <PaperConversation />
          </TabsContent>
          <TabsContent value="grants">
            <p>Content for Grants tab.</p>
          </TabsContent>
          <TabsContent value="reviews">
            <p>Content for Reviews tab.</p>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

