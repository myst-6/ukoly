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
  TestDecoderRing,
  TestPlayingGames,
  TestPasswords,
  TestEenieMeenieMaineeMo,
  TestASpaceOddity,
  TestLojban,
  TestsAnts,
  TestShuffling,
  TestMops,
  TestISBN,
  TestWaves,
  TestNewOrder,
  TestMayanCalendar,
  TestMorseCode,
  TestFractions,
  TestTuringMachine,
  TestMovieMagic,
  TestAnagrams,
  TestRules,
  TestDrats,
  TestCards,
  TestMuTorere,
  TestStringRewriting,
  TestGoldbachConjecture,
  TestEnigmaMachine,
  TestShirts,
  TestDigitWords,
  TestChildsPlay,
  TestAnagramNumbers,
  TestJuggluging,
  TestFibonacciLetters,
  TestAccordionPatience,
  TestUpsideDown,
  TestDistinctPrimeFactorisation,
  TestOnTheRightTrack,
  TestNumberLadder,
  TestWatchingTheClock,
  TestUnlock,
  TestLuckyNumbers,
  TestLoops,
  TestIncreasingPasswords,
  TestBlockPalindromes,
  TestBattleships,
  TestModernArt,
  TestPromenadeFractions,
  TestMigration,
  TestPrimeConnections,
  TestColouredTriangles,
  TestMysteryParcel,
  TestDieTipping,
  TestPuzzleGame,
  TestPlayfairCipher,
  TestDotsAndBoxes
} from "content/tests";
import { ncmp, wcmp, debtRepaymentChecker, playingGamesChecker, antsChecker, morseCodeChecker, turingMachineChecker, muTorereChecker, anagramNumbersChecker, accordionPatienceChecker, watchingTheClockChecker, unlockChecker, luckyNumbersChecker, battleshipsChecker, dieTippingChecker, puzzleGameChecker, playfairCipherChecker, dotsAndBoxesChecker } from "utils";

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
    tests: TestRules,
    checker: wcmp
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
    tests: TestMayanCalendar,
    checker: ncmp,
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
    tests: TestShuffling,
    checker: ncmp,
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
    tests: TestCards,
    checker: ncmp,
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
    tests: TestISBN,
    checker: ncmp,
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
    tests: TestMovieMagic,
    checker: ncmp,
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
    tests: TestDrats,
    checker: ncmp,
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
    tests: TestAnagrams,
    checker: wcmp,
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
    tests: TestFractions,
    checker: ncmp,
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
    tests: TestNumberLadder,
    checker: ncmp,
    timeLimit: 5,
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
    tests: TestUnlock,
    checker: unlockChecker,
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
    tests: TestJuggluging,
    checker: ncmp,
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
    tests: TestOnTheRightTrack,
    checker: wcmp,
    timeLimit: 5,
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
    tests: TestShirts,
    checker: ncmp,
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
    checker: debtRepaymentChecker,
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
    tests: TestDecoderRing,
    checker: wcmp,
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
    tests: TestColouredTriangles,
    checker: wcmp,
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
    tests: TestDotsAndBoxes,
    checker: dotsAndBoxesChecker,
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
    tests: TestMysteryParcel,
    checker: ncmp,
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
    tests: TestMigration,
    checker: ncmp,
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
    tests: TestPrimeConnections,
    checker: ncmp,
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
    tests: TestASpaceOddity,
    checker: ncmp,
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
    tests: TestBlockPalindromes,
    checker: ncmp,
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
    tests: TestPromenadeFractions,
    checker: ncmp,
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
    tests: TestLoops,
    checker: ncmp
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
    tests: TestDigitWords,
    checker: wcmp,
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
    tests: TestGoldbachConjecture,
    checker: ncmp,
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
    tests: TestBattleships,
    checker: battleshipsChecker,
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
    tests: TestFibonacciLetters,
    checker: wcmp,
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
    tests: TestEenieMeenieMaineeMo,
    checker: ncmp
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
    tests: TestModernArt,
    checker: wcmp
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
    tests: TestMuTorere,
    checker: muTorereChecker,
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
    tests: TestAnagramNumbers,
    checker: anagramNumbersChecker,
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
    tests: TestIncreasingPasswords,
    checker: wcmp
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
    tests: TestDistinctPrimeFactorisation,
    checker: ncmp,
    timeLimit: 5,
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
    tests: TestEnigmaMachine,
    checker: wcmp,
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
    tests: TestUpsideDown,
    checker: ncmp,
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
    checker: antsChecker,
    tests: TestsAnts
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
    tests: TestLuckyNumbers,
    checker: luckyNumbersChecker,
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
    tests: TestLojban,
    checker: wcmp,
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
    tests: TestWatchingTheClock,
    checker: watchingTheClockChecker
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
    tests: TestPlayfairCipher,
    checker: playfairCipherChecker,
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
    tests: TestMops,
    checker: ncmp,
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
    tests: TestDieTipping,
    checker: dieTippingChecker,
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
    tests: TestPlayingGames,
    checker: playingGamesChecker,
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
    tests: TestTuringMachine,
    checker: turingMachineChecker
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
    tests: TestPuzzleGame,
    checker: puzzleGameChecker
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
    tests: TestChildsPlay,
    checker: ncmp
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
    tests: TestNewOrder,
    checker: ncmp,
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
    tests: TestMorseCode,
    checker: morseCodeChecker
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
    tests: TestAccordionPatience,
    checker: accordionPatienceChecker
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
    tests: TestWaves,
    checker: wcmp
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
    tests: TestStringRewriting,
    checker: ncmp
  }
];