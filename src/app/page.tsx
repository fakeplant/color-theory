import dynamic from "next/dynamic"

/* ------------------------------------------------------ */
/* Dynamic */
/* ------------------------------------------------------ */
const Deck = dynamic(() => import("../components/Deck"), { ssr: false })

/* ------------------------------------------------------ */
/* Component */
/* ------------------------------------------------------ */
function HomePage() {
  return <Deck />
}

/* ------------------------------------------------------ */
/* Export */
/* ------------------------------------------------------ */
export default HomePage
