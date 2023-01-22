import { useAppContext } from "../hook/useAppContext"

export function ChildrenOne() {
    const { name, numberExample } = useAppContext()
    return <div>{name} e numero: {numberExample}</div>
  }