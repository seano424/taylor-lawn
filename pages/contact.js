import dynamic from 'next/dynamic'
const Contact = dynamic(() => import('@/components/pages/Contact'))

export default function Home() {
  return (
    <div className="bg-gray-50">
      <Contact />
    </div>
  )
}
