import { Search } from "lucide-react"

export default function Journals() {
  const journals = [
    {
      name: "bioRxiv",
      description: "Provides preprints in biological sciences, including subfields like neuroscience, genomics, and physiology, operated by Cold Spring Harbor Laboratory",
      papers: "166.9K",
      discussions: "3.1K"
    },
    {
      name: "arXiv",
      description: "Provides preprints in physics, mathematics, computer science, and related fields—including subfields like astrophysics and machine learning—operated b...",
      papers: "67.5K",
      discussions: "317"
    },
    {
      name: "Research Square",
      description: "Provides preprints in various disciplines, including life sciences, physical sciences, and social sciences, operated by Research Square Company in par...",
      papers: "29.5K",
      discussions: "78"
    },
    {
      name: "Nature",
      description: "Provides peer-reviewed research across all fields of science and technology, including subfields like physics, biology, and chemistry, published by Sp...",
      papers: "9.7K",
      discussions: "81"
    },
    {
      name: "Proceedings of the National ...",
      description: "Provides peer-reviewed research in various scientific disciplines, including physical, biological, and social sciences, published by the National Acad...",
      papers: "9.3K",
      discussions: "12"
    },
    {
      name: "Science",
      description: "Provides peer-reviewed research across all scientific disciplines, including subfields like biology, physics, and chemistry, published by the American...",
      papers: "8.1K",
      discussions: "29"
    },
    {
      name: "SSRN",
      description: "Provides preprints in social sciences and humanities, including subfields like economics, law, and finance, owned by Elsevier.",
      papers: "7.0K",
      discussions: "13"
    },
    {
      name: "Journal of the American Che...",
      description: "Provides peer-reviewed research in chemistry, including subfields like organic, inorganic, physical, and analytical chemistry, published by the Americ...",
      papers: "5.6K",
      discussions: "1"
    },
    {
      name: "Authorea",
      description: "Provides preprints and collaborative writing in diverse fields, including physics, astronomy, and life sciences, owned by Wiley",
      papers: "4.6K",
      discussions: "0"
    },
    {
      name: "Journal of Clinical Oncology",
      description: "Provides peer-reviewed research in clinical oncology, including subfields like medical, surgical, and radiation oncology, published by the American So...",
      papers: "4.5K",
      discussions: "0"
    },
    {
      name: "Circulation",
      description: "Provides peer-reviewed research in cardiovascular medicine, including subfields like cardiology, vascular medicine, and stroke, published by the Ameri...",
      papers: "4.4K",
      discussions: "2"
    },
    {
      name: "Physical Review Letters",
      description: "Provides peer-reviewed rapid communications in all fields of physics, including subfields like condensed matter, particle physics, and quantum mechani...",
      papers: "4.0K",
      discussions: "0"
    }
  ]

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Journals</h1>
      <p className="mb-6">Papers from the following journals are available on RD Axis.</p>
      
      <div className="flex justify-between mb-8">
        <div className="relative w-[500px]">
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          <input 
            type="text"
            placeholder="Search hubs"
            className="pl-10 pr-4 py-2 w-full border rounded-lg"
          />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {journals.map(journal => (
          <div key={journal.name} className="p-6 border rounded-lg">
            <div className="bg-blue-50 text-blue-600 inline-block px-3 py-1 rounded-md mb-3">
              {journal.name}
            </div>
            <p className="text-gray-600 mb-4 text-sm">{journal.description}</p>
            <div className="pt-4 mt-8 border-t border-gray-300">
              <div className="flex justify-between text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  {journal.papers} Papers
                </div>
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  {journal.discussions} Discussions
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
