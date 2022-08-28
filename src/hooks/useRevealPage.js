import { useContext } from "react"
import PageReveal from "../context/PageRevealContext"


export const useRevealPage = () => {
    const {isRevealed, revealPage} = useContext(PageReveal)
    return {isRevealed, revealPage}
}