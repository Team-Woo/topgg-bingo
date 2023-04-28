'use client';
import Image from "next/image"
import { Dispatch, SetStateAction, useState } from "react"
function bingoSlot(value: string, key: number) {
  const [selected, setSelected] = useState(false);
  return(
    <div className="w-36 h-36 text-center border-2 border-[#ff3366] bg-[#070510] text-[#ff3366] text-xl font-semibold flex items-center justify-center" onClick={() => setSelected(!selected)}>
      {selected ? <Image src="/TopggLogo.png" alt="Topgg Logo" width={128} height={20} /> : value}
    </ div>
  ) 
}
export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center gap-5">
        <div className="flex flex-row pt-5 gap-3">
          <h1 className="text-[40px] font-semibold">Top.gg</h1>
          <Image src="/TopggLogo.png" alt="Topgg Logo" width={150} height={20} />
        </div>
        <div className="text-[30px] font-semibold">Woo Bingo</div>

        <div id="boardContianer">
          <div id="board" className="border-[#ff3366] border-2 grid grid-cols-5 gap-0">
            {
              cards.map((Value, index) => {
                return(
                  bingoSlot(Value, index)
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

const cards = [
  "Aurel answers", "Random sticker chain", "We're back", "Was not logged in/Wrong account", "Luca fails to give bot dev role",
  "526", "525", "The bot went offline during review", "504", "Why dont you just recruit more reviewers?",
  "Slowmode is enabled", "Scam attempt", "Voting is down", "Innapropiate content in #general", "I submit my bot 34 years ago, why not review??",
  "There's an engineer looking into it", "502", "Pls give mod", "Unmodified bot clone", "503",
  "-no/lang", "Can I see the queue?", "Bot-specific question", "Team member appears", "500",
]
