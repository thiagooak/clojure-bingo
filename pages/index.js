import Head from 'next/head'
import Image from 'next/image'
import BingoCell from "../components/BingoCell";

export default function Home() {
  return (
      <div className="bg-[#009245] w-full min-h-screen">
          <a href="https://github.com/thiagooak/clojure-bingo" className="float-right"><img loading="lazy" width="149" height="149"
                                                src="https://github.blog/wp-content/uploads/2008/12/forkme_right_white_ffffff.png?resize=149%2C149"
                                                className="attachment-full size-full" alt="Fork me on GitHub"
                                                data-recalc-dims="1" /></a>
          <h1 className="text-5xl font-bold text-center p-4 text-white">Clojure Bingo</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols:5 m-auto">
          <BingoCell storageId="repl">Started a REPL</BingoCell>
          <BingoCell storageId="map-reduce-appluy">Figured out how to use {" "}
              <a className="underline" href="https://clojuredocs.org/clojure.core/map">map</a>,{" "}
              <a className="underline" href="https://clojuredocs.org/clojure.core/reduce">reduce</a>, and{" "}
              <a className="underline" href="https://clojuredocs.org/clojure.core/apply">apply</a></BingoCell>
          <BingoCell storageId="errors">Wondered if error messages could be clearer</BingoCell>
          <BingoCell storageId="lein">Learned how to pronounce Leiningen</BingoCell>
          <BingoCell storageId="unbounded-seq">Accidentally called a function that returned an unbounded sequence</BingoCell>
          <BingoCell storageId="fourclojure">Completed <a href="https://4clojure.oxal.org/">4clojure</a></BingoCell>
          <BingoCell storageId="multimethod">Defined a multimethod</BingoCell>
          <BingoCell storageId="var-varval">Understood the difference between a var and the value in a var</BingoCell>
          <BingoCell storageId="laziness">Laziness prevented an expected side effect</BingoCell>
          <BingoCell storageId="paraedit">Got really excited about Paredit</BingoCell>
          <BingoCell storageId="direct-interop">Abandoned a wrapper library for direct interop</BingoCell>
          <BingoCell storageId="func-val">Accidentally got the value of a function instead of calling it</BingoCell>
          <BingoCell storageId="macro-no-macro">Wrote a macro then decided macro was unnecessary</BingoCell>
          <BingoCell storageId="core-proxy">Could justifiably claim to have a use case for <code>clojure.core/proxy</code></BingoCell>
          <BingoCell storageId="atom-ref">Wrote an atom. Decided to use a ref instead.</BingoCell>
          <BingoCell storageId="ref-atom">Wrote a ref. Decided to use an atom instead.</BingoCell>
          <BingoCell storageId="nil-punning">Got a nullpointer exception. Learned about nil-punning</BingoCell>
          <BingoCell storageId="ifn">Can explain the difference between <code>fn?</code> and <code>ifn?</code></BingoCell>
          <BingoCell storageId="threading-macro">Used a threading macro. Decided thread macro was unnecessary</BingoCell>
          <BingoCell storageId="falsy">Checked to see if some value was explicitly false and discovered that that was <code>nil</code></BingoCell>
          <BingoCell storageId="npe-trauma">Guarded a clause with when before an NPE ever occurred</BingoCell>
      </div>
      </div>
  )
}
