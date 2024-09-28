"use client"
import { useParams } from "next/navigation" 

export default function page() {
    const {videocallid}=useParams()
  return (
    <div>
      {videocallid}
    </div>
  )
}
