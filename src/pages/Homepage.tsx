import StoreHero from '@/components/frontend/StoreHero'
import Header from '@/components/ui/header'
import TopBar from '@/components/ui/topBar'
import React from 'react'

export default function Homepage() {
  return (
    <>
      <section>
        <TopBar/>
        <Header/>
        <StoreHero/>
      </section>
    </>
  )
}
