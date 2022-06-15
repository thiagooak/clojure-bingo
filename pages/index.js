import Head from 'next/head'
import Image from 'next/image'
import BingoCell from "../components/BingoCell";

export default function Home() {
  return (
      <div>
          <BingoCell storageId="cell1">Started a REPL</BingoCell>
          <BingoCell storageId="cell2">Figured out how to use
              <a class="underline" href="https://clojuredocs.org/clojure.core/map">map</a>,
              <a class="underline" href="https://clojuredocs.org/clojure.core/reduce">reduce</a>, and
              <a class="underline" href="https://clojuredocs.org/clojure.core/apply">apply</a></BingoCell>
          <BingoCell storageId="cell3">Wondered if error messages could be clearer</BingoCell>
          <BingoCell storageId="cell4">Learned how to pronounce Leinigen</BingoCell>
          <BingoCell storageId="cell4">Accidentally called a function that returned an unbounded sequence</BingoCell>
          <BingoCell storageId="cell4">Completed <a href="https://4clojure.oxal.org/">4clojure</a></BingoCell>
          <BingoCell storageId="cell4">Defined a multimethod</BingoCell>
          <BingoCell storageId="cell4">Understood the difference between a var and the value in a var</BingoCell>
          <BingoCell storageId="cell4">Laziness prevented an expected side effect</BingoCell>
          <BingoCell storageId="cell4">Used a threading macro</BingoCell>
          <BingoCell storageId="cell4">Got really excited about Paredit</BingoCell>
          <BingoCell storageId="cell4">Abandoned a wrapper library for direct interop</BingoCell>
          <BingoCell storageId="cell4">Accidentally got the value of a function instead of calling it</BingoCell>
          <BingoCell storageId="cell4">wrote a macro then decided macro was unnecessary</BingoCell>
          <BingoCell storageId="cell4">Could justifiably claim to have a use case for <code>clojure.core/proxy</code></BingoCell>
          <BingoCell storageId="cell4">Wrote an atom. Decided to use a ref instead.</BingoCell>
          <BingoCell storageId="cell4">Wrote a ref. Decided to use an atom instead.</BingoCell>
          <BingoCell storageId="cell4">Got a nullpointer exception. Learned about nil-punning</BingoCell>
          <BingoCell storageId="cell4">Can explain the difference between <code>fn?</code> and <code>ifn?</code></BingoCell>
          <BingoCell storageId="cell4">Used a threading macro Decided thread macro was unnecessary</BingoCell>
          <BingoCell storageId="cell4">Checked to see if some value was explicitly false and discovered that that was <code>nil</code> a good idea.</BingoCell>
          <BingoCell storageId="cell4">Guarded a clause with when before an NPE ever occurred.</BingoCell>
      </div>
  )
}
