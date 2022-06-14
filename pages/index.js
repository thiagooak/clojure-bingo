import Head from 'next/head'
import Image from 'next/image'
import BingoCell from "../components/BingoCell";

export default function Home() {
  return (
      <div>
          <BingoCell storageId="cell1">TBD</BingoCell>
          <BingoCell storageId="cell2">TBD</BingoCell>
          <BingoCell storageId="cell3">TBD</BingoCell>
          <BingoCell storageId="cell4">TBD</BingoCell>
      </div>
  )
}
