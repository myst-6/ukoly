import { BIO1ProblemInfo } from "../base";

import {
  AccordionPatience,
  AlphaComplex,
  AnagramNumbers,
  Anagrams,
  Ants,
  ASpaceOddity,
  Battleships,
  BlockChains,
  BlockPalindromes,
  Cards,
  ChildsPlay,
  ColouredTriangles,
  DecoderRing,
  Decrypt,
  DebtRepayment,
  DieTipping,
  DigitWords,
  DistinctPrimeFactorisation,
  DotsAndBoxes,
  DownPat,
  DreamingSpires,
  Drats,
  EenieMeenieMaineeMo,
  EnigmaMachine,
  FalsePlan,
  FibonacciLetters,
  FourInALine,
  Fractions,
  GameOfDrones,
  GoldbachConjecture,
  ISBN,
  IncreasingPasswords,
  IntegerStrings,
  Juggluging,
  Lojban,
  Loops,
  LuckyNumbers,
  MayanCalendar,
  Migration,
  ModernArt,
  Mops,
  MorseCode,
  MovieMagic,
  MuTorere,
  MysteryParcel,
  Neutron,
  NewOrder,
  NumberLadder,
  OnTheRightTrack,
  PalindromicNumbers,
  Parking,
  ParsingLists,
  Passwords,
  Pentominoes,
  PlayfairCipher,
  PlayingGames,
  PrimeConnections,
  PromenadeFractions,
  PuzzleGame,
  RomanLookAndSay,
  Rules,
  SerialNumbers,
  Shirts,
  Shuffling,
  StringRewriting,
  TuringMachine,
  Trail,
  TriIsoGame,
  Unlock,
  UpsideDown,
  WatchingTheClock,
  Waves,
  WindowDressing,
  WordGame,
  ZeckendorfRepresentation  
} from "solutions";

import {
  TestIntegerStrings,
  TestParsingLists,
  TestWordGame,
  TestDecrypt,
  TestGameOfDrones,
  TestDreamingSpires,
  TestPentominoes,
  TestZeckendorfRepresentation,
  TestParking,
  TestDownPat,
  TestTriIsoGame,
  TestWindowDressing,
  TestRomanLookAndSay,
  TestAlphaComplex,
  TestFalsePlan,
  TestPalindromicNumbers,
  TestTrail,
  TestBlockChain,
  TestDebtRepayment,
  TestPasswords,
  TestAnts,
} from "content/tests";
import { ncmp, wcmp } from "utils";


console.log(TestPasswords);
console.log(TestDebtRepayment);

export const bio1Problems: BIO1ProblemInfo[] = [
  {
    difficulty: "Medium",
    display: "Integer Strings",
    original: "https://www.olympiad.org.uk/papers/2024/bio/bio24-exam.pdf",
    year: 2024,
    question: 1,
    tags: ["Math"],
    editorialAuthors: ["Alex Pylypenko"],
    solutionAuthors: ["Alex Pylypenko"],
    component: <IntegerStrings />,
    tests: TestIntegerStrings,
    checker: ncmp,
  },
  {
    difficulty: "Medium",
    display: "Rules",
    original: "https://olympiad.org.uk/papers/2006/bio/bio06-exam.pdf",
    year: 2006,
    question: 2,
    tags: ["Implementation", "Brute Force"],
    editorialAuthors: ["Alex Pylypenko"],
    solutionAuthors: ["Alex Pylypenko"],
    component: <Rules />,
  },
  {
    difficulty: "Easy",
    display: "Mayan Calendar",
    original: "https://olympiad.org.uk/papers/2004/bio/bio04ex.pdf",
    year: 2004,
    question: 1,
    tags: ["Math"],
    editorialAuthors: ["Alex Pylypenko"],
    solutionAuthors: ["Alex Pylypenko"],
    component: <MayanCalendar />,
  },
  {
    difficulty: "Medium",
    display: "Shuffling",
    original: "https://www.olympiad.org.uk/papers/2002/bio/bio02ex.pdf",
    year: 2002,
    question: 2,
    tags: ["Brute Force", "Implementation"],
    editorialAuthors: ["Alex Pylypenko"],
    solutionAuthors: ["Alex Pylypenko"],
    component: <Shuffling />,
  },
  {
    difficulty: "Easy",
    display: "Cards",
    original: "https://olympiad.org.uk/papers/2007/bio/bio07exam.pdf",
    year: 2007,
    question: 1,
    tags: ["Implementation"],
    editorialAuthors: ["Alex Pylypenko"],
    solutionAuthors: ["Alex Pylypenko"],
    component: <Cards />,
  },
  {
    difficulty: "Trivial",
    display: "ISBN",
    original: "https://olympiad.org.uk/papers/2003/bio/bio03ex.pdf",
    year: 2003,
    question: 1,
    tags: ["Implementation"],
    editorialAuthors: ["Alex Pylypenko"],
    solutionAuthors: ["Alex Pylypenko"],
    component: <ISBN />,
  },
  {
    difficulty: "Medium",
    display: "Movie Magic",
    original: "https://www.olympiad.org.uk/papers/2005/bio/bio05-exam.pdf",
    year: 2005,
    question: 3,
    tags: ["Dynamic Programming", "DFS and Similar"],
    editorialAuthors: ["Alex Pylypenko"],
    solutionAuthors: ["Alex Pylypenko"],
    component: <MovieMagic />,
  },
  {
    difficulty: "Medium",
    display: "Drats",
    original: "https://olympiad.org.uk/papers/2006/bio/bio06-exam.pdf",
    year: 2006,
    question: 3,
    tags: ["Dynamic Programming"],
    editorialAuthors: ["Alex Pylypenko"],
    solutionAuthors: ["Alex Pylypenko"],
    component: <Drats />,
  },
  {
    difficulty: "Trivial",
    display: "Anagrams",
    original: "https://olympiad.org.uk/papers/2006/bio/bio06-exam.pdf",
    year: 2006,
    question: 1,
    tags: ["Implementation"],
    editorialAuthors: ["Alex Pylypenko"],
    solutionAuthors: ["Alex Pylypenko"],
    component: <Anagrams />,
  },
  {
    difficulty: "Easy",
    display: "Fractions",
    original: "https://www.olympiad.org.uk/papers/2005/bio/bio05-exam.pdf",
    year: 2005,
    question: 1,
    tags: ["Implementation", "Math"],
    editorialAuthors: ["Alex Pylypenko"],
    solutionAuthors: ["Alex Pylypenko"],
    component: <Fractions />,
  },
  {
    difficulty: "Hard",
    display: "Number Ladder",
    original: "https://www.olympiad.org.uk/papers/2012/bio/bio12-exam.pdf",
    year: 2012,
    question: 3,
    tags: ["DFS and Similar", "Implementation"],
    editorialAuthors: ["Alex Pylypenko"],
    solutionAuthors: ["Alex Pylypenko"],
    component: <NumberLadder />,
  },
  {
    difficulty: "Medium",
    display: "Parsing Lists",
    original: "https://www.olympiad.org.uk/papers/2024/bio/bio24-exam.pdf",
    year: 2024,
    question: 2,
    tags: ["Implementation"],
    editorialAuthors: ["Alex Pylypenko"],
    solutionAuthors: ["Alex Pylypenko"],
    component: <ParsingLists />,
    tests: TestParsingLists,
    checker: ncmp,
  },
  {
    difficulty: "Medium",
    display: "Four in a Line",
    original: "https://www.olympiad.org.uk/papers/2004/bio/bio04ex.pdf",
    year: 2004,
    question: 2,
    tags: ["Implementation"],
    editorialAuthors: ["Alex Pylypenko"],
    solutionAuthors: ["Alex Pylypenko"],
    component: <FourInALine />,
  },
  {
    difficulty: "Medium",
    display: "Word Game",
    original: "https://www.olympiad.org.uk/papers/2024/bio/bio24-exam.pdf",
    year: 2024,
    question: 3,
    tags: ["Dynamic Programming"],
    editorialAuthors: ["Alex Pylypenko"],
    solutionAuthors: ["Alex Pylypenko"],
    component: <WordGame />,
    tests: TestWordGame,
    checker: ncmp,
  },
  {
    difficulty: "Hard",
    display: "Unlock",
    original: "https://www.olympiad.org.uk/papers/2013/bio/bio13-exam.pdf",
    year: 2013,
    question: 3,
    tags: ["Brute Force"],
    editorialAuthors: ["Alex Pylypenko"],
    solutionAuthors: ["Alex Pylypenko"],
    component: <Unlock />,
  },
  {
    difficulty: "Easy",
    display: "Zeckendorf",
    original: "https://www.olympiad.org.uk/papers/2023/bio/bio23-exam.pdf",
    year: 2023,
    question: 1,
    tags: ["Math"],
    editorialAuthors: ["Vladimir Filip"],
    solutionAuthors: ["Vladimir Filip"],
    component: <ZeckendorfRepresentation />,
    tests: TestZeckendorfRepresentation,
    checker: ncmp,
  },
  {
    difficulty: "Medium",
    display: "Pentominoes",
    original: "https://www.olympiad.org.uk/papers/2023/bio/bio23-exam.pdf",
    year: 2023,
    question: 2,
    tags: ["Brute Force", "Implementation"],
    editorialAuthors: ["Vladimir Filip"],
    solutionAuthors: ["Vladimir Filip"],
    component: <Pentominoes />,
    tests: TestPentominoes,
    checker: ncmp,
  },
  {
    difficulty: "Medium",
    display: "Dreaming Spires",
    original: "https://www.olympiad.org.uk/papers/2023/bio/bio23-exam.pdf",
    year: 2023,
    question: 3,
    tags: ["DFS and Similar"],
    editorialAuthors: ["Vladimir Filip"],
    solutionAuthors: ["Vladimir Filip", "Alex Pylypenko"],
    component: <DreamingSpires />,
    tests: TestDreamingSpires,
    checker: ncmp,
  },
  {
    difficulty: "Medium",
    display: "Juggl(ug)ing",
    original: "https://olympiad.org.uk/papers/2010/bio/bio-10-exam.pdf",
    year: 2010,
    question: 3,
    tags: ["DFS and Similar"],
    editorialAuthors: ["Alex Pylypenko"],
    solutionAuthors: ["Alex Pylypenko"],
    component: <Juggluging />,
  },
  {
    difficulty: "Medium",
    display: "On The Right Track",
    original: "https://www.olympiad.org.uk/papers/2012/bio/bio12-exam.pdf",
    year: 2012,
    question: 2,
    tags: ["Implementation"],
    editorialAuthors: ["Duy Nguyen"],
    solutionAuthors: ["Duy Nguyen"],
    component: <OnTheRightTrack />,
  },
  {
    difficulty: "Medium",
    display: "Shirts",
    original: "https://olympiad.org.uk/papers/2008/bio/bio08-exam.pdf",
    year: 2008,
    question: 3,
    tags: ["DFS and Similar"],
    editorialAuthors: ["Alex Pylypenko"],
    solutionAuthors: ["Alex Pylypenko"],
    component: <Shirts />,
  },
  {
    difficulty: "Easy",
    display: "Debt Repayment",
    original: "https://www.olympiad.org.uk/papers/2018/bio/bio18-exam.pdf",
    year: 2018,
    question: 1,
    tags: ["Implementation"],
    editorialAuthors: ["Adwaya Gupta"],
    solutionAuthors: ["Adwaya Gupta"],
    component: <DebtRepayment />,
    tests: TestDebtRepayment,
    checker: ncmp,
  },
  {
    difficulty: "Easy",
    display: "Decoder Ring",
    original: "https://www.olympiad.org.uk/papers/2018/bio/bio18-exam.pdf",
    year: 2018,
    question: 2,
    tags: ["Implementation"],
    editorialAuthors: ["Adwaya Gupta"],
    solutionAuthors: ["Adwaya Gupta"],
    component: <DecoderRing />,
  },
  {
    difficulty: "Medium",
    display: "Serial Numbers",
    original: "https://www.olympiad.org.uk/papers/2018/bio/bio18-exam.pdf",
    year: 2018,
    question: 3,
    tags: ["DFS and Similar"],
    editorialAuthors: ["Adwaya Gupta"],
    solutionAuthors: ["Adwaya Gupta"],
    component: <SerialNumbers />,
  },
  {
    difficulty: "Hard",
    display: "Block-chain",
    original: "https://www.olympiad.org.uk/papers/2019/bio/bio19-exam.pdf",
    year: 2019,
    question: 3,
    tags: ["DFS and Similar"],
    editorialAuthors: ["Julia Volovich"],
    solutionAuthors: ["Julia Volovich"],
    component: <BlockChains />,
    tests: TestBlockChain,
    checker: ncmp,
  },
  {
    difficulty: "Trivial",
    display: "Coloured Triangles",
    original: "https://www.olympiad.org.uk/papers/2017/bio/bio17-exam.pdf",
    year: 2017,
    question: 1,
    tags: ["Implementation"],
    editorialAuthors: ["Adwaya Gupta"],
    solutionAuthors: ["Adwaya Gupta"],
    component: <ColouredTriangles />,
  },
  {
    difficulty: "Medium",
    display: "Dots and Boxes",
    original: "https://www.olympiad.org.uk/papers/2017/bio/bio17-exam.pdf",
    year: 2017,
    question: 2,
    tags: ["Implementation"],
    editorialAuthors: ["Adwaya Gupta"],
    solutionAuthors: ["Adwaya Gupta"],
    component: <DotsAndBoxes />,
  },
  {
    difficulty: "Hard",
    display: "Mystery Parcel",
    original: "https://www.olympiad.org.uk/papers/2017/bio/bio17-exam.pdf",
    year: 2017,
    question: 3,
    tags: ["Dynamic Programming"],
    editorialAuthors: ["Adwaya Gupta"],
    solutionAuthors: ["Adwaya Gupta"],
    component: <MysteryParcel />,
  },
  {
    difficulty: "Easy",
    display: "Migration",
    original: "https://www.olympiad.org.uk/papers/2016/bio/bio16-exam.pdf",
    year: 2016,
    question: 2,
    tags: ["Implementation"],
    editorialAuthors: ["Adwaya Gupta"],
    solutionAuthors: ["Adwaya Gupta"],
    component: <Migration />,
  },
  {
    difficulty: "Medium",
    display: "Prime Connections",
    original: "https://www.olympiad.org.uk/papers/2016/bio/bio16-exam.pdf",
    year: 2016,
    question: 3,
    tags: ["DFS and Similar"],
    editorialAuthors: ["Adwaya Gupta"],
    solutionAuthors: ["Adwaya Gupta"],
    component: <PrimeConnections />,
  },
  {
    difficulty: "Hard",
    display: "A Space Oddity",
    original: "https://olympiad.org.uk/papers/2001/bio/bio01ex.pdf",
    year: 2001,
    question: 3,
    tags: ["Graphs", "DFS and Similar"],
    editorialAuthors: ["Alex Pylypenko"],
    solutionAuthors: ["Alex Pylypenko"],
    component: <ASpaceOddity />,
  },
  {
    difficulty: "Medium",
    display: "Block Palindromes",
    original: "https://www.olympiad.org.uk/papers/2015/bio/bio15-exam.pdf",
    year: 2015,
    question: 1,
    tags: ["Brute Force", "Implementation"],
    editorialAuthors: ["Alex Pylypenko"],
    solutionAuthors: ["Alex Pylypenko"],
    component: <BlockPalindromes />,
  },
  {
    difficulty: "Hard",
    display: "Parking",
    original: "https://www.olympiad.org.uk/papers/2022/bio/bio22-exam.pdf",
    year: 2022,
    question: 3,
    tags: ["Math"],
    editorialAuthors: ["Duy Nguyen"],
    solutionAuthors: ["Duy Nguyen"],
    component: <Parking />,
    tests: TestParking,
    checker: wcmp,
  },
  {
    difficulty: "Easy",
    display: "Palindromic Numbers",
    original: "https://www.olympiad.org.uk/papers/2019/bio/bio19-exam.pdf",
    year: 2019,
    question: 1,
    tags: ["Math"],
    editorialAuthors: ["Yuvan Raja"],
    solutionAuthors: ["Yuvan Raja"],
    component: <PalindromicNumbers />,
    tests: TestPalindromicNumbers,
    checker: ncmp,
  },
  {
    difficulty: "Easy",
    display: "Promenade Fractions",
    original: "https://www.olympiad.org.uk/papers/2016/bio/bio16-exam.pdf",
    year: 2016,
    question: 1,
    tags: ["Implementation"],
    editorialAuthors: ["Adwaya Gupta"],
    solutionAuthors: ["Adwaya Gupta"],
    component: <PromenadeFractions />,
  },
  {  
    difficulty: "Medium",
    display: "Window Dressing",
    original: "https://www.olympiad.org.uk/papers/2021/bio/bio21-exam.pdf",
    year: 2021,
    question: 3,
    tags: ["DFS and Similar"],
    editorialAuthors: ["Alex Pylypenko"],
    solutionAuthors: ["Alex Pylypenko"],
    component: <WindowDressing />,
    tests: TestWindowDressing,
    checker: ncmp
  },
  {
    difficulty: "Medium",
    display: "Down Pat",
    original: "https://www.olympiad.org.uk/papers/2021/bio/bio21-exam.pdf",
    year: 2021,
    question: 1,
    tags: ["Brute Force", "Implementation"],
    editorialAuthors: ["Alex Pylypenko"],
    solutionAuthors: ["Alex Pylypenko"],
    component: <DownPat />,
    tests: TestDownPat,
    checker: wcmp
  },
  {
    difficulty: "Insane",
    display: "Tri-Iso Game",
    original: "https://www.olympiad.org.uk/papers/2021/bio/bio21-exam.pdf",
    year: 2021,
    question: 2,
    tags: ["Implementation"],
    editorialAuthors: ["Adwaya Gupta"],
    solutionAuthors: ["Adwaya Gupta"],
    component: <TriIsoGame />,
    tests: TestTriIsoGame,
    checker: ncmp
  },
  {
    difficulty: "Medium",
    display: "Loops",
    original: "https://www.olympiad.org.uk/papers/2014/bio/bio14-exam.pdf",
    year: 2014,
    question: 2,
    tags: ["Implementation"],
    editorialAuthors: ["Adwaya Gupta"],
    solutionAuthors: ["Adwaya Gupta"],
    component: <Loops />,
  },
  {
    difficulty: "Easy",
    display: "Digit Words",
    original: "https://www.olympiad.org.uk/papers/2009/bio/bio09-exam.pdf",
    year: 2009,
    question: 1,
    tags: ["Brute Force", "Greedy"],
    editorialAuthors: ["Alex Pylypenko"],
    solutionAuthors: ["Alex Pylypenko"],
    component: <DigitWords />,
  },
  {
    difficulty: "Trivial",
    display: "Goldbach Conjecture",
    original: "https://olympiad.org.uk/papers/2008/bio/bio08-exam.pdf",
    year: 2008,
    question: 1,
    tags: ["Brute Force", "Math"],
    editorialAuthors: ["Alex Pylypenko"],
    solutionAuthors: ["Alex Pylypenko"],
    component: <GoldbachConjecture />,
  },
  {
    difficulty: "Easy",
    display: "Battleships",
    original: "https://www.olympiad.org.uk/papers/2015/bio/bio15-exam.pdf",
    year: 2015,
    question: 2,
    tags: ["Implementation"],
    editorialAuthors: ["Adwaya Gupta"],
    solutionAuthors: ["Adwaya Gupta"],
    component: <Battleships />,
  },
  {
    difficulty: "Easy",
    display: "Decrypt",
    original: "https://www.olympiad.org.uk/papers/2022/bio/bio22-exam.pdf",
    year: 2022,
    question: 1,
    tags: ["Math"],
    editorialAuthors: ["Yuvan Raja"],
    solutionAuthors: ["Yuvan Raja"],
    component: <Decrypt />,
    tests: TestDecrypt,
    checker: wcmp,
  },
  {
    difficulty: "Hard",
    display: "Game of Drones",
    original: "https://www.olympiad.org.uk/papers/2022/bio/bio22-exam.pdf",
    year: 2022,
    question: 2,
    tags: ["Implementation"],
    editorialAuthors: ["Adwaya Gupta"],
    solutionAuthors: ["Adwaya Gupta"],
    component: <GameOfDrones />,
    tests: TestGameOfDrones,
    checker: ncmp
  },
  {
    difficulty: "Easy",
    display: "Roman Look-and-Say",
    original: "https://www.olympiad.org.uk/papers/2020/bio/bio20-exam.pdf",
    year: 2020,
    question: 1,
    tags: ["Implementation"],
    editorialAuthors: ["Seyoon Park"],
    solutionAuthors: ["Seyoon Park"],
    component: <RomanLookAndSay />,
    tests: TestRomanLookAndSay,
    checker: ncmp
  },
  {
    difficulty: "Medium",
    display: "False Plan",
    original: "https://www.olympiad.org.uk/papers/2020/bio/bio20-exam.pdf",
    year: 2020,
    question: 3,
    tags: ["Dynamic Programming"],
    editorialAuthors: ["Yuvan Raja"],
    solutionAuthors: ["Yuvan Raja"],
    component: <FalsePlan />,
    tests: TestFalsePlan,
    checker: wcmp
  },
  {
    difficulty: "Easy",
    display: "Fibonacci Letters",
    original: "https://olympiad.org.uk/papers/2011/bio/bio2011-Round1-Exam.pdf",
    year: 2011,
    question: 1,
    tags: ["Implementation", "Brute Force"],
    editorialAuthors: ["Alex Pylypenko"],
    solutionAuthors: ["Alex Pylypenko"],
    component: <FibonacciLetters />,
  },
  {
    difficulty: "Hard",
    display: "Neutron",
    original: "https://www.olympiad.org.uk/papers/2013/bio/bio13-exam.pdf",
    year: 2013,
    question: 2,
    tags: ["Implementation"],
    editorialAuthors: ["Adwaya Gupta"],
    solutionAuthors: ["Adwaya Gupta"],
    component: <Neutron />,
  },
  {
    difficulty: "Easy",
    display: "Eenie Meenie Mainee Mo!",
    original: "https://olympiad.org.uk/papers/2001/bio/bio01ex.pdf",
    year: 2001,
    question: 1,
    tags: ["Brute Force", "Dynamic Programming"],
    editorialAuthors: ["Adwaya Gupta"],
    solutionAuthors: ["Adwaya Gupta"],
    component: <EenieMeenieMaineeMo />,
  },
  {
    difficulty: "Medium",
    display: "Modern Art",
    original: "https://www.olympiad.org.uk/papers/2015/bio/bio15-exam.pdf",
    year: 2015,
    question: 3,
    tags: ["Dynamic Programming"],
    editorialAuthors: ["Adwaya Gupta"],
    solutionAuthors: ["Adwaya Gupta"],
    component: <ModernArt />,
  },
  {
    difficulty: "Hard",
    display: "Mu Torere",
    original: "https://olympiad.org.uk/papers/2007/bio/bio07exam.pdf",
    year: 2007,
    question: 2,
    tags: ["Implementation"],
    editorialAuthors: ["Alex Pylypenko"],
    solutionAuthors: ["Alex Pylypenko"],
    component: <MuTorere />,
  },
  {
    difficulty: "Trivial",
    display: "Anagram Numbers",
    original: "https://olympiad.org.uk/papers/2010/bio/bio-10-exam.pdf",
    year: 2010,
    question: 1,
    tags: ["Implementation"],
    editorialAuthors: ["Alex Pylypenko"],
    solutionAuthors: ["Alex Pylypenko"],
    component: <AnagramNumbers />,
  },
  {
    difficulty: "Medium",
    display: "Increasing Passwords",
    original: "https://olympiad.org.uk/papers/2014/bio/bio14-exam.pdf",
    year: 2014,
    question: 3,
    tags: ["Dynamic Programming"],
    editorialAuthors: ["Adwaya Gupta"],
    solutionAuthors: ["Adwaya Gupta"],
    component: <IncreasingPasswords />,
  },
  {
    difficulty: "Easy",
    display: "Distinct Prime Factorisation",
    original: "https://www.olympiad.org.uk/papers/2012/bio/bio12-exam.pdf",
    year: 2012,
    question: 1,
    tags: ["Implementation", "Math"],
    editorialAuthors: ["Alex Pylypenko"],
    solutionAuthors: ["Alex Pylypenko"],
    component: <DistinctPrimeFactorisation />,
  },
  {
    difficulty: "Easy",
    display: "Enigma Machine",
    original: "https://www.olympiad.org.uk/papers/2008/bio/bio08-exam.pdf",
    year: 2008,
    question: 2,
    tags: ["Implementation"],
    editorialAuthors: ["Adwaya Gupta"],
    solutionAuthors: ["Adwaya Gupta"],
    component: <EnigmaMachine />,
  },
  {
    difficulty: "Medium",
    display: "Upside Down",
    original: "https://www.olympiad.org.uk/papers/2011/bio/bio2011-Round1-Exam.pdf",
    year: 2011,
    question: 3,
    tags: ["Dynamic Programming"],
    editorialAuthors: ["Adwaya Gupta"],
    solutionAuthors: ["Adwaya Gupta"],
    component: <UpsideDown />,
  },
  {
    difficulty : "Trivial",
    display: "Passwords",
    original: "https://www.olympiad.org.uk/papers/2000/bio/bio2kex.pdf",
    year: 2000,
    question: 1,
    tags: ["Brute Force"],
    editorialAuthors: ["Shubham Kumar"],
    solutionAuthors: ["Shubham Kumar"],
    component: <Passwords />,
    tests: TestPasswords,
    checker: wcmp,
  },
  {
    difficulty: "Easy",
    display: "Ants",
    original: "https://www.olympiad.org.uk/papers/2000/bio/bio2kex.pdf",
    year: 2000,
    question: 2,
    tags: ["Implementation"],
    editorialAuthors: ["Shubham Kumar"],
    solutionAuthors: ["Shubham Kumar"],
    component: <Ants />,
    tests: TestAnts,
    checker: wcmp,
  },
  {
    difficulty: "Easy",
    display: "Lucky Numbers",
    original: "https://www.olympiad.org.uk/papers/2014/bio/bio14-exam.pdf",
    year: 2014,
    question: 1,
    tags: ["Brute Force"],
    editorialAuthors: ["Adwaya Gupta"],
    solutionAuthors: ["Adwaya Gupta"],
    component: <LuckyNumbers />,
  },
  {
    difficulty: "Trivial",
    display: "Lojban",
    original: "https://olympiad.org.uk/papers/2002/bio/bio02ex.pdf",
    year: 2002,
    question: 1,
    tags: ["Brute Force"],
    editorialAuthors: ["Alexander Hopkins"],
    solutionAuthors: ["Alexander Hopkins"],
    component: <Lojban />,
  },
  {
    difficulty: "Easy",
    display: "Watching The Clock",
    original: "https://www.olympiad.org.uk/papers/2013/bio/bio13-exam.pdf",
    year: 2013,
    question: 1,
    tags: ["Brute Force"],
    editorialAuthors: ["Adwaya Gupta"],
    solutionAuthors: ["Adwaya Gupta"],
    component: <WatchingTheClock />,
  },
  {
    difficulty: "Easy",
    display: "Playfair Cipher",
    original: "https://www.olympiad.org.uk/papers/2001/bio/bio01ex.pdf",
    year: 2001,
    question: 2,
    tags: ["Brute Force", "Implementation"],
    editorialAuthors: ["Alex Pylypenko"],
    solutionAuthors: ["Alex Pylypenko"],
    component: <PlayfairCipher />,
  },
  {
    difficulty: "Medium",
    display: "Mops",
    original: "https://www.olympiad.org.uk/papers/2002/bio/bio02ex.pdf",
    year: 2002,
    question: 3,
    tags: ["Dynamic Programming"],
    editorialAuthors: ["Adwaya Gupta"],
    solutionAuthors: ["Adwaya Gupta"],
    component: <Mops />,
  },
  {
    difficulty: "Easy",
    display: "Die Tipping",
    original: "https://www.olympiad.org.uk/papers/2010/bio/bio-10-exam.pdf",
    year: 2010,
    question: 2,
    tags: ["Implementation"],
    editorialAuthors: ["Adwaya Gupta"],
    solutionAuthors: ["Adwaya Gupta"],
    component: <DieTipping />,
  },
  {

    difficulty: "Hard",
    display: "Playing Games",
    original: "https://olympiad.org.uk/papers/2000/bio/bio2kex.pdf",
    year: 2000,
    question: 3,
    tags: ["Brute Force", "Implementation"],
    editorialAuthors: ["Shubham Kumar"],
    solutionAuthors: ["Shubham Kumar"],
    component: <PlayingGames />,
  },
  {
    difficulty: "Easy",
    display: "Turing Machine",
    original: "https://www.olympiad.org.uk/papers/2005/bio/bio05-exam.pdf",
    year: 2005,
    question: 2,
    tags: ["Implementation"],
    editorialAuthors: ["Adwaya Gupta"],
    solutionAuthors: ["Adwaya Gupta"],
    component: <TuringMachine />,
  },
  {
    difficulty: "Hard",
    display: "Puzzle Game",
    original: "https://www.olympiad.org.uk/papers/2009/bio/bio09-exam.pdf",
    year: 2009,
    question: 2,
    tags: ["Implementation", "DFS and Similar"],
    editorialAuthors: ["Adwaya Gupta"],
    solutionAuthors: ["Adwaya Gupta"],
    component: <PuzzleGame />,
  },
  {
    difficulty: "Easy",
    display: "Child's Play",
    original: "https://www.olympiad.org.uk/papers/2009/bio/bio09-exam.pdf",
    year: 2009,
    question: 3,
    tags: ["Dynamic Programming"],
    editorialAuthors: ["Adwaya Gupta"],
    solutionAuthors: ["Adwaya Gupta"],
    component: <ChildsPlay />,
  },
  {
    difficulty: "Medium",
    display: "New Order",
    original: "https://www.olympiad.org.uk/papers/2003/bio/bio03ex.pdf",
    year: 2003,
    question: 3,
    tags: ["Dynamic Programming"],
    editorialAuthors: ["Adwaya Gupta"],
    solutionAuthors: ["Adwaya Gupta"],
    component: <NewOrder />,
  }, 
  {
    difficulty: "Medium",
    display: "Morse Code",
    original: "https://www.olympiad.org.uk/papers/2004/bio/bio04ex.pdf",
    year: 2004,
    question: 3,
    tags: ["Dynamic Programming", "Brute Force"],
    editorialAuthors: ["Adwaya Gupta"],
    solutionAuthors: ["Adwaya Gupta"],
    component: <MorseCode />,
  },
  {
    difficulty: "Medium",
    display: "Accordion Patience",
    original: "https://www.olympiad.org.uk/papers/2011/bio/bio2011-Round1-Exam.pdf",
    year: 2011,
    question: 2,
    tags: ["Implementation"],
    editorialAuthors: ["Adwaya Gupta"],
    solutionAuthors: ["Adwaya Gupta"],
    component: <AccordionPatience />,
  },
  {
    difficulty: "Medium",
    display: "Alpha Complex",
    original: "https://olympiad.org.uk/papers/2020/bio/bio20-exam.pdf",
    year: 2020,
    question: 2,
    tags: ["Implementation"],
    editorialAuthors: ["Yuvan Raja"],
    solutionAuthors: ["Yuvan Raja"],
    component: <AlphaComplex />,
    tests: TestAlphaComplex,
    checker: wcmp
  },
  {
    difficulty: "Hard",
    display: "Waves",
    original: "https://www.olympiad.org.uk/papers/2003/bio/bio03ex.pdf",
    year: 2003,
    question: 2,
    tags: ["Brute Force", "Implementation"],
    editorialAuthors: ["Daria Sanina"],
    solutionAuthors: ["Daria Sanina"],
    component: <Waves />,
},
{
    difficulty: "Easy",
    display: "Trail",
    original: "https://www.olympiad.org.uk/papers/2019/bio/bio19-exam.pdf",
    year: 2019,
    question: 2,
    tags: ["Implementation"],
    editorialAuthors: ["Adwaya Gupta"],
    solutionAuthors: ["Adwaya Gupta"],
    component: <Trail />,
    tests: TestTrail,
    checker: ncmp
  },
  {
    difficulty: "Insane",
    display: "String Rewriting",
    original: "https://olympiad.org.uk/papers/2007/bio/bio07exam.pdf",
    year: 2007,
    question: 3,
    tags: ["Dynamic Programming", "Implementation", "Graphs"],
    editorialAuthors: ["Seyoon Park"],
    solutionAuthors: ["Seyoon Park"],
    component: <StringRewriting />,
  }
];
